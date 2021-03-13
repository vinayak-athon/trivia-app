import * as React from "react";
import { NextPage } from "next";
import { HomeLayout } from "layouts/home-layout";
import { ITrivia } from "@Interfaces";
import { withTranslation } from "@Server/i18n";

const Home: NextPage = () => <HomeLayout />;

Home.getInitialProps = async (): Promise<ITrivia.InitialProps> => {
  // declared a namespacesRequired array on your page-level component
  // if we do not add this here, all namespaces to be sent down to the client.
  // possibly negatively impacting the performance to the app.
  return { namespacesRequired: ["common"] };
};

export default withTranslation("common")(Home);
