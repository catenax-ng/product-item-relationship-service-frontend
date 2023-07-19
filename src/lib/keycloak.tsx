import { ReactKeycloakProvider, useKeycloak } from "@react-keycloak/web";
import Keycloak from "keycloak-js";
import React from "react";
import { useNavigate } from "react-router-dom";
import { serverConfig } from "../utils/serverConfig";
import { useServerEnv } from "../utils/ServerEnv";

const keycloakConfig: Keycloak.KeycloakConfig = {
  realm: "CX-Central",
  clientId: "Cl2-CX-Portal",
};

export let keycloak = new Keycloak(keycloakConfig);

export const KeyCloakProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { serverEnv } = useServerEnv();
  //NOTE: This is needed as authURL is only for the login page, and not for the token auth provider
  keycloak = new Keycloak({ ...keycloakConfig, url: serverConfig(serverEnv).authServerUrl });
  return (
    <ReactKeycloakProvider authClient={keycloak} initOptions={{ pkceMethod: "S256" }}>
      {children}
    </ReactKeycloakProvider>
  );
};

let customAuthStatus = false;
export let localAuthToken = "";

/**
 * This is a custom keycloak handler that is used to circumvent communication with
 * @returns
 */
export const useCustomKeycloak = () => {
  const { serverEnv } = useServerEnv();
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  if (["DEMO", "LOCAL"].includes(serverEnv)) {
    console.log("serverEnv: " + serverEnv);
    return {
      authenticated: customAuthStatus,
      logout: () => {
        customAuthStatus = false;
        localAuthToken = "";
      },
      login: async (username: string, password: string) => {
        customAuthStatus = true;
        if (serverEnv === "LOCAL") {
          customAuthStatus = await localGetTokenRequest(username, password);
        }
        if (customAuthStatus) navigate(`${serverEnv}/dashboard`);
      },
    };
  }
  return { authenticated: keycloak.authenticated, logout: keycloak.logout, login: keycloak.login };
};

/**
 * This is used to retrieve a auth token in a local environment.
 * This should not be used for any other serverEnvironment
 *
 * @returns
 */
const localGetTokenRequest = async (username: string, password: string) => {
  console.log("localGetTokenRequest");
  const url = import.meta.env[`VITE_SERVER_LOCAL_KEYCLOAK_URL`] + "/realms/CX-Central/protocol/openid-connect/token";

  const data = new URLSearchParams();
  data.append("grant_type", import.meta.env[`VITE_SERVER_LOCAL_GRANT_TYPE`]);
  data.append("scope", import.meta.env[`VITE_SERVER_LOCAL_SCOPE`]);
  data.append("client_id", username); // import.meta.env[`VITE_SERVER_LOCAL_CLIENT_ID`]
  data.append("client_secret", password); // import.meta.env[`VITE_SERVER_LOCAL_CLIENT_SECRET`]

  console.log("Calling url: " + url);
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: data,
    });

    const tokenResponse = await response.json();

    localAuthToken = tokenResponse["access_token"];
    console.log("localAuthToken: " + localAuthToken);
    return true;
  } catch (e) {
    return false;
  }
};
