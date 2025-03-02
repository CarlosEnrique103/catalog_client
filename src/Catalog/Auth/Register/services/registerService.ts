import { paths } from "@/const/urls";
import catalogAPI from "@/lib/axios/client";

export const registerApi = async (formData: any) => {
  try {
    const api = await catalogAPI();

    const response = await api.post<any>(`${paths.URL_REGISTER}`, formData);

    if (response.status === 200 && response.data !== undefined) {
      return response.data ?? {};
    }
    return {};
  } catch (error) {
    console.error("Error during register:", error);
    throw error;
  }
};
