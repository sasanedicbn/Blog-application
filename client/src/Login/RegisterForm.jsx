const RegisterForm = () => {
  return (
    <div className="form-container">
      <h2 className="login-title">Register</h2>
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
        <p className="register">
          If you have account. Please first <a>login</a>
        </p>
        <button type="submit" className="login-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
