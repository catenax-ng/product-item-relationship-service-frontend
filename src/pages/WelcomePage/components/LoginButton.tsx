import { Button } from "cx-portal-shared-components";
import { useTranslation } from "react-i18next";
import { useCustomKeycloak } from "../../../lib/keycloak";

/**
 * The Login button is used to navigate to the keycloak logging page.
 * If the user is already logged in, the user will be logged out.
 * This is to ensure that the user is authenticated for the currently selected server environment.
 * @returns React.Component
 */

interface LoginProps {
  username: string;
  password: string;
}

export const LoginButton: React.FC<LoginProps> = ({ username, password }) => {
  const { login, logout, authenticated } = useCustomKeycloak();
  const { t } = useTranslation();

  const clickHandler = async () => {
    if (authenticated) {
      await logout();
    }
    await login(username, password);
  };

  return (
    <Button onClick={clickHandler} style={{ marginTop: "75px" }}>
      {t("content.irs.welcomePage.loginButtonLabel")}
    </Button>
  );
};
