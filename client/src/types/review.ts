export type ReviewType = "bad" | "good" | "great";

export interface ReviewItemType {
  imgOn: string;
  imgOff: string;
  text: string;
  type: ReviewType;
}

export interface ImagePreviewType {
  preview: string;
  file: File;
}

export type BadReviewReasonCode =
  | "car_window_trade_attempt"
  | "excessive_haggling"
  | "missed_appointment_time"
  | "insists_delivery_only"
  | "no_response_to_messages"
  | "unclear_about_meeting_time"
  | "contacts_too_late_at_night"
  | "no_show_at_location"
  | "last_minute_cancellation"
  | "unreachable_after_scheduling"
  | "item_differs_from_description"
  | "rude_manner";

export type BadReviewReasonGroup =
  | "manner"
  | "price"
  | "time"
  | "method"
  | "contact"
  | "item";

export interface BadReviewReason {
  id: number;
  code: BadReviewReasonCode;
  group: BadReviewReasonGroup;
}

export type GoodReviewReasonCode =
  | "sharing_kindness"
  | "accurate_item_condition"
  | "detailed_description"
  | "fair_pricing"
  | "kept_promise"
  | "quick_response"
  | "friendly_manner";

export type GoodReviewReasonGroup =
  | "kindness"
  | "item"
  | "price"
  | "time"
  | "response"
  | "manner";

export interface GoodReviewReason {
  id: number;
  code: GoodReviewReasonCode;
  group: GoodReviewReasonGroup;
}

export type GreatReviewReasonCode =
  | "sharing_kindness"
  | "accurate_item_condition"
  | "detailed_description"
  | "fair_pricing"
  | "kept_promise"
  | "quick_response"
  | "friendly_manner";

export type GreatReviewReasonGroup =
  | "kindness"
  | "item"
  | "price"
  | "time"
  | "response"
  | "manner";

export interface GreatReviewReason {
  id: number;
  code: GreatReviewReasonCode;
  group: GreatReviewReasonGroup;
}
