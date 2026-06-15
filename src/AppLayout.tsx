import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="font-rubik bg-primary p h-203 w-93.75 rounded border border-[#1D2226]/20">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
