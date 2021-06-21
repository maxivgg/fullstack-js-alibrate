import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from "./Login";
import MyLibrary from "./MyLibrary";
import Navigation from "./Navigation";
import Footer from "./Footer";

function AppRouter(): JSX.Element {
  return (
    <Router history={history}>
      <Navigation />
      <div id="container" className="container">
        <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/mi-biblioteca" component={MyLibrary} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default AppRouter;
