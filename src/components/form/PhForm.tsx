import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ReactNode } from "react";
import { Form } from "antd";
type TDefaultValues = {
  defaultValues?: Record<string, any>;
};
type TPhForm = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode;
} & TDefaultValues;

const PhForm = ({ onSubmit, children, defaultValues }: TPhForm) => {
  const formConfig: TDefaultValues = {};
  if (defaultValues) {
    formConfig["defaultValues"] = defaultValues;
  }

  const methods = useForm(formConfig);

  return (
    <FormProvider {...methods}>
      <Form layout="vertical" onFinish={methods.handleSubmit(onSubmit)}>{children}</Form>
    </FormProvider>
  );
};

export default PhForm;
