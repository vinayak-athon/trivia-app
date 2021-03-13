import * as React from "react";
import { usePage, useQuestion } from "@Hooks";
import { Heading } from "../heading";
import {
  StyledQuestionCardContainer,
  StyledQuestionContainer,
  StyledProgressContainer,
} from "./styled-question-card";

export const QuestionCard: React.FC = React.memo(() => {
  const { category, question } = useQuestion();
  const { currentPage } = usePage();
  return (
    <StyledQuestionCardContainer>
      <Heading text={category} />
      <StyledQuestionContainer>{question}</StyledQuestionContainer>
      <StyledProgressContainer>
        {currentPage().asString}
        /10
      </StyledProgressContainer>
    </StyledQuestionCardContainer>
  );
});
