import { CatalogAdapter } from "../adapters/catalogAdapter";

export const CatalogService = {
  listProducts: async () => await CatalogAdapter.getListProducts(),
  downloadPDF: async (id: string) => await CatalogAdapter.downloadPDF(id),
};
