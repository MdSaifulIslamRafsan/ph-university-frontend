import { FieldValues } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";
const nameOptions = [
  {
    value: "01",
    label: "Autumn",
  },
  {
    value: "02",
    label: "Summer",
  },
  {
    value: "03",
    label: "Fall",
  },
];
const CreateAcademicSemester = () => {
  const onsubmit = (data: FieldValues) => {
    // const name = nameOptions.find((item) => item.value === data.name)
    const name = nameOptions[parseInt(data?.name) - 1].label;

    const semesterData = {
      // name: name?.label,
      name,
      code: data.name,
    };
    console.log(semesterData);
  };

  return (
    <Flex align="center" justify="center">
      <Col span={6}>
        <PhForm onSubmit={onsubmit}>
          <PhSelect label={"Name"} name="name" options={nameOptions}></PhSelect>
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
