import { useState } from "react";
import { Table } from "cx-portal-shared-components";
import { useTranslation } from "../../../../lib";
import { useFetchJobs } from "../../../../services/queries/jobs";
import { Job } from "../../../../types/jobs";
import { AutoRefreshSwitch } from "./components/AutoRefreshSwitch";
import { renderJobsTableColumns } from "./components/RenderJobsTableColumns";

export const IRSJobOverview: React.FC = () => {
  const { t } = useTranslation();

  const [isAutoRefreshEnabled, setIsAutoRefreshEnabled] = useState(false);
  const { isLoading, isError, data: jobs = [] } = useFetchJobs(isAutoRefreshEnabled ? 5000 : false);

  if (isError) {
    // TODO: Implement error handling
    return null;
  }

  const visualize = (id: string) => {
    const encodedId = encodeURIComponent(id);
    setJobId(encodedId);
  };
  const columns = renderJobsTableColumns(visualize);

  return (
    <section style={{ paddingBottom: 20 }}>
      <AutoRefreshSwitch onChange={setIsAutoRefreshEnabled} />
      <Table
        title={t("content.irs.jobsTable.title")}
        className="irs-table"
        columns={columns}
        rows={jobs}
        getRowId={(row: Job) => {
          return row.jobId;
        }}
        loading={isLoading}
        disableColumnSelector={true}
        disableDensitySelector={true}
        hideFooter={true}
        disableColumnMenu={true}
        onSelectionModelChange={(item) => {
          visualize(item.toString());
        }}
      />
    </section>
  );
};
