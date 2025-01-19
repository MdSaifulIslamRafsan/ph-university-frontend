import { FieldValues } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import PhInput from "./../../../components/form/PhInput";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";

const CreateAcademicSemester = () => {
  const onsubmit = (data: FieldValues) => {
    console.log("Form submitted successfully", data);
  };

  return (
    <Flex align="center" justify="center">
      <Col span={6}>
        <PhForm onSubmit={onsubmit}>
          <PhInput type={"text"} fieldName={"name"} label={"Name"}></PhInput>
          <PhInput type={"text"} fieldName={"year"} label={"Year"}></PhInput>
          <PhSelect label={"Name"}></PhSelect>
          <Button htmlType="submit">Submit</Button>
        </PhForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
