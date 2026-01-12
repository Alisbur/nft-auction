import { controllers } from "./controllers";

export const API_ENDPOINTS = {
  auctions: {
    list: () => `${controllers.auctions}/list`,
  },
} as const;
