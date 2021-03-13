import * as React from "react";
import { NextPage } from "next";
import { QuestionLayout } from "layouts/question-layout";
import { withTranslation } from "@Server/i18n";
import { ITrivia } from "@Interfaces";

const Question: NextPage = () => <QuestionLayout />;

Question.getInitialProps = async (): Promise<ITrivia.InitialProps> => {
  return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Question);
