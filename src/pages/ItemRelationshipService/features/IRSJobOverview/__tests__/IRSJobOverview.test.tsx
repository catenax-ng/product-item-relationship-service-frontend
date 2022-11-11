import { JobStatusResultSuccess } from "../../../../../services/api/__test__/jobStatusResult.example";
import * as queryHooks from "../../../../../services/queries/jobs";
import { render } from "../../../../../testing/test-utils";
import { IRSJobOverview } from "../IRSJobOverview";

it("renders a loading state", () => {
  const mockData = {
    data: undefined,
    isError: false,
    isLoading: true,
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  jest.spyOn(queryHooks, "useFetchJobs").mockReturnValue(mockData);
  const { container } = render(<IRSJobOverview />);
  expect(container).toMatchSnapshot();
});

it("renders a error state", () => {
  const mockData = {
    data: undefined,
    isError: true,
    isLoading: false,
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  jest.spyOn(queryHooks, "useFetchJobs").mockReturnValue(mockData);
  const { container } = render(<IRSJobOverview />);
  expect(container).toMatchSnapshot();
});

it("renders a data state", () => {
  const mockData = {
    data: JobStatusResultSuccess,
    isError: false,
    isLoading: false,
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  jest.spyOn(queryHooks, "useFetchJobs").mockReturnValue(mockData);
  const { container } = render(<IRSJobOverview />);
  expect(container).toMatchSnapshot();
});
