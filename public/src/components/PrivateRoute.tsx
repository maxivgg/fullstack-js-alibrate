import { Route } from "react-router-dom";
import { useJwt } from "react-jwt";
import Login from "./Login";
const token = localStorage.getItem("token") || "";

const PrivateRoute = (props) => {
  const { isExpired } = useJwt(token);
  const { isLayoutComponent } = props;

  if (isExpired) {
    if (isLayoutComponent) return <></>;
    return <Login />;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
