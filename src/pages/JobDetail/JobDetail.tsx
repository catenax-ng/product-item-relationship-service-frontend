import { useParams } from "react-router-dom";
import { ErrorDisplay } from "../../components/ErrorDisplay";
import { useFetchJobById } from "../../services/queries/jobs";
import { AvailableServerEnvironments } from "../../store/serverEnvironment";
import { IrsJobDetails } from "./features/IrsJobDetails";
import { IRSJobTombstones } from "./features/IRSJobTombstones";
import { IrsJobVisualization } from "./features/IRSJobVisualization/IrsJobVIsualization";

export const JobDetail: React.FC = () => {
  const { jobId = "", env = "DEMO" } = useParams();
  const {
    data: job,
    isError,
    isLoading,
    error,
  } = useFetchJobById({ id: jobId, serverEnv: env as AvailableServerEnvironments });
  if (isLoading) {
    //TODO: Handle Loading State
    console.warn("implement job loading");
    return null;
  }
  if (isError) {
    return <ErrorDisplay error={error as Error} />;
  }

  return (
    <>
      <IrsJobVisualization job={job} />
      <IrsJobDetails job={job.job} />
      <IRSJobTombstones tombstones={job.tombstones} />
    </>
  );
};
