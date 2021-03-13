import * as React from "react";
import Link from "next/link";
import { useTranslation } from "@Server/i18n";
import { LanguageSelector } from "../language-selector";
import { StyledHeaderContainer, StyledHeading } from "./header.style";

export const Header: React.FC = React.memo(() => {
  const caption = useTranslation().t("common:AppName");
  return (
    <StyledHeaderContainer>
      <Link href="/">
        <StyledHeading>{caption}</StyledHeading>
      </Link>
      <LanguageSelector />
    </StyledHeaderContainer>
  );
});
