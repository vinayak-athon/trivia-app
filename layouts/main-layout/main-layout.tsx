import * as React from "react";
import Head from "next/head";
import { Header } from "@Components";
import { StyledMainLayoutContainer } from "./styled-main-layout";

type TMainLayout = {
  title: string;
};

export const MainLayout: React.FC<TMainLayout> = React.memo(
  ({ children, title }) => {
    return (
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <StyledMainLayoutContainer>
          <Header />
          {children}
        </StyledMainLayoutContainer>
      </>
    );
  }
);
