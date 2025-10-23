import { example1, example2, example3 } from "../asset";
import type {
  HomeProductType,
  HomeTagType,
  ItemTagType,
  ProductType,
  SellingTagType,
  UserType,
} from "../types";

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

export const userExample: UserType = {
  userId: "xxx",
  username: "그냥",
  turfs: [
    { value: "ys1", name: "역삼1동", checked: true },
    { value: "gw", name: "개운동", checked: false },
  ],
  likes: [],
};

export const homeTags: HomeTagType[] = [
  {
    value: "used",
    name: "중고거래",
  },
  {
    value: "near",
    name: "가까운동네",
  },
  {
    value: "estate",
    name: "부동산",
  },
];

export const HomeProducts: HomeProductType[] = [
  {
    postId: "1",
    image: example1,
    title: "아이패드 ",
    location: "역삼1동",
    postDate: new Date().toISOString(),
    price: 430000,
    meta: {
      chats: 0,
      likes: 1,
    },
  },
  {
    postId: "2",
    image: example2,
    title: "맥북 에어 M1 램8, ssd 128g",
    location: "도곡동",
    postDate: new Date().toISOString(),
    price: 430000,
    meta: {
      chats: 2,
      likes: 12,
    },
  },
  {
    postId: "3",
    image: example3,
    title: "맥북 에어 M1 램8, ssd 128g",
    location: "양재동",
    postDate: new Date().toISOString(),
    price: 30000,
    meta: {
      chats: 10,
      likes: 700,
    },
  },
];

// 신고글 종류
export const landingReports = [
  {
    path: "bans",
    text: "거래 금지 물품이에요",
  },
  {
    path: "seller",
    text: "전문판매업자 같아요",
  },
  {
    path: "fraud",
    text: "사기인 것 같아요",
  },

  {
    path: "proxy",
    text: "대리 결제(대출)/구매/판매 행위를 해요",
    desc: "후불결제를 활용한 현금화 행위/상품권 예약 판매/대출 행위 등이 포함",
  },
  {
    path: "other-services",
    text: "당근의 다른 서비스에 등록되어야 하는 게시글이에요",
    desc: "동네생활, 부동산, 알바 등 다른 서비스에 등록되어야 하는 게시글",
  },
  {
    path: "inappropriate",
    text: "부적절한 행위가 있어요",
  },
  {
    path: "user",
    text: "작성자 신고하기",
  },
];

// 거래 금지 물품
export const banReports = [
  { path: "living-animals", text: "생명이 있는 동물", desc: "식물 제외" },
  {
    path: "medical-products",
    text: "의약품 / 의료기기",
    desc: "체온계, 혈압계 제외 / 동물용 의약품, 한약, 다이어트약 포함",
  },
  {
    path: "trademark-infringement",
    text: "상표권 침해 물품",
    desc: "가품, 이미테이션, 위조품 등 포함",
  },
  {
    path: "copyright-infringement",
    text: "저작권 침해 물품",
    desc: "불법 음원, 불법 복제 소프트웨어·콘텐츠 포함",
  },
  {
    path: "youth-restricted-drugs",
    text: "청소년 유해약물",
    desc: "주류, 담배, 마약류, 칼라풍선류, 환각물질 포함",
  },
  {
    path: "youth-restricted-items",
    text: "청소년 유해물",
    desc: "음란물, 성인물, 성생활용품, 게임 아이템 포함",
  },
  {
    path: "health-supplement-guideline",
    text: "건강기능식품 개인간 거래 가이드라인 위반",
    desc: "소비기한 경과, 포장 개봉·훼손, 냉장 보관 필요 제품 등",
  },
  {
    path: "custom-made-products",
    text: "주문 제작 상품",
    desc: "예시: 주문 제작, 그림을 그려주는 행위 등",
  },
  {
    path: "personal-information",
    text: "개인정보",
    desc: "신분증, 통장, 계정 포함",
  },
  {
    path: "prohibited-food",
    text: "거래 금지 식품",
    desc: "식중독·소분·포장 개봉·훼손, 소비기한 경과 등",
  },
  { path: "agricultural-products", text: "농수산물 판매", desc: "" },
  {
    path: "prohibited-cosmetics",
    text: "거래 금지 화장품",
    desc: "직접 제조·소분, 용기 불량, 사용기한 경과, 화장품 샘플 포함",
  },
  {
    path: "dangerous-goods",
    text: "위험한 물건",
    desc: "총포·도검·화약류, 모의총포 및 부속품, 레이저포인터 포함",
  },
  {
    path: "hazardous-materials",
    text: "위험한 물질",
    desc: "농약, 유독물, 휘발유, 경유, LPG 포함",
  },
  {
    path: "military-police-uniforms",
    text: "군·경찰용품 / 제복류",
    desc: "유사경찰장비, 소방복 및 유사 제복류, 군마물품 포함",
  },
  {
    path: "government-supported-goods",
    text: "정부 지원 물품",
    desc: "나라미, 지역사랑상품권, 온누리상품권, 각종 정부지원 바우처 포함",
  },
  {
    path: "glasses-contact-lenses",
    text: "안경 / 콘택트렌즈",
    desc: "썬글라스, 컬러렌즈, 도수 선글라스, 도수 수정 포함",
  },
  {
    path: "prohibited-tickets",
    text: "거래 금지 티켓",
    desc: "오프라인 암표, 철도 승차권, 매크로 구매 티켓 재판매 행위",
  },
  {
    path: "fake-free-giveaway",
    text: "허위 무료 나눔",
    desc: "무료 나눔인 척하면서 물건을 팔거나, 가입·추천인 입력 등 행위 포함",
  },
  {
    path: "hazardous-products",
    text: "위해 우려 물품",
    desc: "KC인증 누락, 해외직구 후 1년 이내 제품, 리콜로 인한 화수·폐기 제품 포함",
  },
  {
    path: "others",
    text: "기타",
    desc: "현찰, 종량제봉투, 1,000만원 이상 상품, 100만원 이상 순금, 도난 물품 등",
  },
];

