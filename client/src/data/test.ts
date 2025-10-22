import { example1, example2, example3 } from "../asset";
import type { ItemTagType, ProductType, SellingTagType } from "../types";

export const itemTags: ItemTagType[] = [
  {
    value: "mens_clothes",
    name: "남자옷",
  },
  {
    value: "sports",
    name: "스포츠/레저",
  },
  {
    value: "hobby",
    name: "취미/게임/음반",
  },
];

export const ITEM_TAGS: ItemTagType[] = [
  { value: "디지털기기", name: "디지털기기" },
  { value: "생활가전", name: "생활가전" },
  { value: "가구-인테리어", name: "가구/인테리어" },
  { value: "생활-주방", name: "생활/주방" },
  { value: "유아동", name: "유아동" },
  { value: "유아도서", name: "유아도서" },
  { value: "여성의류", name: "여성의류" },
  { value: "여성잡화", name: "여성잡화" },
  { value: "남성패션-잡화", name: "남성패션/잡화" },
  { value: "뷰티-미용", name: "뷰티/미용" },
  { value: "스포츠-레저", name: "스포츠/레저" },
  { value: "취미-게임-음반", name: "취미/게임/음반" },
  { value: "도서", name: "도서" },
  { value: "티켓-교환권", name: "티켓/교환권" },
  { value: "가공식품", name: "가공식품" },
  { value: "건강기능식품", name: "건강기능식품" },
  { value: "반려동물용품", name: "반려동물용품" },
  { value: "식물", name: "식물" },
  { value: "기타중고물품", name: "기타 중고물품" },
  { value: "삽니다", name: "삽니다" },
];

export const SELLING_TAGS: SellingTagType[] = [
  {
    type: "sell",
    name: "판매하기",
  },
  {
    type: "share",
    name: "나눔하기",
  },
];

export const exampleProducts: ProductType[] = [
  {
    postId: "1",
    title: "아베크롬비 퍼스트 인스팅트 향기",
    price: 45000,
    image: example1,
  },
  {
    postId: "2",
    title: "맥북 에어 M1, 렘8, ssd 256g",
    price: 345000,
    image: example2,
  },
  {
    postId: "3",
    title: "xxxxxx xxxx xxx xxxxxxxx sss",
    price: 50000,
    image: example3,
  },
];
