import * as React from "react";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { withTranslation } from "@Server/i18n";
import { IStore } from "@Redux/IStore";
import { TriviaAction } from "@Redux/actions";
import { ITrivia, ReduxNextPageContext } from "@Interfaces";
import { useRouter } from "next/router";
import { MainLayout } from "layouts/main-layout";
import { Heading } from "@Components";

const QuestionLoader: NextPage<ITrivia.IPageProps, ITrivia.InitialProps> = ({
  t,
}) => {
  const { data } = useSelector((state: IStore) => state.trivia);

  const router = useRouter();
  React.useEffect(() => {
    if (data) {
      router.push("/question/1");
    }
  }, [data, router]);

  return (
    <MainLayout title="loading">
      <Heading text={t("common:Loaging")} />
    </MainLayout>
  );
};

QuestionLoader.getInitialProps = async (
  ctx: ReduxNextPageContext
): Promise<ITrivia.InitialProps> => {
  await ctx.store.dispatch(TriviaAction.GetQuestions());
  return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(QuestionLoader);
