import {
  UseQueryOptions,
  useQuery,
  QueryKey,
  QueryFunctionContext,
} from "react-query";
import axios from "axios";
import { env } from "../config/env";

/*
 *
 * axios
 *
 */
export const api = {
  get: <T>(url: string, params?: object) =>
    axios.get<T>(`${env.testServer}/${url}`, {
      headers: {
        token: env.testToken,
      },
      ...params,
    }),
};

/*
 *
 * React Query
 *
 */
type QueryKeyT = [string, object | undefined];

export const fetcher = async <T>({
  queryKey,
  pageParam,
}: QueryFunctionContext<QueryKeyT>): Promise<T> => {
  const [url, params] = queryKey;
  return api
    .get<T>(url, { params: { ...params, pageParam } })
    .then((res) => res.data);
};

export const useFetch = <T>(
  url: string,
  params?: object,
  config?: UseQueryOptions<T, Error, T, QueryKeyT>
) => {
  return useQuery<T, Error, T, QueryKeyT>(
    [url, params],
    ({ queryKey }) => fetcher({ queryKey, meta: undefined }),
    {
      onError: (e) => {
        //TODO: process error
      },
      enabled: true,
      refetchOnWindowFocus: false,
      ...config,
    }
  );
};
