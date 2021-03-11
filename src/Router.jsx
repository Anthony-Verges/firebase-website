import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Home from "./components/Home";
import { AuthContext } from "./context/AuthContext";

const Router = () => {
  const Auth = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Route exact path="/" component={Signup} />
      {!Auth.isLoggedIn ? (
        <Route path="/login" component={Login} />
      ) : (
        <>
          <Switch>
            <Route exact path="/login" component={Home} />
          </Switch>
        </>
      )}
    </BrowserRouter>
  );
};

export default Router;
