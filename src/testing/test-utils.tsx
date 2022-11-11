import type { PreloadedState } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { render, renderHook, RenderOptions } from "@testing-library/react";
import React, { FC } from "react";
import { Provider } from "react-redux";
import { serverEnvReducer } from "../store/serverEnvironment";
import { AppStore, RootState } from "../store/store";

import userEvent from "@testing-library/user-event";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import { ReactQueryTestClientProvider } from "../lib";
import i18n from "./i18n-testconfig";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({ reducer: { serverEnvReducer }, preloadedState }),
    ...renderOptions
  }: ExtendedRenderOptions = {},
) {
  const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
      <I18nextProvider i18n={i18n}>
        <ReactQueryTestClientProvider>
          <Provider store={store}>{children}</Provider>
        </ReactQueryTestClientProvider>
      </I18nextProvider>
    );
  };

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function renderCustomHook<Props, Result>(fn: (props: Props) => Result) {
  const wrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
    <ReactQueryTestClientProvider>{children}</ReactQueryTestClientProvider>
  );
  return renderHook(fn, { wrapper });
}

export const renderWithRouter = (ui: React.ReactElement, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...renderWithProviders(ui, { wrapper: BrowserRouter }),
  };
};

export * from "@testing-library/react";
export { renderWithProviders as render };
export { renderCustomHook as renderHook };
