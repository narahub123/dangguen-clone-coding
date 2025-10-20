export interface ItemTagType {
  value: string;
  name: string;
}

export type SellingType = "sell" | "share";

export interface SellingTagType {
  type: SellingType;
  name: string;
}
