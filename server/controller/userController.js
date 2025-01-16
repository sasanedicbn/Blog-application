// desc Register new user
// route POST api/users
// acess Public
export const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};
// desc Authenticate  a user
// route POST api/users/login
// acess Public
export const loginUser = (req, res) => {
  res.json({ message: "Login User" });
};
// desc Get user data
// route GET api/users/me
// acess Public
export const getMe = (req, res) => {
  res.json({ message: "User data display" });
};
