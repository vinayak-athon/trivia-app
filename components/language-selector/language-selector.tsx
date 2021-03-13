import * as React from "react";
import { i18n } from "@Server/i18n";
import { LanguageButton } from "../language-button";
import languageSelectorConfig from "./language-selector.config.json";

export const LanguageSelector: React.FC = React.memo(() => {
  const [activeLanguage, setActiveLanguage] = React.useState<string | null>(
    null
  );
  const changeLanguage = (lang: string) => {
    if (lang !== activeLanguage) {
      i18n.changeLanguage(lang);
      setActiveLanguage(lang);
    }
  };

  React.useEffect(() => {
    if (!activeLanguage) {
      setActiveLanguage(i18n.language || "en");
    }
  }, []);
  return activeLanguage ? (
    <>
      {languageSelectorConfig.map(({ lang, displayText }) => (
        <LanguageButton
          key={lang}
          lang={displayText}
          isActive={activeLanguage === lang}
          onClick={() => changeLanguage(lang)}
        />
      ))}
    </>
  ) : null;
});
