import { useState } from "react";
import { Select, Input, Space, Button } from "antd";
import { DefaultOptionType, OptionProps } from "antd/lib/select";
import { SearchValue } from "../interfaces";

interface Props<T> {
  onSearch: (value: SearchValue<T>) => void;
  defaultOption: keyof T;
}

export const SearchBar = <T,>({ onSearch, defaultOption }: Props<T>) => {
  const [value, setValue] = useState<SearchValue<T>>({
    option: defaultOption,
  });
  const options: DefaultOptionType[] = [
    {
      value: "uid",
      label: "uid",
    },
    {
      value: "country",
      label: "country",
    },
    {
      value: "created_at",
      label: "created_at",
    },
    {
      value: "lv",
      label: "lv",
    },
  ];

  const onClickSearch = () => {
    onSearch(value);
  };

  return (
    <Space className="searchbar">
      <Select
        className="searchbar-select"
        options={options}
        value={value.option}
        onChange={(e) => setValue({ ...value, option: e })}
      />
      <Input
        value={value?.keyword}
        onChange={(e) => setValue({ ...value, keyword: e.target.value })}
      />
      <Button onClick={onClickSearch}>검색</Button>
    </Space>
  );
};
