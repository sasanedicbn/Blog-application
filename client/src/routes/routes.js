import Login from "./features/Login";
import App from "../App";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default routes;
