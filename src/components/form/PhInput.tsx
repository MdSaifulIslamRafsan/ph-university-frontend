import { Input } from "antd";
import { Controller } from "react-hook-form";

const PhInput = ({
  type,
  fieldName,
  label,
}: {
  type: string;
  fieldName: string;
  label: string;
}) => {

  return (
    <div style={{ marginBottom : "20px" }}>
      <label htmlFor={fieldName}>{label} :-</label>
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
