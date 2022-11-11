import { fireEvent, render, renderWithRouter, screen } from "../../../../../../testing/test-utils";
import { NodeDetailDialog } from "../NodeDetailDialog";

const shellId = "urn:uuid:a45a2246-f6e1-42da-b47d-5c3b58ed62e9";
const shellList = [
  {
    description: [{ language: "en", text: "The shell for a vehicle" }],
    globalAssetId: { value: ["urn:uuid:a45a2246-f6e1-42da-b47d-5c3b58ed62e9"] },
    idShort: "future concept x",
    identification: "882fc530-b69b-4707-95f6-5dbc5e9baaa8",
    specificAssetIds: [{ key: "engineserialid", value: "12309481209312" }],
    submodelDescriptors: [
      {
        description: [{ language: "en", text: "Provides base vehicle information" }],
        endpoints: [
          {
            interface: "HTTP",
            protocolInformation: {
              endpointAddress: "https://catena-x.net/vehicle/basedetails/",
              endpointProtocol: "HTTPS",
              endpointProtocolVersion: "1.0",
            },
          },
        ],
        idShort: "vehicle base details",
        identification: "4a738a24-b7d8-4989-9cd6-387772f40565",
        semanticId: { value: ["urn:bamm:com.catenax.vehicle:0.1.1"] },
      },
      {
        description: [{ language: "en", text: "Provides base vehicle information" }],
        endpoints: [
          {
            interface: "HTTP",
            protocolInformation: {
              endpointAddress: "https://catena-x.net/vehicle/partdetails/",
              endpointProtocol: "HTTPS",
              endpointProtocolVersion: "1.0",
            },
          },
        ],
        idShort: "vehicle part details",
        identification: "dae4d249-6d66-4818-b576-bf52f3b9ae90",
        semanticId: { value: ["urn:bamm:com.catenax.vehicle:0.1.1#PartDetails"] },
      },
    ],
  },
];

it("does not render th node dialog", () => {
  const onClose = jest.fn();
  const { container } = render(<NodeDetailDialog showId={""} shellList={shellList} onClose={onClose} />);
  expect(container).toMatchSnapshot();
});

it("opens the node detail dialog", () => {
  const closeFn = jest.fn();
  renderWithRouter(<NodeDetailDialog showId={shellId} shellList={shellList} onClose={closeFn} />);
  const button = screen.getByRole("button", {
    name: /close/i,
  });
  fireEvent.click(button);
  expect(closeFn).toBeCalledTimes(1);
});
