import { render } from "../../../../testing/test-utils";
import { IRSJobAddForm } from "../IRSJobAddForm";

it("renders the form", () => {
  const { container } = render(<IRSJobAddForm />);
  expect(container).toMatchSnapshot();
});
