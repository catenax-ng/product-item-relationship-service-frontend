import { SharedThemeProvider } from "cx-portal-shared-components";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.scss";
import { I18nService } from "./lib/react-18next";
import { ReactQueryClientProvider } from "./lib/react-query";

I18nService.init();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReactQueryClientProvider>
      <SharedThemeProvider>
        <App />
      </SharedThemeProvider>
    </ReactQueryClientProvider>
  </React.StrictMode>,
);
