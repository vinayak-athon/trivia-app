import * as React from "react";
import { useTranslation } from "@Server/i18n";
import { useResult } from "@Hooks";
import { Heading, StartPlay, Results } from "@Components";
import { StyledResultLayoutContainer } from "./styled-result-layout";
import { MainLayout } from "../main-layout";

export const ResultLayout: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const { finalScore, completed } = useResult();

  return (
    <MainLayout title={t("common:Result")}>
      {completed && (
        <StyledResultLayoutContainer>
          <Heading text={`${t("common:YourScore")}: ${finalScore}`} />
          <Results />
          <StartPlay caption="PlayAgain" />
        </StyledResultLayoutContainer>
      )}
    </MainLayout>
  );
});
