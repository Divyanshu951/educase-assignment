import { useNavigate } from "react-router-dom";
import { cn } from "../lib/utils";

type Props = { label: string; path: string; className?: string };

export default function Button({ label, path, className }: Props) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/${path}`)}
      className={cn(
        "bg-btn-primary h-11.5 w-full cursor-pointer rounded-md border-none text-center text-base font-medium text-[#FFFFFF] transition-colors duration-200 hover:opacity-95",
        className,
      )}
    >
      {label}
    </button>
  );
}
