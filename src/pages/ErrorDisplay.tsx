import { Box } from "@mui/system";
import React from "react";
//TODO: Create Better Layout

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
        </Box>
      </Box>
    </section>
  );
};
