import * as React from "react";
import { NextPage } from "next";
import { withTranslation } from "@Server/i18n";
import Link from "next/link";
import { ITrivia } from "@Interfaces";
import { MainLayout } from "layouts/main-layout";
import { Button, Heading } from "@Components";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background: #0062cc;
  color: ${({ theme }) => theme.colors.textColorInverse};
  width: 50%;
  margin: 0 auto 10px;
`;
const Custom404: NextPage<ITrivia.IPageProps> = ({ t }) => {
  return (
    <MainLayout title="Page not found">
      <Heading text={t("common:NotFound")} />
      <Link href="/">
        <StyledButton>{t("common:BackHome")}</StyledButton>
      </Link>
    </MainLayout>
  );
};

export default withTranslation("common")(Custom404);
