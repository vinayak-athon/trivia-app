import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      backgroundColorInverse: string;
      textColor: string;
      textColorInverse: string;
      black: string;
    };
  }
}
