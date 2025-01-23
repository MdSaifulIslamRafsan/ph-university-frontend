import { FieldValues } from "react-hook-form";
import PhForm from "../../../components/form/PhForm";
import { Button, Col, Flex } from "antd";
import PhSelect from "../../../components/form/PhSelect";
import { semesterOptions } from "../../../constants/semester";
import { monthOptions } from "../../../constants/global";
import { zodResolver } from "@hookform/resolvers/zod";
import { academicSemesterSchema } from "../../../Schemas/academicManagement.schema";
import { useAddAcademicSemesterMutation } from "../../../redux/features/admin/academicManagementApi";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";


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
  const [addAcademicSemester ] = useAddAcademicSemesterMutation();
  const onsubmit = async(data: FieldValues) => {
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
   try{
    const toastId = toast.loading("Loading...")
    const res = await addAcademicSemester(semesterData) as TResponse;
    console.log("Academic Semester added successfully", res);
    if(res.error) {
      toast.error(res.error.data.message , {id: toastId});
    }
    else{
      toast.success("Academic Semester added successfully", {id: toastId});
    }

   }
    catch(error : unknown){
      toast.error("something went wrong");
    }

  };

  return (
    <Flex align="center" justify="center">
      <Col span={8}>
        <PhForm onSubmit={onsubmit} resolver={zodResolver(academicSemesterSchema)}>
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
