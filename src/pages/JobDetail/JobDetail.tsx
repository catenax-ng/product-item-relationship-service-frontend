import { useParams } from "react-router-dom";
import { useFetchJobById } from "../../services/queries/jobs";
import { IrsJobDetailsDisplay } from "./features/IRSJobDetails/IrsJobDetailsDisplay";
import { IRSJobTombstones } from "./features/IRSJobTombstones";
import { IrsJobVisualization } from "./features/IRSJobVisualization/IrsJobVIsualization";

export const JobDetail: React.FC = () => {
  const { jobId = "" } = useParams();
  const { data: job, isError, isLoading } = useFetchJobById(jobId);
  if (isLoading) {
    //TODO: Handle Loading State
    console.warn("implement job loading");
    return null;
  }
  if (isError) {
    //TODO: handle Error state
    console.error("implement job error");
    return null;
  }

  return (
    <>
      <IrsJobVisualization job={job} />
      <IrsJobDetailsDisplay job={job.job} />
      <IRSJobTombstones job={job} />
    </>
  );
};
