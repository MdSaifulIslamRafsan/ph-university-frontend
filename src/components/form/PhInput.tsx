import { Input } from "antd";
import { Controller } from "react-hook-form";

type TPhInput = {
    type: string;
    fieldName: string;
    label?: string;
  }

const PhInput = ({
  type,
  fieldName,
  label,
}: TPhInput) => {

  return (
    <div style={{ marginBottom : "20px" }}>
      {label ? <label htmlFor={fieldName}>{label} :-</label> : ""}
      <Controller
        name={fieldName}
        render={({ field }) => (
          <Input
            {...field}
            type={type}
            id={fieldName}
            name={fieldName}
            required
          />
        )}
      />
    </div>
  );
};

export default PhInput;
