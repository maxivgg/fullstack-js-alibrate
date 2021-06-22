import { useEffect } from "react";
import { Route } from "react-router-dom";
import { useJwt } from "react-jwt";

const PrivateRoute = (props) => {
  const token: any = localStorage.getItem("token");
  const { isExpired } = useJwt(token);

  useEffect(() => {
    if (isExpired) {
      let redirect = `/login?redirect=${window.location.pathname}`;
      window.location.href = redirect;
    }
  }, [isExpired]);

  return <Route {...props} />;
};

export default PrivateRoute;
