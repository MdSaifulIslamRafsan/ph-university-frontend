import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TPhInput = {
  type: string;
  fieldName: string;
  label?: string;
};

const PhInput = ({ type, fieldName, label }: TPhInput) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      {/* {label ? <label htmlFor={fieldName}>{label} :-</label> : ""} */}
      <Controller
        name={fieldName}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input
              {...field}
              type={type}
              id={fieldName}
              name={fieldName}
              required
              size="large"
            />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default PhInput;
