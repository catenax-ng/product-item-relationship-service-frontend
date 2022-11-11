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

import { Divider, Grid, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";

import dayjs from "dayjs";
import { DetailGrid } from "../../../../../components/DetailGrid";
import { Relationship } from "../../../../../types/jobs";

export const EdgeDetails = ({ edge }: { edge: Relationship }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <>
      <Divider sx={{ mr: -2, ml: -2 }} />
      <Grid
        container
        sx={{
          width: `calc(100% + ${theme.spacing(4)})`,
          m: `0 -${theme.spacing(2)}`,
          p: 2,
          typography: "label3",
          bgcolor: "background.background09",
        }}
      >
        <Grid item xs={12}>
          Edge
        </Grid>
      </Grid>

      <>
        <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
        <DetailGrid topic={t("content.irs.dialog.edge.catenaXId") + ":"} content={edge.catenaXId} />
        <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
        <DetailGrid
          topic={t("content.irs.dialog.edge.childCatenaXId") + ":"}
          content={edge.linkedItem.childCatenaXId}
        />
        <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
        <DetailGrid
          topic={t("content.irs.dialog.edge.assembledOn") + ":"}
          content={dayjs(edge.linkedItem.assembledOn).format("YYYY-MM-DD HH:mm:ss")}
        />
        <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
        <DetailGrid
          topic={t("content.irs.dialog.edge.lastModifiedOn") + ":"}
          content={dayjs(edge.linkedItem.lastModifiedOn).format("YYYY-MM-DD HH:mm:ss")}
        />
        <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
        <DetailGrid
          topic={t("content.irs.dialog.edge.lifecycleContext") + ":"}
          content={edge.linkedItem.lifecycleContext}
        />
        <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
        <DetailGrid
          topic={t("content.irs.dialog.edge.measurementUnit.datatypeURI") + ":"}
          content={edge.linkedItem.quantity.measurementUnit.datatypeURI}
        />
        <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
        <DetailGrid
          topic={t("content.irs.dialog.edge.measurementUnit.lexicalValue") + ":"}
          content={edge.linkedItem.quantity.measurementUnit.lexicalValue}
        />
        <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
        <DetailGrid
          topic={t("content.irs.dialog.edge.quantityNumber") + ":"}
          content={edge.linkedItem.quantity.quantityNumber}
        />
      </>
    </>
  );
};
