import { FieldValues } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";

const currentYear = new Date().getFullYear();
/* const yearOptions = Array.from({ length: 6 }, (_, i) => ({
  value: `${currentYear + i}`,
  label: `${currentYear + i}`,
})); */

const yearOptions = [0, 1, 2, 3, 4]?.map(i => ({
  value: `${currentYear + i}`,
  label: `${currentYear + i}`,
}))

const CreateAcademicSemester = () => {
  const onsubmit = (data: FieldValues) => {
    // const name = nameOptions.find((item) => item.value === data.name)
    const name = semesterOptions[parseInt(data?.name) - 1].label;

    const semesterData = {
      // name: name?.label,
      name,
      code: data.name,
      year : data.year,
      startMonth: data.startMonth,
      endMonth: data.endMonth
    };
    console.log(semesterData);
  };

  return (
    <Flex align="center" justify="center">
      <Col span={8}>
        <PhForm onSubmit={onsubmit}>
          <PhSelect label={"Name"} name="name" options={semesterOptions}></PhSelect>
          <PhSelect label={"Year"} name="year" options={yearOptions}></PhSelect>
          <PhSelect
            label={"Start Month"}
            name="startMonth"
            options={monthOptions}
          ></PhSelect>
          <PhSelect
            label={"End Month"}
            name="endMonth"
            options={monthOptions}
          ></PhSelect>
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
