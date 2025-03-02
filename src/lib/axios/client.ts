import axios, { type AxiosRequestConfig } from "axios";
const catalogAPI = async () => {
  const token = localStorage.getItem("user_token");

  const catalogInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    timeout: 5000,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return {
    get: async <T>(url: string, config?: AxiosRequestConfig) =>
      await catalogInstance.get<T>(url, config),

    post: async <T>(url: string, body: unknown, config?: AxiosRequestConfig) =>
      await catalogInstance.post<T>(url, body, config),

    put: async <T>(url: string, body: unknown, config?: AxiosRequestConfig) =>
      await catalogInstance.put<T>(url, body, config),

    patch: async <T>(url: string, body: unknown, config?: AxiosRequestConfig) =>
      await catalogInstance.patch<T>(url, body, config),

    delete: async <T>(
      url: string,
      body?: unknown,
      config?: AxiosRequestConfig
    ) => await catalogInstance.delete<T>(url, { ...config, data: body }),
  };
};

export default catalogAPI;
