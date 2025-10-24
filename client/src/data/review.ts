import {
  bad,
  badDisabled,
  good,
  goodDisabled,
  great,
  greatDisabled,
} from "../asset";
import type { ReviewItemType } from "../types";

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
