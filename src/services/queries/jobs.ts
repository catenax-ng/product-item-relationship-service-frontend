import { useMutation } from "@tanstack/react-query";
import { PageResult, RegisterJob } from "../../generated/jobsApi";
import { queryClient, useQuery } from "../../lib/react-query";
import { getCurrentEnvironment } from "../../utils/sessionStorageHandling";
import { JobAPI } from "../api/JobAPI";

export const useFetchJobById = ({ id }: { id: string }, refetchInterval: false | number = false) => {
  const serverEnv = getCurrentEnvironment();
  return useQuery(["jobs", serverEnv, id], () => JobAPI.fetchJobById(id), {
    refetchInterval,
  });
};

export const useFetchJobs = (page: number, refetchInterval: false | number = false) => {
  const serverEnv = getCurrentEnvironment();
  return useQuery(["jobs", serverEnv, page], () => JobAPI.fetchJobs(page), { refetchInterval });
};

export const useCancelJobs = (page: number) => {
  //Test case globalAssetId urn:uuid:513d7be8-e7e4-49f4-a22b-8cd31317e454

  const serverEnv = getCurrentEnvironment();

  return useMutation({
    mutationFn: JobAPI.cancelJob,
    onMutate: async (jobsId: string) => {
      queryClient.setQueryData<PageResult>(["jobs", serverEnv, page], (old) => {
        if (old === undefined) return undefined;
        return {
          ...old,
          content: (old.content ?? []).filter((job) => job.id !== jobsId),
        };
      });
    },
  });
};

export const useCreateJob = () => {
  return useMutation({
    mutationFn: (data: RegisterJob) => {
      return JobAPI.createJob(data);
    },
  });
};
