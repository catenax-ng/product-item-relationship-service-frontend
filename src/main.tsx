import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { I18nService } from "./lib/react-18next";
import { ReactQueryClientProvider } from "./lib/react-query";
import UserService from "./services/auth/UserService";

I18nService.init();

UserService.init((user) => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <ReactQueryClientProvider>
        <App />
      </ReactQueryClientProvider>
    </React.StrictMode>,
  );
});
