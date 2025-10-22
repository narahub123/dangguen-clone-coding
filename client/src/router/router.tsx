import { createBrowserRouter } from "react-router-dom";
import {
  CommonPhrasePage,
  PostPage,
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
  {
    path: "/common-phrase",
    element: <CommonPhrasePage />,
  },
  {
    path: "post",
    children: [
      {
        path: ":id",
        element: <PostPage />,
      },
    ],
  },
]);
