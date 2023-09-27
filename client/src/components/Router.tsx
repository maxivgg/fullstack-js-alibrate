import { Router, Switch, Route } from "react-router-dom";
import history from "../history";
import PrivateRoute from "./PrivateRoute";
import Footer from "./Footer";
import Login from "./Login";
import MyLibrary from "./MyLibrary";
import Navigation from "./Navigation";
import HomePage from "./HomePage";

const AppRouter: React.FunctionComponent = () => {
  return (
    <Router history={history}>
      <PrivateRoute component={Navigation} isLayoutComponent/>
      <Switch>
        <PrivateRoute path="/" component={HomePage} exact/>
        <PrivateRoute path="/mi-biblioteca" component={MyLibrary} />
      </Switch>
      <PrivateRoute component={Footer} isLayoutComponent={true}/>
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default AppRouter;
