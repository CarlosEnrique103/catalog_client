import { Button, ButtonProps } from "@heroui/react";
import clsx from "clsx";

type Props = Omit<ButtonProps, "children"> & { children: React.ReactNode };

export function PrimaryButton({
  children,
  isDisabled,
  variant = "solid",
  ...props
}: Props) {
  return (
    <Button
      color="primary"
      className={clsx(
        "w-full h-14 flex !p-4 !text-body-medium ",
        {
          "!text-neutrals-white": variant === "solid",
        },
        {
          "!text-primary-purple-90": variant === "bordered",
        },
        {
          "bg-primary-purple-90 dark:bg-dark-primary-purple-90 shadow-primary-button":
            variant === "solid",
        },
        {
          "bg-neutrals-white !border !border-primary-purple-90  dark:!border-dark-primary-purple-90":
            variant === "bordered",
        },
        {
          "border-none": variant === "bordered" && isDisabled,
        },
        {
          "!bg-grey-70 ": variant === "solid" && isDisabled,
        },
        {
          "!bg-grey-70 dark:!bg-dark-grey-70 !text-grey-90 !cursor-not-allowed !shadow-none":
            isDisabled,
        }
      )}
      isDisabled={isDisabled}
      radius="full"
      {...props}
    >
      {children}
    </Button>
  );
}
