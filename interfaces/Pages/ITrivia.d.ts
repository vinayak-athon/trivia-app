import { WithTranslation } from "next-i18next";

declare namespace ITrivia {
  export interface IPageProps extends WithTranslation {}

  export interface InitialProps {
    namespacesRequired: string[];
  }
  export interface IErrorProps extends WithTranslation {
    statusCode?: number;
    namespacesRequired: string[];
  }
  export interface IStateProps {
    fetching: boolean;
    data: any;
    errors: any;
  }

  export interface IUserAnswer {
    data: any;
  }

  namespace Actions {
    export interface IMapPayload {}
    export interface IMapResponse {}
  }
}

export { ITrivia };
