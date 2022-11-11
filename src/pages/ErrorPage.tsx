import { Button } from "cx-portal-shared-components";
import { Link, useRouteError } from "react-router-dom";
import { ErrorDisplay } from "./ErrorDisplay";

export default function ErrorPage() {
  const error = useRouteError() as Error & { statusText: string };
  console.error(error);

  return (
    <>
      <ErrorDisplay error={new Error(error.statusText || error.message)} />
      <Link to="/">
        <Button style={{ margin: 20 }} variant="contained" color="secondary">
          Go Home
        </Button>
      </Link>
    </>
  );
}
