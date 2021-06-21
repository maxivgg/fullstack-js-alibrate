import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from "./Login";
import Activity from "./Activity";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Routera(): JSX.Element {
  return (
    <Router history={history}>
      <Navigation />
      <div id="container">
        <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/actividad" component={Activity} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default Routera;
