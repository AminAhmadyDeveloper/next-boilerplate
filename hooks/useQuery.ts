import { useQuery, useQueryClient } from "@tanstack/react-query";
import { TQuery } from "@interfaces/IQuery";

export const useAppQuery = <T>(
  queryKey: TQuery,
  axiosFunction: () => Promise<any>
) => useQuery<any, unknown, T, TQuery>(queryKey, axiosFunction);

export const useAppQueryClient = () => {
  const queryClient = useQueryClient();

  const invalidateQueries = (queryKey: TQuery) =>
    queryClient.invalidateQueries(queryKey);

  return { invalidateQueries };
};
