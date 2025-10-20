import { createBrowserRouter } from "react-router-dom";
import { SellItemPage } from "../pages";

export const router = createBrowserRouter([
  {
    path: "",
    element: <SellItemPage />,
  },
]);
