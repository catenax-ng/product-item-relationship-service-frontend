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
import { GridColDef } from '@mui/x-data-grid'
import { IconButton } from 'cx-portal-shared-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { irsjobstatus } from 'features/irs/types'
import { useTranslation } from 'react-i18next'

// Columns definitions of Digital Twin page Data Grid
export const IrsJobsTableColumns = (
  visualize: (id: string) => void
): Array<GridColDef> => {
  const { t } = useTranslation()

  return [
    {
      field: 'jobId',
      headerName: t('content.irs.jobsTable.jobID'),
      flex: 3,
      filterable: false,
    },
    {
      field: 'status',
      headerName: t('content.irs.jobsTable.status'),
      // headerName: 'status',
      flex: 2,
      filterable: false,
      valueGetter: ({ row }: { row: irsjobstatus }) => row.status,
    },
    {
      field: 'visualize',
      // headerName: `Visualize`,
      headerName: t('content.irs.jobsTable.visualize'),
      flex: 1,
      sortable: false,
      filterable: false,
      width: 150,
      renderCell: ({ row }: { row: irsjobstatus }) => (
        <IconButton
          onClick={() => visualize(row.jobId)}
          color="secondary"
          size="small"
          style={{ alignSelf: 'center' }}
        >
          <ArrowForwardIcon />
        </IconButton>
      ),
    },
  ]
}
