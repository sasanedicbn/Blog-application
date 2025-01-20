import React from "react";

const RegisterForm = () => {
  return (
    <div className="register-form">
      <h2 className="register-title">Register</h2>
      <form className="form">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className="form-input"
          placeholder="Username"
        />

        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="Email"
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
        />

        <label htmlFor="confirm-password" className="form-label">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          className="form-input"
          placeholder="Confirm Password"
        />

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
