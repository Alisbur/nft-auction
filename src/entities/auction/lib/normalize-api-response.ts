import { TApiResponse, TAuction } from "../types";
import { generateAuction } from "./generate-auction";

export const normalizeApiResponse = (res: TApiResponse): TAuction[] => {
  if (!Array.isArray(res) || !res.length) return [];

  return res.map((item) => generateAuction({ id: item.id, name: item.name }));
};
