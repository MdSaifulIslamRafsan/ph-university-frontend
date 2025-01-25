import { Table, TableColumnsType } from "antd";
import { useGetAcademicSemesterQuery } from "../../../redux/features/admin/academicManagementApi";
interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}
const AcademicSemester = () => {
  const { data : semesterData } = useGetAcademicSemesterQuery(undefined);
  const columns: TableColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      showSorterTooltip: { target: "full-header" },
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend"],
    },
    {
      title: "Year",
      dataIndex: "year",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
     
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
    },
  ];
  console.log(semesterData)

  const tableData = semesterData?.data?.map((item) => ({
    key: item._id,
    name: item.name,
    year: item.year,
    startMonth: item.startMonth,
    endMonth: item.endMonth,
   }))

  
  return (
    <div>
      <h1>this is academic semester</h1>
      <Table<DataType>
        columns={columns}
        dataSource={tableData}
        // onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
      />
    </div>
  );
};

export default AcademicSemester;
