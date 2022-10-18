import { Table, TableProps } from "antd";
import { type DefaultRecordType } from "rc-table/lib/interface";

export const CustomTable = <RecordType extends DefaultRecordType>(
  props: TableProps<RecordType>
) => {
  return <Table className="custom-table" {...props} />;
};
