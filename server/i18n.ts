import NextI18Next from "next-i18next";

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: "en",
  otherLanguages: ["es"],
});

export const {
  appWithTranslation,
  withTranslation,
  useTranslation,
  i18n,
} = NextI18NextInstance;

export default NextI18NextInstance;
