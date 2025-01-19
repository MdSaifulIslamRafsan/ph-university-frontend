import { Form, Select} from "antd";

const PhSelect = ({label} : {
    label :string
}) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <Form.Item label={label}>
      <Select
        style={{ width: "100%" }}
        onChange={handleChange}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
        ]}
      />
    </Form.Item>
  );
};

export default PhSelect;
