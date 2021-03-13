import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { theme } from "@Definitions";
import { ThemeProvider } from "styled-components";
import configureMockStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { Provider } from "react-redux";
import { mockState } from "@Test/mocks";

export const createMockStore = (initialState = {}) => {
  type State = typeof initialState;
  const middlewares = [thunk];
  const mockStore = configureMockStore<
    State,
    ThunkDispatch<State, any, AnyAction>
  >(middlewares);
  const store = mockStore(initialState);
  return store;
};

const Providers = ({ children }: { children: React.ReactElement }) => {
  const store = createMockStore(mockState);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "queries">
) => render(ui, { wrapper: Providers as React.ComponentType, ...options });

export * from "@testing-library/react";
export { customRender as render };
