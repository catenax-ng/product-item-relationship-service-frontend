import { GridColDef } from "@mui/x-data-grid";

import { IconButton } from "cx-portal-shared-components";
import { ArrowForwardIcon, useTranslation } from "../../../../../lib";
import { defaultDateFormat } from "../../../../../lib/dayjs";
import { Job } from "../../../../../types/jobs";

// Columns definitions of Digital Twin page Data Grid
export const renderJobsTableColumns = (visualize: (id: string) => void): Array<GridColDef> => {
  const { t } = useTranslation();

  return [
    {
      field: "jobId",
      headerName: t("content.irs.jobsTable.jobID"),
      flex: 1,
      filterable: false,
    },
    {
      field: "start",
      headerName: t("content.irs.jobsTable.startDate"),
      width: 150,
      filterable: false,
      valueGetter: ({ row }: { row: Job }) => defaultDateFormat(row.startedOn),
    },
    {
      field: "end",
      headerName: t("content.irs.jobsTable.endDate"),
      width: 150,
      filterable: false,
      valueGetter: ({ row }: { row: Job }) => defaultDateFormat(row.jobCompleted),
    },
    {
      field: "status",
      headerName: t("content.irs.jobsTable.status"),

      filterable: false,
      valueGetter: ({ row }: { row: Job }) => row.jobState,
    },
    {
      field: "visualize",
      headerName: t("content.irs.jobsTable.visualize"),

      sortable: false,
      filterable: false,
      width: 150,
      renderCell: ({ row }: { row: Job }) => (
        <IconButton onClick={() => visualize(row.jobId)} color="secondary" size="small" style={{ alignSelf: "center" }}>
          <ArrowForwardIcon />
        </IconButton>
      ),
    },
  ];
};
