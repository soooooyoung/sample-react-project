import { User } from "../types";
import dayjs from "dayjs";
import { UserCreationsInMonth } from "../interfaces/statistics";

export const getCreationsInMonth = (data?: User[]) => {
  if (!data) {
    return [];
  }
  const users = data;

  const result = users.reduce((prev, curr) => {
    const found = prev.find(
      (stat) => stat.month === dayjs(curr.created_at).month()
    );
    if (found) {
      found.creations++;
      return prev;
    }
    const newYear: UserCreationsInMonth = {
      creations: 1,
      month: dayjs(curr.created_at).month(),
    };
    prev.push(newYear);
    return prev;
  }, [] as UserCreationsInMonth[]);

  return result.sort((a, b) => a.month - b.month);
};
