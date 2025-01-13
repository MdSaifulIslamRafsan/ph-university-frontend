import { Button } from "antd";
import { SubmitHandler , useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

type TInputs  = {
    id : string;
    password : string;
}


const Login = () => {
    const dispatch = useAppDispatch();

    const {register , handleSubmit } = useForm<TInputs>();
    const [login , {error} ]  = useLoginMutation();
    console.log("error", error);
    const onsubmit : SubmitHandler<TInputs> = async(data) => {
       const res = await login(data).unwrap();
       const token = res.data.accessToken;
       const userData = verifyToken(token)
       dispatch(setUser({user: userData , token}))
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