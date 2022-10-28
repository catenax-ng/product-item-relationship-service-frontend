import { Box, Divider, useTheme } from "@mui/material";
import dayjs from "dayjs";
import uniqueId from "lodash/uniqueId";
import { DetailGrid } from "../../../components/DetailGrid";
import { ErrorOutlineIcon, useTranslation } from "../../../lib";
import { JobResponse } from "../../../types/jobs";

export const IRSJobTombstones: React.FC<{ job: JobResponse }> = ({ job }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <section>
      <Box className="irs-tombstones-details">
        <Box className="irs-tombstones-details-header">
          <Box
            style={{
              display: "inline-block",
              color: theme.palette.error.light,
              marginTop: 20,
            }}
          >
            <ErrorOutlineIcon
              style={{
                fontSize: 50,
                float: "left",
                verticalAlign: "middle",
                marginTop: 10,
              }}
            />
            <h2 style={{ float: "left", marginLeft: 10 }}>{t("content.irs.dialog.submodelTombstones.title")}</h2>
          </Box>
        </Box>
        <Box className="irs-tombstones-details-content">
          {job.tombstones.map((stone) => {
            return (
              <Box key={`${uniqueId(stone.catenaXId)}`}>
                <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
                <DetailGrid
                  topic={t("content.irs.dialog.submodelTombstones.lastAttempt") + ":"}
                  content={dayjs(stone.processingError.lastAttempt).format("YYYY-MM-DD HH:mm:ss")}
                />
                <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
                <DetailGrid
                  topic={t("content.irs.dialog.submodelTombstones.errorDetail") + ":"}
                  content={stone.processingError.errorDetail}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </section>
  );
};
