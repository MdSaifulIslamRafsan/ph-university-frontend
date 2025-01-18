import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { ReactNode } from "react";
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
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PhForm;
