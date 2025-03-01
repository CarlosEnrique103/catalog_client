import { Modal, ModalContent, Spinner } from "@heroui/react";

type Props = {
  isLoading: boolean;
};

export function Loader({ isLoading }: Props) {
  return (
    <Modal
      isDismissable={false}
      isKeyboardDismissDisabled={true}
      placement="center"
      backdrop="opaque"
      isOpen={isLoading}
      classNames={{
        body: "py-6 shadow-none text-white",
        backdrop: "bg-[#2A2F2D]/50 backdrop-opacity-40",
        base: "bg-transparent shadow-none text-white text-center font-semibold text-[12px]",
        header: "bg-transparent",
        footer: "bg-transparent",
        closeButton: "hidden",
      }}
    >
      <ModalContent>
        <div className="flex flex-col gap-4">
          <Spinner
            size="lg"
            classNames={{
              circle1:
                "absolute w-12 h-12 rounded-full animate-spinner-ease-spin border-solid border-t-transparent border-l-transparent border-r-transparent border-4 dark:border-b-white border-b-white",
              circle2:
                "absolute w-12 h-12 rounded-full opacity-75 animate-spinner-linear-spin border-dotted border-t-transparent border-l-transparent border-r-transparent border-4 dark:border-b-white border-b-white",
            }}
          />
          <span className="text-small-medium text-text-neutrals-white">
            Loading...
          </span>
        </div>
      </ModalContent>
    </Modal>
  );
}
