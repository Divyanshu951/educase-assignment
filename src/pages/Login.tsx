import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
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
        placeholder="Enter Email address"
        labelTitle="Email Address"
      />

      <Input
        type="password"
        placeholder="Enter password"
        labelTitle="Password"
      />

      <Button label="Login" path="/settings" className="bg-[#cbcbcb]" />
    </div>
  );
}
