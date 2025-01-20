const LoginForm = () => {
  return (
    <div className="login-form">
      <h2 className="login-title">Log In</h2>
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
          If you don't have account. Please first <a>register</a>
        </p>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
