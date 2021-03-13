import React from "react";
import { StyledLanguageButtonContainer } from "./language-button.style";
import { ILanguageButton } from "./language-button.type";

export const LanguageButton: React.FunctionComponent<ILanguageButton.IProps> = ({
  lang,
  isActive,
  onClick,
}) => {
  return (
    <StyledLanguageButtonContainer isActive={isActive} onClick={onClick}>
      {lang}
    </StyledLanguageButtonContainer>
  );
};
