import { Button } from "antd";
import { SubmitHandler , useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TUser } from "../types";

type TInputs  = {
    id : string;
    password : string;
}
type TErrorMessage = {
    message : string;
}


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {register , handleSubmit } = useForm<TInputs>();
    const [login ]  = useLoginMutation();
    const onsubmit : SubmitHandler<TInputs> = async(data ) => {
      try {
        const res = await login(data).unwrap();
        console.log("res", res);
        const token = res.data.accessToken;
        const userData = verifyToken(token) as TUser
        dispatch(setUser({user: userData , token}))
        toast.success(`${userData.role} log in successfully`)
        navigate(`/${userData.role}/dashboard`);
      } catch (error : unknown) {
        toast.error(`something went wrong ${(error as TErrorMessage).message}`)
      }
       
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