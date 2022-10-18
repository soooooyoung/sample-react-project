export type Item = {
  itemId: number;
  name: string;
  magic?: number;
  attack?: number;
  defence?: number;
};

export type User = {
  uid: string; // VARCHAR(6)
  country: "kr" | "jp" | "cn" | "vn" | "us";
  created_at: string;
  lv: number;
  items: Array<Item>;
};
