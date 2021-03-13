import * as React from "react";
import { NextPage } from "next";
import { ResultLayout } from "layouts/result-layout";
import { withTranslation } from "@Server/i18n";
import { ITrivia } from "@Interfaces";

const Results: NextPage = () => <ResultLayout />;

Results.getInitialProps = async (): Promise<ITrivia.InitialProps> => {
  return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Results);
