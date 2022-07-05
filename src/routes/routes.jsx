import { Route, Switch } from "react-router-dom";
import Checkout from "../pages/Checkout/checkout";
import Home from "../pages/Home/home";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/checkout">
        <Checkout />
      </Route>
    </Switch>
  );
}

export default Routes;
