import { Outlet } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { Toaster } from "react-hot-toast";

const MainLayouts = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster
        toastOptions={{
          duration: 2000,
          style: { background: "#363636", color: "#fff" },
        }}
      />
    </>
  );
};

export default MainLayouts;
