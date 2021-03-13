import * as React from "react";
import { useTranslation } from "@Server/i18n";
import { usePage } from "@Hooks";
import { QuestionCard, AnswerOptions } from "@Components";
import { StyledQuestionLayoutContainer } from "./styled-question-layout";
import { MainLayout } from "../main-layout";

export const QuestionLayout: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const { currentPage } = usePage();
  return (
    <MainLayout title={`${t("common:Question")} ${currentPage().asString}`}>
      <StyledQuestionLayoutContainer>
        <QuestionCard />
        <AnswerOptions />
      </StyledQuestionLayoutContainer>
    </MainLayout>
  );
});
