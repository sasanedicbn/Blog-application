import { useState } from "react";

const LoginForm = ({ openRegisterHandler }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Podaci za prijavu:", formData);
  };

  return (
    <div className="form-container">
      <h2 className="login-title">Log In</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-input"
          placeholder="Username"
          value={formData.username}
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
