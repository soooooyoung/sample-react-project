import { Column, Pie } from "@ant-design/plots";
import { PageHeader } from "antd";
import { useEffect, useState } from "react";
import { useFetchAllUsers } from "../api/users";
import { getCreationsInMonth } from "../data/utils";
import { UserCreationsInMonth } from "../interfaces";

export const GraphPage = () => {
  const { data, isLoading } = useFetchAllUsers();
  const [list, setList] = useState<UserCreationsInMonth[]>([]);

  useEffect(() => {
    const creationsList = getCreationsInMonth(data?.result);
    setList(creationsList);
  }, [data]);

  return (
    <>
      <PageHeader className="graph-header" title="월별 유저 가입 수" />
      <div className="graph-container">
        <Column
          className="graph-bar"
          data={list}
          xField="month"
          yField="creations"
          meta={{
            month: {
              formatter: (data) => `${data + 1}월`,
            },
            creations: {
              formatter: (data) => `${data}명`,
            },
          }}
          tooltip={{
            formatter: (data) => ({
              name: "가입자 수",
              value: `${data.creations}명`,
            }),
          }}
        />

        <Pie
          className="graph-pie"
          data={list}
          colorField="month"
          angleField="creations"
          legend={false}
          label={{
            type: "inner",
            offset: "-30%",
            formatter: (data) => `${data.month + 1}월`,
            style: {
              fontSize: 14,
              textAlign: "center",
            },
          }}
          meta={{
            month: {
              formatter: (data) => `${data + 1}월`,
            },
            creations: {
              formatter: (data) => `${data}명`,
            },
          }}
          interactions={[
            {
              type: "element-active",
            },
          ]}
          appendPadding={10}
        />
      </div>
    </>
  );
};
