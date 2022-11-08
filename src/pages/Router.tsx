import { createBrowserRouter } from "react-router-dom";
import { ErrorDisplay } from "./ErrorDisplay";
import ErrorPage from "./ErrorPage";
import { ItemRelationshipService } from "./ItemRelationshipService/ItemRelationshipService";
import { JobDetail } from "./JobDetail/JobDetail";

export const routeConfig = [
  {
    path: "/",
    element: <ItemRelationshipService />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobs/:env/:jobId",
    element: <JobDetail />,
    errorElement: <ErrorDisplay error={undefined} />,
  },
];

export const router = createBrowserRouter(routeConfig);
