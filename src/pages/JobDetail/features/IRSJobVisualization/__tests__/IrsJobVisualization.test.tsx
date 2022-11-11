import { JobsDemoDataSuccess } from "../../../../../services/api/__test__/jobs.exampleData";
import { renderWithRouter } from "../../../../../testing/test-utils";
import { IrsJobVisualization } from "../IrsJobVisualization";

it("renders a basic visualization", () => {
  const { container } = renderWithRouter(<IrsJobVisualization job={JobsDemoDataSuccess} />);
  expect(container).toMatchSnapshot();
});
