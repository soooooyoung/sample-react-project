import { useFetch } from "./utils";
import { DummyResponse, User } from "../types";

/*
 *
 * fetch
 *
 */
export const useFetchUsers = (
  page = 1,
  pageSize = 10,
  search?: { [Property in keyof User]?: string | number }
) => {
  return useFetch<DummyResponse>("user", {
    page,
    pageSize,
    q: search,
  });
};

export const useFetchAllUsers = () => {
  return useFetch<DummyResponse>("user", { page: 1, pageSize: 200 });
};
