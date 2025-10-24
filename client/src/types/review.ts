export type ReviewType = "bad" | "good" | "great";

export interface ReviewItemType {
  imgOn: string;
  imgOff: string;
  text: string;
  type: ReviewType;
}
