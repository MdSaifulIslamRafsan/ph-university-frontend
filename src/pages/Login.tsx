import { Button, Row } from "antd";
import { SubmitHandler } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { TUser } from "../types";
import PhForm from "../components/form/PhForm";
import PhInput from "../components/form/PhInput";

type TInputs = {
  id: string;
  password: string;
};
type TErrorMessage = {
  message: string;
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const {register  } = useForm<TInputs>();

  const [login] = useLoginMutation();
  const onSubmit: SubmitHandler<TInputs> = async (data) => {
    console.log(data);
    const toastId = toast.loading("logging in...");
    try {
      const res = await login(data).unwrap();
      const token = res.data.accessToken;
      const userData = verifyToken(token) as TUser;
      dispatch(setUser({ user: userData, token }));
      toast.success(`${userData.role} log in successfully`, {
        id: toastId,
        duration: 2000,
      });
      navigate(`/${userData.role}/dashboard`);
    } catch (error: unknown) {
      toast.error(`something went wrong ${(error as TErrorMessage).message}`, {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <Row align="middle" justify="center" style={{height : "100vh"}}>
      <PhForm onSubmit={onSubmit}>
        <div className="">
          {/* <label htmlFor="id">Id :-</label> */}
          <PhInput label={"Id"} type={"text"} fieldName={"id"}></PhInput>
        </div>
        <div className="">
          {/* <label htmlFor="password">Password :-</label> */}
          <PhInput
            label={"Password"}
            type={"password"}
            fieldName={"password"}
          ></PhInput>
          {/* <input type="password" {...register('password')} id="password" name="password" required /> */}
        </div>
        <Button htmlType="submit">Submit</Button>
      </PhForm>
    </Row>
  );
};

export default Login;
