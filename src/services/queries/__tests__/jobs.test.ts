import { renderHook, waitFor } from "../../../testing/test-utils";
import { useCancelJobs, useFetchJobById, useFetchJobs } from "../jobs";

it("tests the use fetchjob by id", async () => {
  const dummyId = "dummyId";
  const { result } = renderHook(() => useFetchJobById(dummyId));
  await waitFor(() => {
    expect(result.current.isSuccess).toBe(true);
  });
});

it("tests the use fetch jobs", async () => {
  const { result } = renderHook(() => useFetchJobs());
  await waitFor(() => {
    expect(result.current.isSuccess).toBe(true);
  });
});

it("tests the use cancel job", async () => {
  const dummyId = "dummyId";
  const { result } = renderHook(() => useCancelJobs());
  result.current.mutate(dummyId);
  await waitFor(() => {
    expect(result.current.isSuccess).toBe(true);
  });
});
