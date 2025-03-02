import { AlertCriticalIcon } from "@/icons";

type Props = {
  title: string;
  subtitle: string;
};

export default function AlertCritical({ title, subtitle }: Props) {
  return (
    <div className="w-full flex items-start py-3.5 px-3 gap-2 rounded-md bg-system-red-light border-[0.5px] border-system-red-lightHover max-w-[350px] self-center">
      <AlertCriticalIcon />
      <div className="w-full flex flex-col flex-1 gap-1 text-system-red-dark">
        <span className="font-bold">{title}</span>
        <span className="text-caption-regular">{subtitle}</span>
      </div>
    </div>
  );
}
