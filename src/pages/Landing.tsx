import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  return (
    <div className="flex h-full flex-col justify-end p-5">
      <div className="flex flex-col gap-2.5">
        <h1 className="text-[28px] font-medium">Welcome to PopX</h1>
        <p className="max-w-58 pb-7.25 text-lg leading-6.5 font-normal text-[#1D2226]/60">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <button
          onClick={() => navigate("/signup")}
          className="bg-btn-primary h-11.5 w-full cursor-pointer rounded-md border-none text-center text-base font-medium text-[#FFFFFF] transition-colors duration-200 hover:opacity-95"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate("/login")}
          className="bg-btn-secondary h-11.5 w-full cursor-pointer rounded-md border-none text-center text-base font-medium text-[#1D2226] transition-colors duration-200 hover:opacity-95"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
