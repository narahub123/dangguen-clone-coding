import {
  bad,
  badDisabled,
  good,
  goodDisabled,
  great,
  greatDisabled,
} from "../asset";
import type {
  BadReviewReason,
  GoodReviewReason,
  GreatReviewReason,
  ReviewItemType,
} from "../types";

export const reviewTypeList: ReviewItemType[] = [
  {
    imgOn: bad,
    imgOff: badDisabled,
    text: "별로예요",
    type: "bad",
  },
  {
    imgOn: good,
    imgOff: goodDisabled,
    text: "좋아요!",
    type: "good",
  },
  {
    imgOn: great,
    imgOff: greatDisabled,
    text: "최고예요!",
    type: "great",
  },
];

export const BAD_REVIEW_REASONS: BadReviewReason[] = [
  { id: 1, code: "car_window_trade_attempt", group: "manner" },
  { id: 2, code: "excessive_haggling", group: "price" },
  { id: 3, code: "missed_appointment_time", group: "time" },
  { id: 4, code: "insists_delivery_only", group: "method" },
  { id: 5, code: "no_response_to_messages", group: "contact" },
  { id: 6, code: "unclear_about_meeting_time", group: "time" },
  { id: 7, code: "contacts_too_late_at_night", group: "contact" },
  { id: 8, code: "no_show_at_location", group: "time" },
  { id: 9, code: "last_minute_cancellation", group: "time" },
  { id: 10, code: "unreachable_after_scheduling", group: "contact" },
  { id: 11, code: "item_differs_from_description", group: "item" },
  { id: 12, code: "rude_manner", group: "manner" },
];

export const GOOD_REVIEW_REASONS: GoodReviewReason[] = [
  { id: 1, code: "sharing_kindness", group: "kindness" },
  { id: 2, code: "accurate_item_condition", group: "item" },
  { id: 3, code: "detailed_description", group: "item" },
  { id: 4, code: "fair_pricing", group: "price" },
  { id: 5, code: "kept_promise", group: "time" },
  { id: 6, code: "quick_response", group: "response" },
  { id: 7, code: "friendly_manner", group: "manner" },
];

export const GREAT_REVIEW_REASONS: GreatReviewReason[] = [
  { id: 1, code: "sharing_kindness", group: "kindness" },
  { id: 2, code: "accurate_item_condition", group: "item" },
  { id: 3, code: "detailed_description", group: "item" },
  { id: 4, code: "fair_pricing", group: "price" },
  { id: 5, code: "kept_promise", group: "time" },
  { id: 6, code: "quick_response", group: "response" },
  { id: 7, code: "friendly_manner", group: "manner" },
];
