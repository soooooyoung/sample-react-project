export interface SearchValue<T> {
  keyword?: string;
  option: keyof T;
}
