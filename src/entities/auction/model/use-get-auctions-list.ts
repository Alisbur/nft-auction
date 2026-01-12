import { API_ENDPOINTS, useApiData } from "@/shared/api";

import { TApiResponse } from "../types";

export const useGetAuctionList = () => {
  return useApiData<TApiResponse>(API_ENDPOINTS.auctions.list());
};
