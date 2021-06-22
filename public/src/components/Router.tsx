import { Router, Switch, Route } from "react-router-dom";
import history from "../history";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import MyLibrary from "./MyLibrary";
import Navigation from "./Navigation";
import Footer from "./Footer";
import HomePage from "./HomePage";

const AppRouter = () => {
  return (
    <Router history={history}>
      <Route path="/login" component={Login} exact />
      <Navigation />
        <Switch>
          <PrivateRoute path="/" component={HomePage} exact />
          <PrivateRoute path="/mi-biblioteca" component={MyLibrary} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default AppRouter;
