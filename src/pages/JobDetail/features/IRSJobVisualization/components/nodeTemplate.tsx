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
import { Box, useTheme } from "@mui/material";

import uniqueId from "lodash/uniqueId";
import { NodeData } from "reaflow";
import { Shell, SubmodelDescriptor } from "../../../../../types/jobs";
import { SubmodelDetailCard } from "./submodelDetailCard";

interface NodeDataEx extends NodeData, Shell {}

export const NodeTemplate: React.FC<{ shell: NodeDataEx; onClick: (id: string) => void }> = ({ shell, onClick }) => {
  const { spacing } = useTheme();

  function compare(a: SubmodelDescriptor, b: SubmodelDescriptor) {
    if (a.idShort < b.idShort) {
      return -1;
    }
    if (a.idShort > b.idShort) {
      return 1;
    }
    return 0;
  }
  const sortedSubmodelDescriptors = [...shell.submodelDescriptors].sort(compare);

  return (
    <>
      <div className="node-header">
        <p>{shell.idShort}</p>
        <p>{shell.id}</p>
      </div>
      <Box
        sx={{
          display: "grid",
          gap: spacing(1, 3),
          gridTemplateColumns: `repeat(1, 1fr)`,
          marginLeft: 0.5,
        }}
      >
        <div style={{ textAlign: "left", margin: 5 }}>Aspects:</div>

        {sortedSubmodelDescriptors.map((n: SubmodelDescriptor) => {
          //Todo: Check for errors and add them to the object
          return (
            <SubmodelDetailCard key={uniqueId(n.identification)} submodel={n} aasId={shell.id} onClick={onClick} />
          );
        })}
      </Box>
    </>
  );
};
