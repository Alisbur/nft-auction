import { httpClient } from "./httpClient";

export type fetchFromApiParamType = {
  isLocalDate?: boolean;
};

export const fetchFromApi = async <T>(url: string) => {
  try {
    const response = await httpClient.get(url);
    return response.data as T;
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      // заглушка
      console.error(error);
    }
    throw error;
  }
};
