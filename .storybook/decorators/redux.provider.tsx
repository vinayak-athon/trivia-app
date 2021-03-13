import { Provider } from "react-redux";
import { makeStore } from "../../redux-store";
import { mockState } from "../../test/mocks";

export const withRedux = () => (story: any) => (
  <Provider store={makeStore(mockState)}>
    {story()}
  </Provider>
);
