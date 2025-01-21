import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TPhSelect = { 
    label: string;
    name: string; 
    options: { 
        value: string;
        label: string;
        disabled?: boolean;
     }[]
};

const PhSelect = ({ label, name, options }: TPhSelect) => {
  return (
    <Controller
      name={name}
      render={({ field , fieldState : {error} }) => (
        <Form.Item label={label}>
          <Select
            {...field}
            style={{ width: "100%" }}
            options={options}
            size="large"
          />
          {error && <p style={{color: "red"}}>{error.message}</p>}
        </Form.Item>
      )}
    />
  );
};

export default PhSelect;
