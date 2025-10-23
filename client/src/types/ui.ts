export interface ItemTagType {
  value: string;
  name: string;
}

export type SellingType = "sell" | "share";

export interface SellingTagType {
  type: SellingType;
  name: string;
}

export interface TurfType {
  value: string;
  name: string;
  checked: boolean;
}

export interface UserType {
  userId: string;
  username: string;
  turfs: TurfType[];
}

export interface HomeTagType {
  value: string;
  name: string;
}
