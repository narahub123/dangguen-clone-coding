import type { ReviewType } from "../types";

export const review: Record<string | ReviewType, any> = {
  title: "거래 후기 보내기",
  bad: {
    blockUser: "이 분과는 다시는 거래하고 싶지 않아요.",
    checklist: {
      title: "어떤 점이 별로였나요?",
      labels: {
        car_window_trade_attempt:
          "차에서 내리지도 않고 창문만 열고 거래하려고 해요",
        excessive_haggling: "무리하게 가격을 깎아요",
        missed_appointment_time: "시간 약속을 안 지켜요",
        insists_delivery_only: "무조건 택배 거래만 하려고 해요",
        no_response_to_messages: "채팅 메시지를 보내도 답이 없어요",
        unclear_about_meeting_time:
          "예약만 해놓고 거래 시간을 명확하게 알려주지 않아요",
        contacts_too_late_at_night: "너무 늦은 시간이거나 새벽에 연락해요",
        no_show_at_location: "약속 장소에 나타나지 않았어요",
        last_minute_cancellation: "거래 직전에 일방적으로 취소했어요",
        unreachable_after_scheduling:
          "거래 시간과 장소를 정한 후 연락이 안 돼요",
        item_differs_from_description: "상품 상태가 설명과 달라요",
        rude_manner: "불친절해요",
      },
    },
  },
  good: {
    checklist: {
      title: "어떤 점이 좋았나요?",
      labels: {
        sharing_kindness: "나눔을 해주셨어요.",
        accurate_item_condition: "상품상태가 설명한 것과 같아요.",
        detailed_description: "상품설명이 자세해요.",
        fair_pricing: "좋은 상품을 저렴하게 판매해요.",
        kept_promise: "시간 약속을 잘 지켜요.",
        quick_response: "응답이 빨라요.",
        friendly_manner: "친절하고 매너가 좋아요.",
      },
    },
  },
  great: {
    checklist: {
      title: "어떤 점이 최고였나요?",
      labels: {
        sharing_kindness: "나눔을 해주셨어요.",
        accurate_item_condition: "상품상태가 설명한 것과 같아요.",
        detailed_description: "상품설명이 자세해요.",
        fair_pricing: "좋은 상품을 저렴하게 판매해요.",
        kept_promise: "시간 약속을 잘 지켜요.",
        quick_response: "응답이 빨라요.",
        friendly_manner: "친절하고 매너가 좋아요.",
      },
    },
  },
};
