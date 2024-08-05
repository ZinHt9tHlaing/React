import { createBrowserRouter } from "react-router-dom";
import {
  AboutUs,
  ErrorPage,
  HomePage,
  MyCartPage,
  ProductDetail,
} from "../pages";
import MainLayouts from "../components/MainLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />, // parent route
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "my-cart",
        element: <MyCartPage />,
      },
      {
        path: "product-detail/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

export default router;
