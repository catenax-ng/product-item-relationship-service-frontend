import styled from "@emotion/styled";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { PrivateHeader } from "../../components/layout/Header/PrivateHeader";
import { useCustomKeycloak } from "../../lib/keycloak";
import { useServerEnv } from "../../utils/ServerEnv";
import { getCurrentEnvironment } from "../../utils/sessionStorageHandling";

/**
 * This is used by React Router as Root element for publicly accessible Routes
 * It automatically navigates you to the dashboard if you are logged in.
 *
 * @returns React.ReactNode
 */
export const PublicRoot: React.FC = () => {
  const { authenticated } = useCustomKeycloak();
  const navigate = useNavigate();
  const serverEnv = getCurrentEnvironment();

  if (authenticated && serverEnv !== null) {
    navigate(`${serverEnv}/dashboard`);
  }

  return (
    <>
      <Outlet />
    </>
  );
};

/**
 * Helper to set ServerEnv
 *
 * @returns React.ReactNode
 */
const ServerEnvHelper: React.FC = () => {
  const { env = "" } = useParams();
  const { setServerEnv } = useServerEnv();
  setServerEnv(env);

  return null;
};

/**
 * This is used by React Router as Root element for private Routes
 * It automatically navigates you to the welcome page if you are logged in.
 *
 * @returns React.ReactNode
 */
export const PrivateRoot: React.FC = () => {
  const { authenticated } = useCustomKeycloak();
  const navigate = useNavigate();

  if (authenticated === undefined) {
    // This is used so first render will not display elements of the dashboard and will not trigger network requests.
    return null;
  }

  if (authenticated === false) {
    navigate("/");
  }

  return (
    <>
      <ServerEnvHelper />
      <PrivateHeader />
      <CenterLayout>
        <Outlet />
      </CenterLayout>
    </>
  );
};

const CenterLayout = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 50px 20px;
`;
