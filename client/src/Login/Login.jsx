import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [openRegister, setOpenRegister] = useState(false);
  return (
    <div className="login-backgorund">
      {/* <LoginForm /> */}
      <RegisterForm />
    </div>
  );
};

export default Login;
