import type React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";

export default function Login() {
  const [formInputs, setFormInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex flex-col gap-3.75 px-5 py-10">
      <h1 className="text max-w-47 text-[28px] leading-9 font-medium text-[#1D2226]">
        Signin to your PopX account
      </h1>
      <p className="mb-2.5 max-w-58 pb-7.25 text-lg leading-6.5 font-normal text-[#1D2226]/60">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <Input
        type="email"
        name="email"
        placeholder="Enter Email address"
        labelTitle="Email Address"
        onChange={handleChange}
        value={formInputs.email}
      />

      <Input
        type="password"
        name="password"
        placeholder="Enter password"
        labelTitle="Password"
        onChange={handleChange}
        value={formInputs.password}
      />

      <Button label="Login" path="/settings" className="bg-[#cbcbcb]" />
    </div>
  );
}
