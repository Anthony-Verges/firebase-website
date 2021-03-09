import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
