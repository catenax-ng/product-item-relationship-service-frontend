import { JobListResponseSuccess } from "../../../../../services/api/__test__/jobStatusResult.example";
import * as queryHooks from "../../../../../services/queries/jobs";
import { render } from "../../../../../testing/test-utils";
import { IRSJobOverview } from "../IRSJobOverview";
import { expect, it, vi } from "vitest";

it("renders a loading state", () => {
  const mockData = {
    data: undefined,
    isError: false,
    isLoading: true,
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  vi.spyOn(queryHooks, "useFetchJobs").mockReturnValue(mockData);
  const { container } = render(<IRSJobOverview />);
  expect(container).toMatchSnapshot();
});

it("renders a error state", () => {
  const mockData = {
    data: undefined,
    isError: true,
    isLoading: false,
    error: new Error("test Error"),
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  vi.spyOn(queryHooks, "useFetchJobs").mockReturnValue(mockData);
  const { container } = render(<IRSJobOverview />);
  expect(container).toMatchSnapshot();
});

it("renders a data state", () => {
  const mockData = {
    data: JobListResponseSuccess,
    isError: false,
    isLoading: false,
  };
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  vi.spyOn(queryHooks, "useFetchJobs").mockReturnValue(mockData);
  const { container } = render(<IRSJobOverview />);
  expect(container).toMatchSnapshot();
});
