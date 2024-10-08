import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen px-5">
      <Header />
      <Outlet />
      <Toaster position="top-right" />
    </main>
  );
};

export default Layout;
