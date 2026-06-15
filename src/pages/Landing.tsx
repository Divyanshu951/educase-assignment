import Button from "../components/Button";

export default function Landing() {
  return (
    <div className="flex h-full flex-col justify-end px-5 py-10">
      <div className="flex flex-col gap-2.5">
        <h1 className="text-[28px] font-medium text-[#1D2226]">
          Welcome to PopX
        </h1>
        <p className="max-w-58 pb-7.25 text-lg leading-6.5 font-normal text-[#1D2226]/60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <Button
          label="Create Account"
          path="signup"
          className="bg-btn-primary text-[#FFFFFF]"
        />
        <Button
          label="Already Registered? Login"
          path="login"
          className="bg-btn-secondary text-[#1D2226]"
        />
      </div>
    </div>
  );
}
