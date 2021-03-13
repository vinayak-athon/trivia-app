import * as React from "react";
import { useTranslation } from "@Server/i18n";
import { useAnswer } from "@Hooks";
import {
  StyledAnswerOptionsContainer,
  StyledOptionTrue,
  StyledOptionFalse,
} from "./answer-options.style";

export const AnswerOptions: React.FC = React.memo(() => {
  const { t } = useTranslation();
  const { submitAnswer, submittingAnswer } = useAnswer();
  return (
    <StyledAnswerOptionsContainer>
      <StyledOptionTrue
        disabled={submittingAnswer}
        onClick={() => submitAnswer("True")}
        className="option__true"
      >
        {t("common:True")}
      </StyledOptionTrue>
      <StyledOptionFalse
        disabled={submittingAnswer}
        onClick={() => submitAnswer("False")}
        className="option__false"
      >
        {t("common:False")}
      </StyledOptionFalse>
    </StyledAnswerOptionsContainer>
  );
});
