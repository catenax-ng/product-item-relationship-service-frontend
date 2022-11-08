import { Box } from "@mui/system";
import { Button } from "cx-portal-shared-components";
import React from "react";
import { Link, useRouteError } from "react-router-dom";
//TODO: Create Better Layout

export default function ErrorPage() {
  const error = useRouteError() as Error & { statusText: string };
  console.error(error);

  return (
    <>
      <section>
        <Box className="irs-error-page">
          <Box className="irs-error-page-header">
            <h1>Oops!</h1>
          </Box>
          <Box className="error-page-body">
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
            <Link to="/">
              <Button style={{ margin: 20 }} variant="contained" color="secondary">
                Go Home
              </Button>
            </Link>
          </Box>
        </Box>
      </section>
    </>
  );
}

export const ErrorDisplay: React.FC<{ error: unknown }> = ({ error }) => {
  return (
    <section>
      <Box className="irs-error-page">
        <Box className="irs-error-page-header">
          <h1>Oops!</h1>
        </Box>
        <Box className="error-page-body">
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{(error as Error).message}</i>
          </p>
          <Link to="/">
            <Button style={{ margin: 20 }} variant="contained" color="secondary">
              Go Home
            </Button>
          </Link>
        </Box>
      </Box>
    </section>
  );
};
