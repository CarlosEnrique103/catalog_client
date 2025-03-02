import ContentToast from "./ContentToast";
import { toast } from "sonner";

type ToastType = "success" | "info" | "failed";

type Props = {
  type: ToastType;
  title: string;
  description?: string;
};

const types = {
  success: {
    bg: "bg-system-green-light",
  },
  info: {
    bg: "bg-system-orange-alert",
  },
  failed: {
    bg: "bg-system-red-light",
  },
};

export default function customToast({ type, title, description }: Props) {
  return toast(
    <ContentToast type={type} title={title} description={description} />,
    {
      className: `p-3 rounded-md ${types[type].bg}`,
    }
  );
}
