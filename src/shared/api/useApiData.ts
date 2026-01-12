"use client";

import useSWR, { Fetcher, SWRConfiguration } from "swr";

import { fetchFromApi, fetchFromApiParamType } from "./fetchFromApi";

export const useApiData = <DataType>(
  url: string,
  options?: SWRConfiguration & fetchFromApiParamType,
) => {
  const fetcher: Fetcher<DataType, string> = async () => fetchFromApi<DataType>(url);

  return useSWR<DataType>(url, fetcher, {
    dedupingInterval: 15000,
    errorRetryCount: 2,
    errorRetryInterval: 2000,
    shouldRetryOnError: (err) => {
      const status = err?.status ?? err?.response?.status;
      return !status || status >= 500 || status === 429;
    },
    ...options,
  });
};
