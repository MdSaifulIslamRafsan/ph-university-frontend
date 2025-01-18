import { FormProvider, useForm } from "react-hook-form";
import { ReactNode } from 'react';

const PhForm = ({ onSubmit, children} : {
  onSubmit : any,
  children : ReactNode
}) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PhForm;
