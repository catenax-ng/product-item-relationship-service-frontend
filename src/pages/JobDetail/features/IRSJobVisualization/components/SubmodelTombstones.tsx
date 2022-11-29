/********************************************************************************
 * Copyright (c) 2021,2022 BMW Group AG
 * Copyright (c) 2021,2022 Contributors to the CatenaX (ng) GitHub Organisation.
 *
 * See the NOTICE file(s) distributed with this work for additional
 * information regarding copyright ownership.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Apache License, Version 2.0 which is available at
 * https://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ********************************************************************************/

import { Box, Divider } from "@mui/material";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SourceIcon from "@mui/icons-material/Source";
import { useTheme } from "@mui/material";
import dayjs from "dayjs";
import uniqueId from "lodash/uniqueId";
import { useTranslation } from "react-i18next";
import SyntaxHighlighter from "react-syntax-highlighter";
import { googlecode } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { DetailGrid } from "../../../../../components/DetailGrid";
import { JobResponse, Submodel, SubmodelDescriptor, Tombstone } from "../../../../../types/jobs";

interface Props {
  job: JobResponse;
  subModel: SubmodelDescriptor;
  // hasTombstones?: (x:boolean) => void
  // setPayload?: (x:boolean) => void
}

export const getTombstones = (subModel: SubmodelDescriptor, job: JobResponse): Tombstone[] => {
  const endpointAddress = subModel.endpoints[0].protocolInformation.endpointAddress;
  const tombstones = job.tombstones;
  return tombstones.filter((x) => x.endpointURL === endpointAddress);
};

export const getSubModelPayload = (subModelId: string, job: JobResponse): Submodel[] => {
  return job.submodels.filter((x) => x.identification === subModelId);
};

export const SubmodelTombstones: React.FC<Props> = ({ subModel, job }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const tombstones: Tombstone[] = getTombstones(subModel, job);

  const hasTombstones = tombstones.length > 0;

  const submodelPayload = getSubModelPayload(subModel.identification, job);

  const hasPayload = () => (submodelPayload.length > 0 ? true : false);

  return (
    <>
      {hasTombstones && (
        <Box key={"tombstones"}>
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
            ></ErrorOutlineIcon>
            <h2 style={{ float: "left", marginLeft: 10 }}>{t("content.irs.dialog.submodelTombstones.title")}</h2>
          </Box>

          {tombstones.map((stone) => {
            // console.log(JSON.parse('{'+stone.processingError.errorDetail.toString()+'}'))
            return (
              <Box key={`${uniqueId(stone.catenaXId)}`}>
                <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
                <DetailGrid
                  topic={t("content.irs.dialog.submodelTombstones.lastAttempt")}
                  content={dayjs(stone.processingError.lastAttempt).format("YYYY-MM-DD HH:mm:ss")}
                />
                <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
                <DetailGrid
                  topic={t("content.irs.dialog.submodelTombstones.errorDetail")}
                  content={stone.processingError.errorDetail}
                />
              </Box>
            );
          })}
        </Box>
      )}

      {hasPayload() && (
        <>
          <Box
            style={{
              display: "inline-block",
              color: theme.palette.success.main,
              marginTop: 20,
            }}
          >
            <SourceIcon
              style={{
                fontSize: 50,
                float: "left",
                verticalAlign: "middle",
                marginTop: 10,
              }}
            ></SourceIcon>
            <h2 style={{ float: "left", marginLeft: 10 }}>{t("content.irs.dialog.submodelPayload.title")}</h2>
          </Box>

          {submodelPayload.map((payload) => {
            return (
              <Box key={`${uniqueId(payload.identification)}`}>
                <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />

                <DetailGrid
                  topic={t("content.irs.dialog.submodelPayload.payload")}
                  content={
                    <SyntaxHighlighter
                      key={`payload_${payload.identification}_${payload.aspectType}_syntax`}
                      style={googlecode}
                      language="json"
                    >
                      {JSON.stringify(payload.payload, null, 2)}
                    </SyntaxHighlighter>
                  }
                />
              </Box>
            );
          })}
        </>
      )}
    </>
  );
};
