import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import RadioGroup from "../components/RadioGroup";

export default function Signup() {
  const [activeRadioButton, SetActiveRadioButton] = useState<"yes" | "no">(
    "yes",
  );

  return (
    <div className="flex h-full flex-col gap-7.25 px-5 py-10">
      <h1 className="mb-0.5 max-w-47 text-[28px] leading-9 font-medium text-[#1D2226]">
        Create your PopX account
      </h1>

      <Input
        type="text"
        placeholder="Enter Full Name"
        labelTitle="Full Name"
        mandatory={true}
        value="Marry Doe"
      />

      <Input
        type="tel"
        placeholder="Enter Phone number*"
        labelTitle="Phone number"
        mandatory={true}
        value="+91 9999999999"
      />

      <Input
        type="email"
        placeholder="Enter Email address"
        labelTitle="Email Address"
        mandatory={true}
        value="marrydoe26@gmail.com"
      />

      <Input
        type="password"
        placeholder="Enter password"
        labelTitle="Password"
        mandatory={true}
        value="password"
      />

      <Input
        type="text"
        placeholder="Company name"
        labelTitle="Enter Company name"
        value="Educase India"
      />

      <div>
        <p className="mb-2.5 text-[13px] text-[#1D2226]">
          Are you an Agency?<span className="px-0.5 text-[#DD4A3D]">*</span>
        </p>

        <RadioGroup
          SetActiveRadioButton={SetActiveRadioButton}
          activeRadioButton={activeRadioButton}
        />
      </div>

      <Button label="Create Account" path="settings" className="mt-auto" />
    </div>
  );
}
