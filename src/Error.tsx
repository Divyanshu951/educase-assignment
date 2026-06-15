import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="bg-primary flex h-screen w-screen items-center justify-center p-10">
      <div className="max-w-5xl text-center">
        <h1 className="text-4xl font-bold">Oops!</h1>
        <p className="mt-4 text-lg text-gray-400">
          You've reached an unexpected page. The page you're looking for doesn't
          exist or may have been moved.
        </p>

        <button
          onClick={() => navigate("/")}
          className="bg-btn-primary duration- mt-7 cursor-pointer rounded-full px-7 py-2 text-white transition-colors hover:opacity-85"
        >
          Home
        </button>
      </div>
    </div>
  );
}
