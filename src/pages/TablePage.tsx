import { useState, useEffect } from "react";
import { Spin } from "antd";
import { PaginationProps } from "antd/lib/pagination";
import { useFetchUsers } from "../api/users";
import { CustomTable } from "../components/CustomTable";
import { SearchBar } from "../components/SearchBar";
import { userTableColumns, userItemsTableColumns } from "../data/columns";
import { SearchValue } from "../interfaces";
import { User } from "../types";

export const TablePage = () => {
  const [pagination, setPagination] = useState<PaginationProps>({
    current: 1,
    pageSize: 10,
  });
  const [total, setTotal] = useState(0);
  const [search, SetSearch] = useState<{ [Property in keyof User]?: any }>();
  const { data, isLoading } = useFetchUsers(
    pagination.current,
    pagination.pageSize,
    search
  );

  useEffect(() => {
    if (data?.total !== pagination.total) {
      setTotal(data?.total ?? 0);
    }
  }, [data]);

  const onSearch = (value: SearchValue<User>) => {
    setPagination({ current: 1, pageSize: pagination.pageSize });
    const searchValue = value.keyword?.trim();

    if (searchValue === undefined || searchValue.length === 0) {
      SetSearch({});
      return;
    }

    SetSearch({
      [value.option]: searchValue,
    });
  };

  const onChangePage = (current: number, pageSize: number) => {
    if (current !== pagination.current || pageSize !== pagination.pageSize)
      setPagination({ current, pageSize });
  };

  return (
    <>
      <SearchBar
        onSearch={(value: SearchValue<User>) => onSearch(value)}
        defaultOption="uid"
      />
      <Spin tip="Loading..." spinning={isLoading}>
        <CustomTable
          rowKey={"uid"}
          dataSource={data?.result}
          columns={userTableColumns}
          pagination={{ ...pagination, total, onChange: onChangePage }}
          expandable={{
            expandedRowRender: ({ items }: User) => (
              <CustomTable
                size="small"
                rowKey={(item) =>
                  // temporary fix for data without unique key.
                  `${item.name}-${Math.floor(Math.random() * 100)}`
                }
                dataSource={items}
                columns={userItemsTableColumns}
                pagination={false}
              />
            ),
          }}
        />
      </Spin>
    </>
  );
};
