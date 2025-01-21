import { useState } from "react";
import { registerUser } from "../components/API/API";

const RegisterForm = ({ openLoginHandler }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
    console.log("name", name, "value", value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(data);
    await registerUser(data);
  };

  return (
    <div className="form-container">
      <h2 className="login-title">Register</h2>
      <form className="form" onSubmit={onSubmitHandler}>
        {/* <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="name"
          className="form-input"
          placeholder="Username"
          value={data.name}
          onChange={onChangeHandler}
        /> */}

        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="Email"
          value={data.email}
          onChange={onChangeHandler}
        />

        <label htmlFor="password" className="form-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="form-input"
          placeholder="Password"
          value={data.password}
          onChange={onChangeHandler}
        />

        <p className="register">
          If you have an account, please <a onClick={openLoginHandler}>login</a>
          .
        </p>
        <button type="submit" className="login-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
