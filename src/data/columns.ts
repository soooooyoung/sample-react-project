import { ColumnsType } from "antd/lib/table";
import { User, Item } from "../types";

export const userTableColumns: ColumnsType<User> = [
  {
    title: "uid",
    dataIndex: "uid",
  },
  {
    title: "country",
    dataIndex: "country",
  },
  {
    title: "created_at",
    dataIndex: "created_at",
  },
  {
    title: "lv",
    dataIndex: "lv",
  },
];

export const userItemsTableColumns: ColumnsType<Item> = [
  {
    title: "itemId",
    dataIndex: "itemId",
  },
  {
    title: "name",
    dataIndex: "name",
  },
  {
    title: "magic",
    dataIndex: "magic",
  },
  {
    title: "attack",
    dataIndex: "attack",
  },
  {
    title: "defence",
    dataIndex: "defence",
  },
];
