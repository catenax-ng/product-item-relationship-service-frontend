import { JobsDemoDataSuccess } from "../../../services/api/__test__/jobs.exampleData";
import * as queryHooks from "../../../services/queries/jobs";
import { renderWithRouter } from "../../../testing/test-utils";
import { JobDetail } from "../JobDetail";

it("renders a loading state", () => {
  const mockData = {
    data: undefined,
    isError: false,
    isLoading: true,
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  jest.spyOn(queryHooks, "useFetchJobById").mockReturnValue(mockData);

  const { container } = renderWithRouter(<JobDetail />);
  expect(container).toMatchSnapshot();
});

it("renders a error state", () => {
  const mockData = {
    data: undefined,
    isError: true,
    isLoading: false,
    error: new Error("test error"),
  };
  //TODO: expand with dummy error data
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  jest.spyOn(queryHooks, "useFetchJobById").mockReturnValue(mockData);

  const { container } = renderWithRouter(<JobDetail />);
  expect(container).toMatchSnapshot();
});

it("renders a data success state", () => {
  const mockData = {
    data: JobsDemoDataSuccess,
    isError: false,
    isLoading: false,
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  jest.spyOn(queryHooks, "useFetchJobById").mockReturnValue(mockData);

  const { container } = renderWithRouter(<JobDetail />);
  expect(container).toMatchSnapshot();
});
