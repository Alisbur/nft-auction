import axios from "axios";

const httpClient = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  transformResponse: (data) => JSON.parse(data),
});

httpClient.interceptors.request.use(
  (config) => {
    config.baseURL = process.env.NEXT_PUBLIC_API_URL;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { httpClient };
