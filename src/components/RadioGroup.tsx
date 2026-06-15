import type { Dispatch, SetStateAction } from "react";

type Props = {
  SetActiveRadioButton: Dispatch<SetStateAction<"yes" | "no">>;
  activeRadioButton: "yes" | "no";
};

export default function RadioGroup({
  SetActiveRadioButton,
  activeRadioButton,
}: Props) {
  return (
    <div className="flex gap-8">
      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="radio"
          name="agency"
          value="yes"
          className="hidden"
          defaultChecked
          onChange={() => SetActiveRadioButton("yes")}
        />
        <div className="text-btn-primary flex size-5.5 items-center justify-center rounded-full border">
          {activeRadioButton === "yes" && (
            <div className="bg-btn-primary p h-3 w-3 rounded-full"></div>
          )}
        </div>
        <span className="text-sm text-[#1D2226]">Yes</span>
      </label>

      <label className="flex cursor-pointer items-center gap-2">
        <input
          type="radio"
          name="agency"
          value="no"
          className="hidden"
          onChange={() => SetActiveRadioButton("no")}
        />
        <div className="text-btn-primary flex size-5.5 items-center justify-center rounded-full border">
          {activeRadioButton === "no" && (
            <div className="bg-btn-primary h-3 w-3 rounded-full"></div>
          )}
        </div>
        <span className="text-sm text-[#1D2226]">No</span>
      </label>
    </div>
  );
}
