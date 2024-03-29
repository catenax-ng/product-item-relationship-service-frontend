import { Box, Divider, useTheme } from "@mui/material";
import dayjs from "dayjs";
import uniqueId from "lodash/uniqueId";
import { DetailGrid } from "../../../components/DetailGrid";
import { StyledBox, StyledBoxContent, StyledBoxHeader } from "../../../components/StyledBox";
import { Tombstone } from "../../../generated/jobsApi";
import { ErrorOutlineIcon, useTranslation } from "../../../lib";

export const IRSJobTombstones: React.FC<{ tombstones: Tombstone[] }> = ({ tombstones }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <section>
      <StyledBox>
        <StyledBoxHeader>
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
        </StyledBoxHeader>
        <StyledBoxContent>
          {tombstones.map((stone) => {
            return (
              <Box key={`${uniqueId(stone.catenaXId)}`}>
                <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
                <DetailGrid
                  topic={t("content.irs.dialog.submodelTombstones.lastAttempt") + ":"}
                  content={dayjs(stone.processingError?.lastAttempt).format("YYYY-MM-DD HH:mm:ss")}
                />
                <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
                <DetailGrid
                  topic={t("content.irs.dialog.submodelTombstones.errorDetail") + ":"}
                  content={stone.processingError?.errorDetail}
                />
              </Box>
            );
          })}
        </StyledBoxContent>
      </StyledBox>
    </section>
  );
};
