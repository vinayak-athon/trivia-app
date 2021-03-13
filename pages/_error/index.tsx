import * as React from "react";
import { NextPage } from "next";
import { withTranslation } from "@Server/i18n";
import { ITrivia } from "@Interfaces";

const Error: NextPage<ITrivia.IErrorProps> = ({ t, statusCode }) => {
  return (
    <div>
      {t("common:Error")}
      {statusCode}
    </div>
  );
};

Error.getInitialProps = async ({ res, err }): Promise<ITrivia.IErrorProps> => {
  let statusCode;

  if (res) {
    ({ statusCode } = res);
  } else if (err) {
    ({ statusCode } = err);
  }

  return {
    namespacesRequired: ["common"],
    statusCode,
  } as ITrivia.IErrorProps;
};

export default withTranslation("common")(Error);
