import { useParams } from "react-router-dom";
import { useFetchJobById } from "../../services/queries/jobs";
import { ErrorDisplay } from "../ErrorDisplay";
import { IrsJobDetails } from "./features/IrsJobDetails";
import { IRSJobTombstones } from "./features/IRSJobTombstones";
import { IrsJobVisualization } from "./features/IRSJobVisualization/IrsJobVIsualization";

export const JobDetail: React.FC = () => {
  const { jobId = "" } = useParams();
  const { data: job, isError, isLoading, error } = useFetchJobById(jobId);
  if (isLoading) {
    //TODO: Handle Loading State
    console.warn("implement job loading");
    return null;
  }
  if (isError) {
    return <ErrorDisplay error={error} />;
  }

  return (
    <>
      <IrsJobVisualization job={job} />
      <IrsJobDetails job={job.job} />
      <IRSJobTombstones tombstones={job.tombstones} />
    </>
  );
};