// 다른 서비스
export const otherReports = [
  {
    path: "business-promotion",
    text: "[비즈니스] 서비스 제공/홍보",
    desc: "서비스를 제공하거나 홍보하는 행위",
  },
  { path: "job-recruitment", text: "[알바] 구인구직", desc: "" },
  { path: "real-estate", text: "[부동산] 거래", desc: "" },
  { path: "used-car", text: "[중고차] 거래", desc: "" },
  {
    path: "community-daily",
    text: "[동네생활] 일상/질문/모임",
    desc: "소소한 일상/질문과 같은 중고거래와 관계없는 게시글",
  },
];

// 부적절한 행위
export const inappropriateReports = [
  { path: "unusable-product", text: "사용할 수 없는 상품", desc: "" },
  { path: "duplicate-post", text: "중복 게시글", desc: "" },
  {
    path: "resell-at-higher-price",
    text: "나에게 구매 후 비싸게 재판매",
    desc: "",
  },
  { path: "insult-or-defamation", text: "비방 / 저격", desc: "" },
  {
    path: "free-giveaway-or-money-request",
    text: "무료나눔 및 금전 요구 글",
    desc: "",
  },
  { path: "suggest-report-item", text: "신고 항목 제안", desc: "" },
];

// 사기
export const fraudReports = [
  {
    path: "fraud-seller-no-delivery",
    text: "[사기] 입금받은 판매자 잠적",
    desc: "물건 하자는 분쟁 조정 신청하기를 해주세요.",
  },
  {
    path: "fraud-buyer-no-payment",
    text: "[사기] 물품을 전달받은 구매자 잠적",
    desc: "",
  },
  { path: "fraud-external-channel", text: "[사기] 외부 채널 유도", desc: "" },
];

// 작성자 신고
export const userReports = [
  { path: "rude-user", text: "비매너 사용자예요", desc: "" },
  {
    path: "dispute-during-transaction",
    text: "거래 중 분쟁이 발생했어요",
    desc: "",
  },
  { path: "suspected-fraud", text: "사기인 것 같아요", desc: "" },
  {
    path: "abuse-or-hate-speech",
    text: "욕설 ・ 비방 ・ 혐오표현을 해요",
    desc: "",
  },
  {
    path: "unwanted-romantic-chat",
    text: "연애 목적의 원하지 않는 대화를 시도해요",
    desc: "",
  },
  {
    path: "inappropriate-sexual-behavior",
    text: "부적절한 성적 행위를 해요",
    desc: "",
  },
  {
    path: "other-inappropriate-behavior",
    text: "기타 부적절한 행위가 있어요",
    desc: "",
  },
  {
    path: "proxy-payment-or-trade",
    text: "대리 결제/구매/판매 행위를 해요",
    desc: "",
  },
];

// 전문 판매업자
export const sellerText = {
  title: "전문판매업자 같아요",
  desc: `
- 동일/유사한 제품을 단기간에 많이 판매하는 경우  
- 동일 제품을 다양한 사이즈나 색상으로 판매하는 경우  
- 판매사이트, 카톡 채널, 네이버 밴드 등 영리를 위한 홍보하는 경우  
- 기타 영리적 목적이 확인되는 경우  

전문판매업자 사유로 신고할 수 있습니다.  

당근 팀에게 신고해주시면 신고해주신 내용을 바탕으로 전문판매업자 처리가 진행됩니다.  

자세한 내용은 '전문 판매업자 기준이 뭔가요?' 내용을 확인해주세요.`,
};

export const proxyText = {
  title: "대리 결제(대출)/구매/판매 행위를 해요",
  desc: `
대리 결제(대출)/구매/판매하는 행위를 하는 경우, 해당 신고 항목으로 신고할 수 있어요.

작성한 대리 결제(대출)/구매/판매 글로 인해 사기 피해가 발생한 경우,

대리로 게시글을 올린 계정도 사기 가해자로 간주하여
운영정책에 의해 최대 영구 이용이 제한될 수 있습니다.`,
};
