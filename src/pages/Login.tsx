import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";


const Login = () => {

    const {register , handleSubmit , reset} = useForm();
    const [login , {data , error} ]  = useLoginMutation();
    console.log("data", data);
    console.log("error", error);
    const onsubmit = (data) => {
        login(data);
    }

    return (
        <form onSubmit={handleSubmit(onsubmit)}>
           <div className="">
                <label htmlFor="id">Id :-</label>
                <input type="text" id="id" {...register('id')} name="id" required />
           </div>
           <div className="">
             <label htmlFor="password">Password :-</label>
             <input type="password" {...register('password')} id="password" name="password" required />
           </div>
           <Button htmlType="submit">Submit</Button>
        </form>
    );
};

export default Login;