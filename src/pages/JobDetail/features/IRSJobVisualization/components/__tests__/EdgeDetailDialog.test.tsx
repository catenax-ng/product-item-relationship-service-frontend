import { JobsDemoDataSuccess } from "../../../../../../services/api/__test__/jobs.exampleData";
import { fireEvent, render, screen } from "../../../../../../testing/test-utils";
import { EdgeDetailDialog } from "../EdgeDetailDialog";

it("does not open the dialog", () => {
  const { container } = render(<EdgeDetailDialog edge={undefined} onClose={jest.fn} />);
  expect(container).toMatchSnapshot();
});

it("opens the edge detail dialog", () => {
  const edge = JobsDemoDataSuccess.relationships[0];
  const closeFn = jest.fn();
  render(<EdgeDetailDialog edge={edge} onClose={closeFn} />);
  const button = screen.getByRole("button", {
    name: /close/i,
  });
  fireEvent.click(button);
  expect(closeFn).toBeCalledTimes(1);
});
