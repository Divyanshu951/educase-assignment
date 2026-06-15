import { cn } from "../lib/utils";

type Props = {
  type: string;
  placeholder: string;
  labelTitle: string;
  className?: string;
  mandatory?: boolean;
  value?: string;
};

export default function Input({
  type,
  placeholder,
  labelTitle,
  className,
  mandatory = false,
  value,
}: Props) {
  return (
    <div className="relative">
      <label className="text-btn-primary absolute -top-2.5 left-3 bg-[#F7F8F9] px-2 text-[13px] font-medium tracking-normal">
        {labelTitle}
        {mandatory && <span className="px-0.5 text-[#DD4A3D]">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "h-10 w-full rounded-md border border-[#CBCBCB] px-4 text-sm tracking-normal text-[#1D2226] outline-none placeholder:text-[#919191] focus:border-violet-500",
          className,
        )}
        value={value}
      />
    </div>
  );
}
