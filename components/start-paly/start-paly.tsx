import * as React from "react";
import { useTranslation } from "@Server/i18n";
import { useStartPaly } from "@Hooks";
import { StyledStartPlayContainer } from "./styled-start-paly";

export const StartPlay: React.FC<{ caption: string }> = React.memo(
  ({ caption }) => {
    const { t } = useTranslation();
    const { startPlay: begin } = useStartPaly();

    return (
      <StyledStartPlayContainer onClick={begin}>
        {t(`common:${caption}`)}
      </StyledStartPlayContainer>
    );
  }
);
