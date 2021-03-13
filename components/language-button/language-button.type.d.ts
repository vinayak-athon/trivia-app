declare namespace ILanguageButton {
  export interface IProps {
    lang: string;
    onClick: (param: any) => void;
    isActive: boolean;
  }
}

export { ILanguageButton };
