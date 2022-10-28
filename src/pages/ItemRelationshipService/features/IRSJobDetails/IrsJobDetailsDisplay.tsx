import { Box, Divider, Grid } from "@mui/material";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { DetailGrid } from "../../../../components/DetailGrid";
import { BeautifulJson } from "../../../../lib/react-syntax-highlighter";
import { Job } from "../../../../types/jobs";

export const IrsJobDetailsDisplay: React.FC<{ job: Job }> = ({ job }) => {
  const { t } = useTranslation();

  return (
    <section
      style={{
        padding: "34px 20px",
      }}
    >
      <Box className="irs-job-details">
        <Box className="irs-job-details-header">
          <h5>{t("content.irs.jobDetails.title")}</h5>
        </Box>
        <Box className="irs-job-details-content">
          <Grid>
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid topic={"Job ID:"} content={job?.jobId} />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid topic={t("content.irs.jobDetails.globalAssetId")} content={job.globalAssetId} />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid topic={"Job State:"} content={job.jobState} />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid
              topic={t("content.irs.jobDetails.exception")}
              content={<BeautifulJson json={job.exception} />}
            />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid
              topic={t("content.irs.jobDetails.createdOn")}
              content={dayjs(job.createdOn).format("YYYY-MM-DD HH:mm:ss")}
            />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid
              topic={t("content.irs.jobDetails.startedOn")}
              content={dayjs(job.startedOn).format("YYYY-MM-DD HH:mm:ss")}
            />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid
              topic={t("content.irs.jobDetails.lastModifiedOn")}
              content={dayjs(job.lastModifiedOn).format("YYYY-MM-DD HH:mm:ss")}
            />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid
              topic={t("content.irs.jobDetails.jobCompleted")}
              content={dayjs(job?.jobCompleted).format("YYYY-MM-DD HH:mm:ss")}
            />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid topic={t("content.irs.jobDetails.owner")} content={job.owner} />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid topic={t("content.irs.jobDetails.summary")} content={<BeautifulJson json={job.summary} />} />
            <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
            <DetailGrid
              topic={t("content.irs.jobDetails.jobParameter")}
              content={<BeautifulJson json={job.jobParameter} />}
            />
          </Grid>
        </Box>
      </Box>
    </section>
  );
};
