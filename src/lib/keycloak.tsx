import { ReactKeycloakProvider } from "@react-keycloak/web";
import Keycloak from "keycloak-js";
import React from "react";
import { serverConfig } from "../constants/serverConfig";

import { useAppSelector } from "../store/store";

const keycloakConfig: Keycloak.KeycloakConfig = {
  url: "https://centralidp.int.demo.catena-x.net/auth",
  realm: "CX-Central",
  clientId: "Cl2-CX-Portal",
};

export const keycloak = new Keycloak(keycloakConfig);

export const KeyCloakProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { serverEnv } = useAppSelector((state) => state.serverEnvReducer);

  keycloak.authServerUrl = serverConfig[serverEnv].authServerUrl;

  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={{ pkceMethod: "S256" }}>
      {children}
    </ReactKeycloakProvider>
  );
};
