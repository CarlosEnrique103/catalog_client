import { CheckCircleIcon, FailedCircleIcon, InfoCircleIcon } from "@/icons";

type ToastType = "success" | "info" | "failed";

type Props = {
  type: ToastType;
  title: string;
  description?: string;
};

const types = {
  success: {
    icon: <CheckCircleIcon />,
    text: "text-system-green-dark",
  },
  info: {
    icon: <InfoCircleIcon />,
    text: "text-system-blue-dark",
  },
  failed: {
    icon: <FailedCircleIcon />,
    text: "text-system-red-dark",
  },
};

export default function ContentToast({ type, title, description }: Props) {
  return (
    <div className="flex gap-2">
      <div>{types[type].icon}</div>
      <div className="flex !flex-col gap-1">
        <h3 className={`text-left text-caption-bold ${types[type].text}`}>
          {title}
        </h3>
        {description !== undefined &&
          description !== "" &&
          description != null && (
            <p
              className={`text-left text-caption-regular ${types[type].text} self-start`}
            >
              {description}
            </p>
          )}
      </div>
    </div>
  );
}
