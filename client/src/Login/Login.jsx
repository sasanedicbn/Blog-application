import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [openRegister, setOpenRegister] = useState(true);
  const openRegisterHandler = () => {
    setOpenRegister((prevState) => !prevState);
  };
  return (
    <div className="login-backgorund">
      {openRegister ? (
        <LoginForm openRegisterHandler={openRegisterHandler} />
      ) : (
        <RegisterForm openLoginHandler={openRegisterHandler} />
      )}
    </div>
  );
};

export default Login;
