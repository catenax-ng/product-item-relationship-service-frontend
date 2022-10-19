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

import { Typography, CustomAccordion } from 'cx-portal-shared-components'
import { ShellDescriptor, SubmodelDescriptors } from 'features/irs/types'
import { DetailGrid } from '../../../shared/basic/DetailGrid'
import { Grid, Box, Divider, useTheme } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { SubmodelTobmstones } from './SubmodelTobmstones'
import uniqueId from 'lodash/uniqueId'

export const NodeDetailsTwo = ({ twin }: { twin: ShellDescriptor }) => {
  const theme = useTheme()
  const { t } = useTranslation()

  const getDesciption = (elem: ShellDescriptor | SubmodelDescriptors) => (
    <Typography sx={{ mb: 3, typography: 'body3' }}>
      {elem.description[0]
        ? elem.description[0].text
        : t('content.digitaltwin.detail.no_description')}
    </Typography>
  )

  const hasSubmodels = () => twin.submodelDescriptors.length > 0

  // const [showTombstone, setShowTombstone] = useState<boolean>(false)
  // const hasTombstones = (bol:boolean) =>{
  //     setShowTombstone(bol)
  // }

  const secondaryContent = (
    subModel: SubmodelDescriptors,
    semId: string,
    idKey: string
  ) => (
    <div key={uniqueId()}>
      <h1 style={{ marginTop: '100px' }}>{subModel.idShort} aspect</h1>
      <h3>Submodel Descriptor</h3>
      {getDesciption(subModel)}
      <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
      <DetailGrid
        topic={t('content.digitaltwin.detail.semanticid')}
        link={{
          pathname: `/semantichub/${encodeURIComponent(semId)}`,
          state: semId,
        }}
        content={semId}
      />
      <Divider sx={{ mr: -2, ml: -2 }} />
      <Grid
        container
        sx={{
          width: `calc(100% + ${theme.spacing(4)})`,
          m: `0 -${theme.spacing(2)}`,
          p: 2,
          typography: 'label3',
          bgcolor: 'background.background09',
        }}
      >
        <Grid item xs={12}>
          {t('content.digitaltwin.detail.endpoints')}
        </Grid>
      </Grid>
      {subModel.endpoints.map((endpoint, indexEndpoint) => (
        <Box key={`${idKey}_${endpoint.interface}_${indexEndpoint}`}>
          <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
          <DetailGrid
            topic={t('content.digitaltwin.detail.interface')}
            content={endpoint.interface}
          />
          <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
          <DetailGrid
            topic={t('content.digitaltwin.detail.protocol')}
            content={endpoint.protocolInformation.endpointProtocol}
          />
          <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
          <DetailGrid
            topic={t('content.digitaltwin.detail.protocol_endpoint')}
            content={endpoint.protocolInformation.endpointAddress}
          />
          <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
          <DetailGrid
            topic={t('content.digitaltwin.detail.protocol_version')}
            content={endpoint.protocolInformation.endpointProtocolVersion}
          />
        </Box>
      ))}

      <SubmodelTobmstones subModel={subModel}></SubmodelTobmstones>
    </div>
  )

  return (
    <>
      <h1>Shell</h1>
      {getDesciption(twin)}
      {hasSubmodels() && (
        <>
          <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
          <Typography sx={{ mb: 3, typography: 'label2' }}>
            {t('content.digitaltwin.detail.assetId')}
          </Typography>
          {twin.submodelDescriptors.length > 0 && (
            <DetailGrid
              topic={t('content.digitaltwin.detail.submodel_endpoints')}
              content={twin.submodelDescriptors.length}
            />
          )}
          <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
          {twin.specificAssetIds.map((saId, index) => (
            <Box key={saId.key}>
              <DetailGrid
                topic={t('content.digitaltwin.detail.key')}
                content={saId.key}
              />
              <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
              <DetailGrid
                topic={t('content.digitaltwin.detail.value')}
                content={saId.value}
              />
              {saId.semanticId && (
                <>
                  <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
                  <DetailGrid
                    topic={t('content.digitaltwin.detail.semanticid')}
                    content={saId.semanticId.value.join(', ')}
                  />
                </>
              )}
              {index + 1 !== twin.specificAssetIds.length && (
                <Divider sx={{ mb: 2, mr: -2, ml: -2 }} />
              )}
            </Box>
          ))}

          {twin.submodelDescriptors.map((subModel, indexSubmodel) => {
            return secondaryContent(
              subModel,
              subModel.semanticId.value[0],
              `${subModel.idShort}_${indexSubmodel}`
            )
          })}
        </>
      )}
    </>
  )
}
