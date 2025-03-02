import { Modal, ModalContent } from "@heroui/react";

type sizeTypes = "s" | "sm" | "md" | "lg";

type Props = {
  isOpen: boolean;
  onOpenChange: () => void;
  children: React.ReactNode;
  size?: sizeTypes;
};

const sizes = {
  s: "w-[300px]",
  sm: "w-[350px]",
  md: "w-[400px]",
  lg: "w-[450px]",
};

export default function ConfirmModal({
  isOpen,
  onOpenChange,
  children,
  size = "s",
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className={sizes[size]}
      classNames={{ closeButton: "hidden" }}
    >
      <ModalContent className="flex flex-col gap-6 w-confirm-modal p-6 bg-white">
        {children}
      </ModalContent>
    </Modal>
  );
}
