import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const history = useHistory();
  const Auth = useContext(AuthContext);
  return (
    <div>
      <h1>Hello World</h1>
      <button
        className="ml-4 mt-1 bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={() => {
          Auth.setIsLoggedIn(false);
          history.push("/login");
        }}
      >
        Se déconnecter
      </button>
    </div>
  );
};

export default Home;
