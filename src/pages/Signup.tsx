import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import RadioGroup from "../components/RadioGroup";

export default function Signup() {
  const [activeRadioButton, SetActiveRadioButton] = useState<"yes" | "no">(
    "yes",
  );

  const [formInputs, setFormInputs] = useState({
    fullname: "Marry Doe",
    phone: "+91 9999999999",
    email: "marrydoe26@gmail.com",
    password: "password",
    company: "Educase India",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex h-full flex-col gap-7.25 px-5 py-10">
      <h1 className="mb-0.5 max-w-47 text-[28px] leading-9 font-medium text-[#1D2226]">
        Create your PopX account
      </h1>

      <Input
        type="text"
        name="fullname"
        placeholder="Enter Full Name"
        labelTitle="Full Name"
        mandatory
        value={formInputs.fullname}
        onChange={handleChange}
      />

      <Input
        type="tel"
        name="phone"
        placeholder="Enter Phone number"
        labelTitle="Phone number"
        mandatory
        value={formInputs.phone}
        onChange={handleChange}
      />

      <Input
        type="email"
        name="email"
        placeholder="Enter Email address"
        labelTitle="Email Address"
        mandatory
        value={formInputs.email}
        onChange={handleChange}
      />

      <Input
        type="password"
        name="password"
        placeholder="Enter password"
        labelTitle="Password"
        mandatory
        value={formInputs.password}
        onChange={handleChange}
      />

      <Input
        type="text"
        name="company"
        placeholder="Company name"
        labelTitle="Enter Company name"
        value={formInputs.company}
        onChange={handleChange}
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
