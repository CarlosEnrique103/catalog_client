"use client";
import NavbarCatalog from "@/components/UI/Navbar";
import { useCatalog } from "./hooks/useCatalog";
import { Input, Spinner } from "@heroui/react";
import ProductItem from "./components/ProductItem";
import { useUserStore } from "@/store/auth/userStore";
import { PrimaryButton } from "@/components/UI/PrimaryButton";
import ConfirmModal from "@/components/UI/ConfirmModal";

function HomeContainer() {
  const {
    isError,
    isLoading,
    isOpenModal,
    products,
    isLogin,
    handleDownloadPDF,
    onOpenChange,
    idProduct,
    handleDownloadPDFWithoutLogin,
    email,
    setEmail,
  } = useCatalog();

  if (isLoading) {
    return (
      <main className="w-full h-svh flex flex-col items-center justify-center gap-3">
        <Spinner size="lg" />
      </main>
    );
  }

  if (isError) {
    return (
      <main className="w-full h-svh flex flex-col items-center justify-center gap-3">
        <h1 className="text-white text-xl">There are one error</h1>
      </main>
    );
  }

  return (
    <main className="w-full h-screen px-">
      <NavbarCatalog />
      {products.length === 0 && (
        <h1 className="text-white text-xl">There aren't products.</h1>
      )}
      <ul className="w-full h-screen p-4 pt-10 px-40 grid grid-cols-[repeat(auto-fit,_minmax(400px,1fr))] gap-3">
        {products.map((product: ProductItem) => (
          <ProductItem
            key={product._id}
            product={product}
            isLogin={isLogin}
            downloadPDF={handleDownloadPDF}
          />
        ))}
      </ul>

      <ConfirmModal isOpen={isOpenModal} onOpenChange={onOpenChange} size="lg">
        <div className="w-full h-full flex flex-col gap-6 ">
          <h2 className="text-h5-medium text-grey-300 self-center">
            Insert your email to download PDF
          </h2>
          <Input
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="flex items-center justify-between gap-[42px]">
            <PrimaryButton onPress={onOpenChange} variant="bordered">
              Cancel
            </PrimaryButton>

            <PrimaryButton
              onPress={() => handleDownloadPDFWithoutLogin(idProduct)}
            >
              Download PDF
            </PrimaryButton>
          </div>
        </div>
      </ConfirmModal>
    </main>
  );
}

export default HomeContainer;
