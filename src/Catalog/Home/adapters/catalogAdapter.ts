import { paths } from "@/const/urls";
import catalogAPI from "@/lib/axios/client";

export const CatalogAdapter = {
  getListProducts: async () => {
    try {
      const api = await catalogAPI();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await api.get<any>(`${paths.URL_PRODUCTS}`);

      if (response.status === 200 && response.data !== undefined) {
        return response.data.data ?? [];
      }

      return [];
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  },
  downloadPDF: async (id: string) => {
    try {
      const api = await catalogAPI();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any

      const response = await api.get(
        `${paths.URL_GENERATE_PDF_PRODUCTS}/${id}`,
        {
          responseType: "blob",
          headers: {
            Accept: "application/pdf",
          },
        }
      );

      const url = window.URL.createObjectURL(new Blob([response.data as Blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `product_${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      if (response.status === 200) {
        return response;
      }

      return [];
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  },
};
