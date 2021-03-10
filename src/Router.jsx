import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { AuthContext } from "./context/AuthContext";

const Router = () => {
  const Auth = useContext(AuthContext);
  return (
    <BrowserRouter>
      {/* <Route exact path="/" component={Home} /> */}
      {!Auth.isLoggedIn ? (
        <Route path="/" component={Login} />
      ) : (
        <>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </>
      )}
    </BrowserRouter>
  );
};

export default Router;
