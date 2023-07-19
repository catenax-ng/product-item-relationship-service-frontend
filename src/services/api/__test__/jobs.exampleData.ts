import { ErrorResponse, Jobs } from "../../../generated/jobsApi";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
export const JobsDemoDataSuccess: Jobs = {
  job: {
    id: "42b335a0-4ccb-4918-be9b-1a8f6b53116f",
    globalAssetId: "urn:uuid:0733946c-59c6-41ae-9570-cb43a6e4c79e",
    state: "COMPLETED",
    exception: undefined,
    createdOn: "2023-01-30T09:38:59.692798661Z",
    startedOn: "2023-01-30T09:38:59.69298626Z",
    lastModifiedOn: "2023-01-30T09:42:31.085628948Z",
    completedOn: "2023-01-30T09:42:31.085630748Z",
    owner: "Unknown",
    summary: {
      asyncFetchedItems: {
        running: 0,
        completed: 14,
        failed: 14,
      },
      bpnLookups: {
        completed: 0,
        failed: 0,
      },
    },
    parameter: {
      bomLifecycle: "asPlanned",
      aspects: ["PartAsPlanned", "SingleLevelBomAsPlanned"],
      depth: 10,
      direction: "downward",
      collectAspects: true,
      lookupBPNs: false,
      callbackUrl: null,
    },
  },
  relationships: [
    {
      catenaXId: "urn:uuid:0733946c-59c6-41ae-9570-cb43a6e4c79e",
      linkedItem: {
        quantity: {
          quantityNumber: 1.0,
          measurementUnit: {
            datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#curie",
            lexicalValue: "unit:piece",
          },
        },
        lifecycleContext: "asPlanned",
        assembledOn: "2022-02-03T14:48:54.709Z",
        lastModifiedOn: "2022-02-03T14:48:54.709Z",
        childCatenaXId: "urn:uuid:aad27ddb-43aa-4e42-98c2-01e529ef127c",
      },
      aspectType: "SingleLevelBomAsPlanned",
    },
    {
      catenaXId: "urn:uuid:0733946c-59c6-41ae-9570-cb43a6e4c79e",
      linkedItem: {
        quantity: {
          quantityNumber: 1.0,
          measurementUnit: {
            datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#curie",
            lexicalValue: "unit:piece",
          },
        },
        lifecycleContext: "asPlanned",
        assembledOn: "2022-02-03T14:48:54.709Z",
        lastModifiedOn: "2022-02-03T14:48:54.709Z",
        childCatenaXId: "urn:uuid:07cb071f-8716-45fe-89f1-f2f77a1ce93b",
      },
      aspectType: "SingleLevelBomAsPlanned",
    },
    {
      catenaXId: "urn:uuid:0733946c-59c6-41ae-9570-cb43a6e4c79e",
      linkedItem: {
        quantity: {
          quantityNumber: 1.0,
          measurementUnit: {
            datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#curie",
            lexicalValue: "unit:piece",
          },
        },
        lifecycleContext: "asPlanned",
        assembledOn: "2022-02-03T14:48:54.709Z",
        lastModifiedOn: "2022-02-03T14:48:54.709Z",
        childCatenaXId: "urn:uuid:2c57b0e9-a653-411d-bdcd-64787e9fd3a7",
      },
      aspectType: "SingleLevelBomAsPlanned",
    },
    {
      catenaXId: "urn:uuid:07cb071f-8716-45fe-89f1-f2f77a1ce93b",
      linkedItem: {
        quantity: {
          quantityNumber: 1.0,
          measurementUnit: {
            datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#curie",
            lexicalValue: "unit:piece",
          },
        },
        lifecycleContext: "asPlanned",
        assembledOn: "2022-02-03T14:48:54.709Z",
        lastModifiedOn: "2022-02-03T14:48:54.709Z",
        childCatenaXId: "urn:uuid:bee5614f-9e46-4c98-9209-61a6f2b2a7fc",
      },
      aspectType: "SingleLevelBomAsPlanned",
    },
    {
      catenaXId: "urn:uuid:07cb071f-8716-45fe-89f1-f2f77a1ce93b",
      linkedItem: {
        quantity: {
          quantityNumber: 0.3301,
          measurementUnit: {
            datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#curie",
            lexicalValue: "unit:kilogram",
          },
        },
        lifecycleContext: "asPlanned",
        assembledOn: "2022-02-03T14:48:54.709Z",
        lastModifiedOn: "2022-02-03T14:48:54.709Z",
        childCatenaXId: "urn:uuid:3cdd2826-5df0-4c7b-b540-9eeccecb2301",
      },
      aspectType: "SingleLevelBomAsPlanned",
    },
    {
      catenaXId: "urn:uuid:aad27ddb-43aa-4e42-98c2-01e529ef127c",
      linkedItem: {
        quantity: {
          quantityNumber: 6.0,
          measurementUnit: {
            datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#curie",
            lexicalValue: "unit:piece",
          },
        },
        lifecycleContext: "asPlanned",
        assembledOn: "2022-02-03T14:48:54.709Z",
        lastModifiedOn: "2022-02-03T14:48:54.709Z",
        childCatenaXId: "urn:uuid:e5c96ab5-896a-482c-8761-efd74777ca97",
      },
      aspectType: "SingleLevelBomAsPlanned",
    },
    {
      catenaXId: "urn:uuid:2c57b0e9-a653-411d-bdcd-64787e9fd3a7",
      linkedItem: {
        quantity: {
          quantityNumber: 1.0,
          measurementUnit: {
            datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#curie",
            lexicalValue: "unit:piece",
          },
        },
        lifecycleContext: "asPlanned",
        assembledOn: "2022-02-03T14:48:54.709Z",
        lastModifiedOn: "2022-02-03T14:48:54.709Z",
        childCatenaXId: "urn:uuid:4518c080-14fb-4252-b8de-4362d615868d",
      },
      aspectType: "SingleLevelBomAsPlanned",
    },
    {
      catenaXId: "urn:uuid:2c57b0e9-a653-411d-bdcd-64787e9fd3a7",
      linkedItem: {
        quantity: {
          quantityNumber: 1.0,
          measurementUnit: {
            datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#curie",
            lexicalValue: "unit:piece",
          },
        },
        lifecycleContext: "asPlanned",
        assembledOn: "2022-02-03T14:48:54.709Z",
        lastModifiedOn: "2022-02-03T14:48:54.709Z",
        childCatenaXId: "urn:uuid:bee5614f-9e46-4c98-9209-61a6f2b2a7fc",
      },
      aspectType: "SingleLevelBomAsPlanned",
    },
    {
      catenaXId: "urn:uuid:bee5614f-9e46-4c98-9209-61a6f2b2a7fc",
      linkedItem: {
        quantity: {
          quantityNumber: 1.0,
          measurementUnit: {
            datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#curie",
            lexicalValue: "unit:piece",
          },
        },
        lifecycleContext: "asPlanned",
        assembledOn: "2022-02-03T14:48:54.709Z",
        lastModifiedOn: "2022-02-03T14:48:54.709Z",
        childCatenaXId: "urn:uuid:86f69643-3b90-4e34-90bf-789edcf40e7e",
      },
      aspectType: "SingleLevelBomAsPlanned",
    },
    {
      catenaXId: "urn:uuid:e5c96ab5-896a-482c-8761-efd74777ca97",
      linkedItem: {
        quantity: {
          quantityNumber: 10.0,
          measurementUnit: {
            datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#curie",
            lexicalValue: "unit:piece",
          },
        },
        lifecycleContext: "asPlanned",
        assembledOn: "2022-02-03T14:48:54.709Z",
        lastModifiedOn: "2022-02-03T14:48:54.709Z",
        childCatenaXId: "urn:uuid:c7a2b803-f8fe-4b79-b6fc-967ce847c9a9",
      },
      aspectType: "SingleLevelBomAsPlanned",
    },
    {
      catenaXId: "urn:uuid:e5c96ab5-896a-482c-8761-efd74777ca97",
      linkedItem: {
        quantity: {
          quantityNumber: 0.11,
          measurementUnit: {
            datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#curie",
            lexicalValue: "unit:kilogram",
          },
        },
        lifecycleContext: "asPlanned",
        assembledOn: "2022-02-03T14:48:54.709Z",
        lastModifiedOn: "2022-02-03T14:48:54.709Z",
        childCatenaXId: "urn:uuid:15d2fcc8-6439-4d1e-904b-e62b4d3bf323",
      },
      aspectType: "SingleLevelBomAsPlanned",
    },
    {
      catenaXId: "urn:uuid:c7a2b803-f8fe-4b79-b6fc-967ce847c9a9",
      linkedItem: {
        quantity: {
          quantityNumber: 1.0,
          measurementUnit: {
            datatypeURI: "urn:bamm:io.openmanufacturing:meta-model:1.0.0#curie",
            lexicalValue: "unit:piece",
          },
        },
        lifecycleContext: "asPlanned",
        assembledOn: "2022-02-03T14:48:54.709Z",
        lastModifiedOn: "2022-02-03T14:48:54.709Z",
        childCatenaXId: "urn:uuid:4f7b1cf2-a598-4027-bc78-63f6d8e55699",
      },
      aspectType: "SingleLevelBomAsPlanned",
    },
  ],
  shells: [
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:0733946c-59c6-41ae-9570-cb43a6e4c79e"],
      },
      idShort: "VehicleModelA",
      identification: "urn:uuid:96b84896-77b7-40ce-9c10-a476993a0e8c",
      specificAssetIds: [
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003AYRE",
          semanticId: null,
        },
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "ZX-55",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:91f0c22d-5762-406f-8d20-8ae479f3eba8",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:0733946c-59c6-41ae-9570-cb43a6e4c79e-urn:uuid:91f0c22d-5762-406f-8d20-8ae479f3eba8/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:323e0e57-15c7-4030-833d-be7f8639064d",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:0733946c-59c6-41ae-9570-cb43a6e4c79e-urn:uuid:323e0e57-15c7-4030-833d-be7f8639064d/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:d5ef7382-aff6-4169-a4a8-d927bf9abeda",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:96b84896-77b7-40ce-9c10-a476993a0e8c-urn:uuid:d5ef7382-aff6-4169-a4a8-d927bf9abeda/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:07cb071f-8716-45fe-89f1-f2f77a1ce93b"],
      },
      idShort: "TierBECU1",
      identification: "urn:uuid:6e47c678-d96a-41ad-ac2e-e069a0d9c985",
      specificAssetIds: [
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003B5MJ",
          semanticId: null,
        },
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "ZX-55",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:b9d630d0-6694-4664-ada5-2af03bd00794",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:07cb071f-8716-45fe-89f1-f2f77a1ce93b-urn:uuid:b9d630d0-6694-4664-ada5-2af03bd00794/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:d6ee8780-1832-4227-a4ac-c2e4e3e6a4fb",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:07cb071f-8716-45fe-89f1-f2f77a1ce93b-urn:uuid:d6ee8780-1832-4227-a4ac-c2e4e3e6a4fb/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:48627bb1-9f3e-48b7-86e9-bebaf5864c06",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:6e47c678-d96a-41ad-ac2e-e069a0d9c985-urn:uuid:48627bb1-9f3e-48b7-86e9-bebaf5864c06/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:aad27ddb-43aa-4e42-98c2-01e529ef127c"],
      },
      idShort: "OEMAHighVoltageBattery",
      identification: "urn:uuid:a825e343-44f5-4021-9b0b-27fe23e39793",
      specificAssetIds: [
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "38049661-08",
          semanticId: null,
        },
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003AYRE",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:692b65f5-c5fb-42b7-993a-73db20753faa",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:aad27ddb-43aa-4e42-98c2-01e529ef127c-urn:uuid:692b65f5-c5fb-42b7-993a-73db20753faa/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:8adb55eb-030b-407c-b0f5-1169632af433",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:aad27ddb-43aa-4e42-98c2-01e529ef127c-urn:uuid:8adb55eb-030b-407c-b0f5-1169632af433/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:8d764f97-e6b0-4ec4-8718-cd258c4a059a",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:a825e343-44f5-4021-9b0b-27fe23e39793-urn:uuid:8d764f97-e6b0-4ec4-8718-cd258c4a059a/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:2c57b0e9-a653-411d-bdcd-64787e9fd3a7"],
      },
      idShort: "TierAGearbox",
      identification: "urn:uuid:ee3331ea-26c8-467a-938a-5ff3350ff397",
      specificAssetIds: [
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003B2OM",
          semanticId: null,
        },
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "32494586-73",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:943a749e-1b8b-4106-ba1d-d2bd55030da5",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:2c57b0e9-a653-411d-bdcd-64787e9fd3a7-urn:uuid:943a749e-1b8b-4106-ba1d-d2bd55030da5/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:3a50eccd-996c-4842-b3c5-d3318ed659ae",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:2c57b0e9-a653-411d-bdcd-64787e9fd3a7-urn:uuid:3a50eccd-996c-4842-b3c5-d3318ed659ae/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:699c15d3-b3fa-4e74-8419-d1b65f6c9f83",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:ee3331ea-26c8-467a-938a-5ff3350ff397-urn:uuid:699c15d3-b3fa-4e74-8419-d1b65f6c9f83/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:bee5614f-9e46-4c98-9209-61a6f2b2a7fc"],
      },
      idShort: "SubTierASensor",
      identification: "urn:uuid:5b8c7c0f-0116-49d3-ae62-532b5923e9b5",
      specificAssetIds: [
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "6740244-02",
          semanticId: null,
        },
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003B3NX",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:9ed6185a-b5cc-478b-b514-d96b8dd12ca9",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:bee5614f-9e46-4c98-9209-61a6f2b2a7fc-urn:uuid:9ed6185a-b5cc-478b-b514-d96b8dd12ca9/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:211fa9e1-b62e-406a-94a1-d3e74ed7c387",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:bee5614f-9e46-4c98-9209-61a6f2b2a7fc-urn:uuid:211fa9e1-b62e-406a-94a1-d3e74ed7c387/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:8d380a70-3ca0-4e9b-b1f6-e69069934c04",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:5b8c7c0f-0116-49d3-ae62-532b5923e9b5-urn:uuid:8d380a70-3ca0-4e9b-b1f6-e69069934c04/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:3cdd2826-5df0-4c7b-b540-9eeccecb2301"],
      },
      idShort: "SubTierBGlue",
      identification: "urn:uuid:378af079-a266-4207-b4b8-6ee088c94abd",
      specificAssetIds: [
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "6775244-06",
          semanticId: null,
        },
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003AXS3",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:1f587551-f963-4824-bf99-9f9db43b9286",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:3cdd2826-5df0-4c7b-b540-9eeccecb2301-urn:uuid:1f587551-f963-4824-bf99-9f9db43b9286/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:c241cc8c-ccd4-4d38-beb6-27f4336a3e01",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:3cdd2826-5df0-4c7b-b540-9eeccecb2301-urn:uuid:c241cc8c-ccd4-4d38-beb6-27f4336a3e01/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:3500c4d9-9fc6-4bcb-95da-d4bcdf63226e",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:378af079-a266-4207-b4b8-6ee088c94abd-urn:uuid:3500c4d9-9fc6-4bcb-95da-d4bcdf63226e/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:e5c96ab5-896a-482c-8761-efd74777ca97"],
      },
      idShort: "HVModul",
      identification: "urn:uuid:4d2670cf-a350-4f5a-81c7-9642c8fd3e61",
      specificAssetIds: [
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003AYRE",
          semanticId: null,
        },
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "8840838-04",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:115699d8-fee5-473a-9ed5-2e12156e1561",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:e5c96ab5-896a-482c-8761-efd74777ca97-urn:uuid:115699d8-fee5-473a-9ed5-2e12156e1561/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:2439024a-8c4b-43a3-b4e3-643156c629e9",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:e5c96ab5-896a-482c-8761-efd74777ca97-urn:uuid:2439024a-8c4b-43a3-b4e3-643156c629e9/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:b288d73f-4f93-4f24-bdd8-024de7c666ed",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:4d2670cf-a350-4f5a-81c7-9642c8fd3e61-urn:uuid:b288d73f-4f93-4f24-bdd8-024de7c666ed/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:4518c080-14fb-4252-b8de-4362d615868d"],
      },
      idShort: "NTierAPlastics",
      identification: "urn:uuid:018975a4-6899-4af0-ab37-b4b275d518b5",
      specificAssetIds: [
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "7A987KK-04",
          semanticId: null,
        },
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003B0Q0",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:a2e15226-c890-4d12-a171-285205d8ab42",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:4518c080-14fb-4252-b8de-4362d615868d-urn:uuid:a2e15226-c890-4d12-a171-285205d8ab42/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:43040f16-774d-4548-b784-354328241659",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:4518c080-14fb-4252-b8de-4362d615868d-urn:uuid:43040f16-774d-4548-b784-354328241659/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:b2cb9a61-c9fd-4ad5-8fb4-29f288e46f9d",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:018975a4-6899-4af0-ab37-b4b275d518b5-urn:uuid:b2cb9a61-c9fd-4ad5-8fb4-29f288e46f9d/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:bee5614f-9e46-4c98-9209-61a6f2b2a7fc"],
      },
      idShort: "SubTierASensor",
      identification: "urn:uuid:5b8c7c0f-0116-49d3-ae62-532b5923e9b5",
      specificAssetIds: [
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "6740244-02",
          semanticId: null,
        },
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003B3NX",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:9ed6185a-b5cc-478b-b514-d96b8dd12ca9",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:bee5614f-9e46-4c98-9209-61a6f2b2a7fc-urn:uuid:9ed6185a-b5cc-478b-b514-d96b8dd12ca9/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:211fa9e1-b62e-406a-94a1-d3e74ed7c387",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:bee5614f-9e46-4c98-9209-61a6f2b2a7fc-urn:uuid:211fa9e1-b62e-406a-94a1-d3e74ed7c387/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:0c7a06f6-d826-4d10-b11b-aedd0933e554",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:5b8c7c0f-0116-49d3-ae62-532b5923e9b5-urn:uuid:0c7a06f6-d826-4d10-b11b-aedd0933e554/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:86f69643-3b90-4e34-90bf-789edcf40e7e"],
      },
      idShort: "NTierANTierProduct",
      identification: "urn:uuid:eac511e7-6e74-42cc-8fce-7a8eef0ce3f1",
      specificAssetIds: [
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003B0Q0",
          semanticId: null,
        },
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "7A047KK-01",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:c77b8958-b5bf-4145-9f70-17ea703b1237",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:86f69643-3b90-4e34-90bf-789edcf40e7e-urn:uuid:c77b8958-b5bf-4145-9f70-17ea703b1237/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:abad5802-5071-4e21-97ae-e6f295731a1c",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:86f69643-3b90-4e34-90bf-789edcf40e7e-urn:uuid:abad5802-5071-4e21-97ae-e6f295731a1c/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:bd611a34-04c2-4e90-8618-de9242b80faa",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:eac511e7-6e74-42cc-8fce-7a8eef0ce3f1-urn:uuid:bd611a34-04c2-4e90-8618-de9242b80faa/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:c7a2b803-f8fe-4b79-b6fc-967ce847c9a9"],
      },
      idShort: "ZBZELLE",
      identification: "urn:uuid:ebd807a7-0b6e-47cf-94fa-29d49de18fb0",
      specificAssetIds: [
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003AYRE",
          semanticId: null,
        },
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "8840374-09",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:08780981-14db-440b-bf59-fe54157bcd65",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:c7a2b803-f8fe-4b79-b6fc-967ce847c9a9-urn:uuid:08780981-14db-440b-bf59-fe54157bcd65/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:d3268f15-d865-425c-9334-da86ae2b4135",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:c7a2b803-f8fe-4b79-b6fc-967ce847c9a9-urn:uuid:d3268f15-d865-425c-9334-da86ae2b4135/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:eeb2795a-6965-4d8c-b6db-198fb81d23b4",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:ebd807a7-0b6e-47cf-94fa-29d49de18fb0-urn:uuid:eeb2795a-6965-4d8c-b6db-198fb81d23b4/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:15d2fcc8-6439-4d1e-904b-e62b4d3bf323"],
      },
      idShort: "SubTierBSealant",
      identification: "urn:uuid:b714a8aa-4f11-4202-b4d8-87a4fe21dc16",
      specificAssetIds: [
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "9A047C7-01",
          semanticId: null,
        },
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003AXS3",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:e20247c0-fe7f-4e3e-9c8b-7a2e908e9962",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:15d2fcc8-6439-4d1e-904b-e62b4d3bf323-urn:uuid:e20247c0-fe7f-4e3e-9c8b-7a2e908e9962/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:4b7ccf39-ab68-44c4-9f70-05ad5dbf2975",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:15d2fcc8-6439-4d1e-904b-e62b4d3bf323-urn:uuid:4b7ccf39-ab68-44c4-9f70-05ad5dbf2975/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:3c411d30-0b83-4cca-b951-4b97bdae579d",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:b714a8aa-4f11-4202-b4d8-87a4fe21dc16-urn:uuid:3c411d30-0b83-4cca-b951-4b97bdae579d/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:86f69643-3b90-4e34-90bf-789edcf40e7e"],
      },
      idShort: "NTierANTierProduct",
      identification: "urn:uuid:eac511e7-6e74-42cc-8fce-7a8eef0ce3f1",
      specificAssetIds: [
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003B0Q0",
          semanticId: null,
        },
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "7A047KK-01",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:c77b8958-b5bf-4145-9f70-17ea703b1237",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:86f69643-3b90-4e34-90bf-789edcf40e7e-urn:uuid:c77b8958-b5bf-4145-9f70-17ea703b1237/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:abad5802-5071-4e21-97ae-e6f295731a1c",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:86f69643-3b90-4e34-90bf-789edcf40e7e-urn:uuid:abad5802-5071-4e21-97ae-e6f295731a1c/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:03b8aefd-fa53-453c-9059-d292867b5b8f",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:eac511e7-6e74-42cc-8fce-7a8eef0ce3f1-urn:uuid:03b8aefd-fa53-453c-9059-d292867b5b8f/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
    {
      administration: null,
      description: [],
      globalAssetId: {
        value: ["urn:uuid:4f7b1cf2-a598-4027-bc78-63f6d8e55699"],
      },
      idShort: "NTierACathodeMaterial",
      identification: "urn:uuid:9d132a4c-0135-4df1-b25b-61b26a926fb7",
      specificAssetIds: [
        {
          key: "manufacturerPartId",
          subjectId: null,
          value: "7A047C7-01",
          semanticId: null,
        },
        {
          key: "manufacturerId",
          subjectId: null,
          value: "BPNL00000003B0Q0",
          semanticId: null,
        },
      ],
      submodelDescriptors: [
        {
          administration: null,
          description: [],
          idShort: "PartAsPlanned",
          identification: "urn:uuid:ff415c66-f5e0-4b15-bfbf-0b547c1a3651",
          semanticId: {
            value: ["urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:4f7b1cf2-a598-4027-bc78-63f6d8e55699-urn:uuid:ff415c66-f5e0-4b15-bfbf-0b547c1a3651/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "SingleLevelBomAsPlanned",
          identification: "urn:uuid:0705ace3-3b89-43ad-b977-cb3f7c48af2b",
          semanticId: {
            value: ["urn:bamm:io.catenax.single_level_bom_as_planned:1.0.2#SingleLevelBomAsPlanned"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane.dev.demo.catena-x.net/urn:uuid:4f7b1cf2-a598-4027-bc78-63f6d8e55699-urn:uuid:0705ace3-3b89-43ad-b977-cb3f7c48af2b/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
        {
          administration: null,
          description: [],
          idShort: "EssIncident",
          identification: "urn:uuid:dd25d668-7ed3-4f8f-a995-2916e5307abb",
          semanticId: {
            value: ["urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident"],
          },
          endpoints: [
            {
              protocolInformation: {
                endpointAddress:
                  "https://irs-provider-controlplane2.dev.demo.catena-x.net/urn:uuid:9d132a4c-0135-4df1-b25b-61b26a926fb7-urn:uuid:dd25d668-7ed3-4f8f-a995-2916e5307abb/submodel?content=value&extent=withBlobValue",
                endpointProtocol: "HTTPS",
                endpointProtocolVersion: "1.0",
                subprotocol: null,
                subprotocolBody: null,
                subprotocolBodyEncoding: null,
              },
              interface: "HTTP",
            },
          ],
        },
      ],
    },
  ],
  tombstones: [],
  submodels: [
    {
      identification: "urn:uuid:323e0e57-15c7-4030-833d-be7f8639064d",
      aspectType: "urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned",
      payload: {
        validityPeriod: {
          validFrom: "2019-04-04T03:19:03.000Z",
          validTo: "2024-12-29T10:25:12.000Z",
        },
        catenaXId: "urn:uuid:0733946c-59c6-41ae-9570-cb43a6e4c79e",
        partTypeInformation: {
          manufacturerPartId: "ZX-55",
          classification: "product",
          nameAtManufacturer: "Vehicle Model A",
        },
      },
    },
    {
      identification: "urn:uuid:b9d630d0-6694-4664-ada5-2af03bd00794",
      aspectType: "urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned",
      payload: {
        validityPeriod: {
          validFrom: "2020-03-28T02:37:02.000Z",
          validTo: "2026-10-10T19:22:52.000Z",
        },
        catenaXId: "urn:uuid:07cb071f-8716-45fe-89f1-f2f77a1ce93b",
        partTypeInformation: {
          manufacturerPartId: "ZX-55",
          classification: "product",
          nameAtManufacturer: "Tier B ECU1",
        },
      },
    },
    {
      identification: "urn:uuid:8adb55eb-030b-407c-b0f5-1169632af433",
      aspectType: "urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned",
      payload: {
        validityPeriod: {
          validFrom: "2016-12-09T05:06:53.000Z",
          validTo: "2027-09-16T00:32:51.000Z",
        },
        catenaXId: "urn:uuid:aad27ddb-43aa-4e42-98c2-01e529ef127c",
        partTypeInformation: {
          manufacturerPartId: "38049661-08",
          classification: "product",
          nameAtManufacturer: "OEM A High Voltage Battery",
        },
      },
    },
    {
      identification: "urn:uuid:3a50eccd-996c-4842-b3c5-d3318ed659ae",
      aspectType: "urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned",
      payload: {
        validityPeriod: {
          validFrom: "2013-04-01T00:18:40.000Z",
          validTo: "2025-07-06T08:58:34.000Z",
        },
        catenaXId: "urn:uuid:2c57b0e9-a653-411d-bdcd-64787e9fd3a7",
        partTypeInformation: {
          manufacturerPartId: "32494586-73",
          classification: "product",
          nameAtManufacturer: "Tier A Gearbox",
        },
      },
    },
    {
      identification: "urn:uuid:211fa9e1-b62e-406a-94a1-d3e74ed7c387",
      aspectType: "urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned",
      payload: {
        validityPeriod: {
          validFrom: "2015-03-15T17:25:20.000Z",
          validTo: "2027-12-12T17:07:52.000Z",
        },
        catenaXId: "urn:uuid:bee5614f-9e46-4c98-9209-61a6f2b2a7fc",
        partTypeInformation: {
          manufacturerPartId: "6740244-02",
          classification: "product",
          nameAtManufacturer: "Sub Tier A Sensor",
        },
      },
    },
    {
      identification: "urn:uuid:c241cc8c-ccd4-4d38-beb6-27f4336a3e01",
      aspectType: "urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned",
      payload: {
        validityPeriod: {
          validFrom: "2014-07-30T07:17:16.000Z",
          validTo: "2028-03-27T22:34:57.000Z",
        },
        catenaXId: "urn:uuid:3cdd2826-5df0-4c7b-b540-9eeccecb2301",
        partTypeInformation: {
          manufacturerPartId: "6775244-06",
          classification: "product",
          nameAtManufacturer: "Sub Tier B Glue",
        },
      },
    },
    {
      identification: "urn:uuid:115699d8-fee5-473a-9ed5-2e12156e1561",
      aspectType: "urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned",
      payload: {
        validityPeriod: {
          validFrom: "2014-03-22T06:27:39.000Z",
          validTo: "2027-02-12T02:27:05.000Z",
        },
        catenaXId: "urn:uuid:e5c96ab5-896a-482c-8761-efd74777ca97",
        partTypeInformation: {
          manufacturerPartId: "8840838-04",
          classification: "product",
          nameAtManufacturer: "HV Modul",
        },
      },
    },
    {
      identification: "urn:uuid:08780981-14db-440b-bf59-fe54157bcd65",
      aspectType: "urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned",
      payload: {
        validityPeriod: {
          validFrom: "2015-06-20T09:16:05.000Z",
          validTo: "2032-12-30T02:19:28.000Z",
        },
        catenaXId: "urn:uuid:c7a2b803-f8fe-4b79-b6fc-967ce847c9a9",
        partTypeInformation: {
          manufacturerPartId: "8840374-09",
          classification: "product",
          nameAtManufacturer: "ZB ZELLE",
        },
      },
    },
    {
      identification: "urn:uuid:4b7ccf39-ab68-44c4-9f70-05ad5dbf2975",
      aspectType: "urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned",
      payload: {
        validityPeriod: {
          validFrom: "2017-02-10T10:35:10.000Z",
          validTo: "2024-01-30T00:15:14.000Z",
        },
        catenaXId: "urn:uuid:15d2fcc8-6439-4d1e-904b-e62b4d3bf323",
        partTypeInformation: {
          manufacturerPartId: "9A047C7-01",
          classification: "product",
          nameAtManufacturer: "Sub Tier B Sealant",
        },
      },
    },
    {
      identification: "urn:uuid:abad5802-5071-4e21-97ae-e6f295731a1c",
      aspectType: "urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned",
      payload: {
        validityPeriod: {
          validFrom: "2019-12-30T09:17:00.000Z",
          validTo: "2025-06-28T12:55:41.000Z",
        },
        catenaXId: "urn:uuid:86f69643-3b90-4e34-90bf-789edcf40e7e",
        partTypeInformation: {
          manufacturerPartId: "7A047KK-01",
          classification: "product",
          nameAtManufacturer: "N Tier A NTier Product",
        },
      },
    },
    {
      identification: "urn:uuid:ff415c66-f5e0-4b15-bfbf-0b547c1a3651",
      aspectType: "urn:bamm:io.catenax.part_as_planned:1.0.0#PartAsPlanned",
      payload: {
        validityPeriod: {
          validFrom: "2013-04-11T05:30:04.000Z",
          validTo: "2025-04-23T19:59:03.000Z",
        },
        catenaXId: "urn:uuid:4f7b1cf2-a598-4027-bc78-63f6d8e55699",
        partTypeInformation: {
          manufacturerPartId: "7A047C7-01",
          classification: "product",
          nameAtManufacturer: "N Tier A CathodeMaterial",
        },
      },
    },
    {
      identification: "urn:uuid:d5ef7382-aff6-4169-a4a8-d927bf9abeda",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "yes",
      },
    },
    {
      identification: "urn:uuid:48627bb1-9f3e-48b7-86e9-bebaf5864c06",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "yes",
      },
    },
    {
      identification: "urn:uuid:8d764f97-e6b0-4ec4-8718-cd258c4a059a",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "no",
      },
    },
    {
      identification: "urn:uuid:699c15d3-b3fa-4e74-8419-d1b65f6c9f83",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "unknown",
      },
    },
    {
      identification: "urn:uuid:8d380a70-3ca0-4e9b-b1f6-e69069934c04",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "no",
      },
    },
    {
      identification: "urn:uuid:3500c4d9-9fc6-4bcb-95da-d4bcdf63226e",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "yes",
      },
    },
    {
      identification: "urn:uuid:b288d73f-4f93-4f24-bdd8-024de7c666ed",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "no",
      },
    },
    {
      identification: "urn:uuid:b2cb9a61-c9fd-4ad5-8fb4-29f288e46f9d",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "no",
      },
    },
    {
      identification: "urn:uuid:0c7a06f6-d826-4d10-b11b-aedd0933e554",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "unknown",
      },
    },
    {
      identification: "urn:uuid:bd611a34-04c2-4e90-8618-de9242b80faa",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "no",
      },
    },
    {
      identification: "urn:uuid:eeb2795a-6965-4d8c-b6db-198fb81d23b4",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "no",
      },
    },
    {
      identification: "urn:uuid:3c411d30-0b83-4cca-b951-4b97bdae579d",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "no",
      },
    },
    {
      identification: "urn:uuid:03b8aefd-fa53-453c-9059-d292867b5b8f",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "unknown",
      },
    },
    {
      identification: "urn:uuid:dd25d668-7ed3-4f8f-a995-2916e5307abb",
      aspectType: "urn:bamm:io.catenax.ess_incident:1.0.0#EssIncident",
      payload: {
        supplychain_impacted: "no",
      },
    },
  ],
  bpns: [],
} as Jobs;

export const jobsDemoDataError404: ErrorResponse = {
  messages: ["NotFoundException"],
  error: "Not found",
  statusCode: "404 NOT_FOUND",
};
