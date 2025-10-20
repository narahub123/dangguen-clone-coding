import { createBrowserRouter } from "react-router-dom";
import {
  SellItemLocationPage,
  SellItemPage,
  SellItemPricePage,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SellItemPage />,
  },
  {
    path: "/price",
    element: <SellItemPricePage />,
  },
  {
    path: "/location",
    element: <SellItemLocationPage />,
  },
]);
