import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../components/API/API";

const LoginForm = ({ openRegisterHandler }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await loginUser(formData);
    if (response) {
      navigate("/");
    }
    console.log("Podaci za prijavu:", formData);
  };

  return (
    <div className="form-container">
      <h2 className="login-title">Log In</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
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
          value={formData.password}
          onChange={handleChange}
        />
        <p className="register">
          If you don't have an account, please{" "}
          <a onClick={openRegisterHandler}>register</a>.
        </p>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
