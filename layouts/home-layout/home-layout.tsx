import * as React from "react";
import { useTranslation } from "@Server/i18n";
import { Heading, StartPlay } from "@Components";
import { StyledHomeLayoutContainer } from "./styled-home-layout";
import { MainLayout } from "../main-layout";

export const HomeLayout: React.FC = React.memo(() => {
  const { t } = useTranslation();

  return (
    <MainLayout title={t("common:Home")}>
      <StyledHomeLayoutContainer>
        <Heading text={t("common:AppNarrationDescr")} />
        <Heading text={t("common:AppNarrationQuest")} />
        <StartPlay caption="Begin" />
      </StyledHomeLayoutContainer>
    </MainLayout>
  );
});
