import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import {
  DashboardPage,
  NotFoundPage,
  ProductPage,
  SalePage,
  VoucherPage,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/sale",
        element: <SalePage />,
      },
      {
        path: "/voucher",
        element: <VoucherPage />,
      },
    ],
  },
]);

export default router;
