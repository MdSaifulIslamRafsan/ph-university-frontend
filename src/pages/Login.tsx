import { Button } from "antd";
import { SubmitHandler , useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

type TInputs  = {
    id : string;
    password : string;
}


const Login = () => {

    const {register , handleSubmit } = useForm<TInputs>();
    const [login , {data , error} ]  = useLoginMutation();
    console.log("data", data);
    console.log("error", error);
    const onsubmit : SubmitHandler<TInputs> = (data) => {
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