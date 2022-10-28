import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { ItemRelationshipService } from "./ItemRelationshipService/ItemRelationshipService";
import { JobDetail } from "./JobDetail/JobDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ItemRelationshipService />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/jobs/:jobId",
    element: <JobDetail />,
  },
]);
