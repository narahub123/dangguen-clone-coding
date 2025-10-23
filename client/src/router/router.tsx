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
  // 홈 페이지
  {
    path: "/",
    element: <HomePage />,
  },
  // 게시물 상세 페이지
  {
    path: "/posts",
    children: [
      {
        path: ":id",
        element: <PostPage />,
      },
    ],
  },
  // 게시물 작성 페이지
  {
    path: "/write",
    children: [
      {
        index: true,
        element: <SellItemPage />,
      },
      // 가격 설정 페이지
      {
        path: "price",
        element: <SellItemPricePage />,
      },
      // 거래 장소 페이지
      {
        path: "location",
        element: <SellItemLocationPage />,
      },
      // 보여줄 장소 설정
      {
        path: "expose",
        element: <>보여줄 장소 설정 페이지</>,
      },
    ],
  },

  // 사용자 페이지
  {
    path: "/users/:id",
    children: [
      // 내 오이 페이지
      {
        index: true,
        element: <>나의 오이</>,
      },
      // 내 동네 설정 페이지
      {
        path: "turfs",
        element: <>내 동네 설정</>,
      },
      // 프로필 페이진
      {
        path: "profile",
        element: <>사용자 프로필 페이지</>,
      },
      // 판매 목록 페이지
      {
        path: "products",
        element: <>판매 목록</>,
      },
      // 자주 사용하는 문장 페이지
      {
        path: "common-phrase",
        element: <CommonPhrasePage />,
      },
    ],
  },
  // 채팅 페이지
  {
    path: "/chats",
    children: [
      {
        index: true,
        element: <>내 채팅 목록</>,
      },
      // 개별 채팅 페이지
      {
        path: "/chats/:chatid",
        element: <>개별 채팅</>,
      },
    ],
  },

  // 검색 페이지
  {
    path: "search",
    element: <>검색 페이지</>,
    children: [
      // 장소 검색 페이지 ?
      {
        path: "/search/:category",
        element: <>카테고리 검색</>,
      },
    ],
  },

  // 전체 서비스 페이지
  {
    path: "/services",
    element: <>전체 서비스 페이지</>,
  },

  // 알림 페이지
  {
    path: "/notifications",
    element: <>알림 페이지</>,
  },

  // 동네 지도 페이지
  {
    path: "/map",
    element: <>동네 지도 페이지</>,
  },

  // 신고 페이지
  {
    path: "/reports",
    element: <>신고페이지</>,
  },
]);
