import { paths } from "@/const/urls";
import catalogAPI from "@/lib/axios/client";

export const loginApi = async (formData: any) => {
  try {
    const api = await catalogAPI();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await api.post<any>(`${paths.URL_LOGIN}`, formData);

    if (response.status === 200 && response.data !== undefined) {
      return response.data ?? {};
    }
    return {};
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};
