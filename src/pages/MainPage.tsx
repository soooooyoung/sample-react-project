import { Col, Row, Tabs } from "antd";
import { GraphPage } from "./GraphPage";
import { TablePage } from "./TablePage";

const MainPage = () => {
  const items = [
    { label: "TABLE", key: "item-1", children: <TablePage /> },
    { label: "GRAPH", key: "item-2", children: <GraphPage /> },
  ];
  return (
    <Row className="mainpage">
      <Col
        xs={{ span: 24, offset: 0 }}
        lg={{ span: 20, offset: 2 }}
        xl={{ span: 18, offset: 3 }}
      >
        <Tabs items={items} />
      </Col>
    </Row>
  );
};

export default MainPage;
