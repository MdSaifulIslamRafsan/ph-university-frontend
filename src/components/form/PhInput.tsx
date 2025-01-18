import { Input } from "antd";
import { useFormContext } from "react-hook-form";

const PhInput = ({type , fieldName , label } : {
    type: string,
    fieldName: string,
    label : string
 
}) => {
    const {register} = useFormContext()

    return (
     <>
        <label htmlFor={fieldName}>{label} :-</label>
         <Input type={type} id={fieldName} {...register(fieldName)} name={fieldName} required />
     </>
    );
};

export default PhInput;