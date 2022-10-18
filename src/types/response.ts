import { User } from "./";

export type DummyResponse = {
  success: boolean;
  error: null | Error;
  result?: Array<User>;
  total: number;
};
