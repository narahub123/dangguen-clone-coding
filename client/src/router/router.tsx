import { createBrowserRouter } from "react-router-dom";
import {
  CommonPhrasePage,
  HomePage,
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
    path: "/home",
    element: <HomePage />,
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
  {
    path: "/users/:id",
    element: <></>,
    children: [{}],
  },
  {
    path: "/chats/:id",
    element: <></>,
  },
  {
    path: "/search/:location",
    element: <></>,
  },
]);
