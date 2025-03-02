import { useQuery } from "@tanstack/react-query";
import { CatalogService } from "../services/catalog.service";
import { useUserStore } from "@/store/auth/userStore";
import customToast from "@/components/UI/CustomToast";
import { useDisclosure } from "@heroui/react";
import { useState } from "react";

const useGetListProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => CatalogService.listProducts(),
  });
};

export function useCatalog() {
  const { data: products, isLoading, isError } = useGetListProducts();
  const { isOpen: isOpenModal, onOpenChange } = useDisclosure();
  const [email, setEmail] = useState("");
  const [idProduct, setIdProduct] = useState<string>("");
  const { token } = useUserStore();

  const handleDownloadPDF = async (id: string) => {
    if (!token) {
      onOpenChange();
      setIdProduct(id);
      return;
    }

    try {
      await CatalogService.downloadPDF(id);

      customToast({
        title: "File downloaded.",
        type: "success",
      });
    } catch (error) {
      console.error("Error during download PDF:", error);
    }
  };

  const handleDownloadPDFWithoutLogin = async (id: string) => {
    try {
      if (email !== "") {
        await CatalogService.downloadPDF(id);
        customToast({
          title: "File downloaded.",
          type: "success",
        });
        onOpenChange();
        setEmail("");
      }
    } catch (error) {
      console.error("Error during download PDF:", error);
    }
  };

  const isLogin = !!token;

  return {
    products,
    isLoading,
    isError,
    handleDownloadPDF,
    isLogin,
    isOpenModal,
    onOpenChange,
    idProduct,
    handleDownloadPDFWithoutLogin,
    email,
    setEmail,
  };
}
