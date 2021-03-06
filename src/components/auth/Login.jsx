import { auth } from "../../Firebase/config";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Auth = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        Auth.setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(
          "Error when you signin with your emai or your password",
          error
        );
      });
  };

  return (
    <div className=" bg-green-100">
      <h1 className="text-center text-green-500 text-5xl font-extralight">
        Se connecter
      </h1>
      <section className="App h-screen w-full flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-md bg-gray-800">
          <form
            action="submit"
            className=" bg-white shadow-md rounded px-8 py-8 pt-8"
            onSubmit={handleSubmit}
          >
            <div className="px-4 pb-4">
              <label htmlFor="email" className="text-sm block font-bold  pb-2">
                ADRESSE MAIL
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400 "
                placeholder="anthony@example.com"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className="px-4 pb-4">
              <label
                htmlFor="password"
                className="text-sm block font-bold pb-2"
              >
                MOT DE PASSE
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-gray-400"
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </div>
            <div>
              <button
                className="ml-4 mt-1 bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Se connecter
              </button>
              <Link to="/">
                <button
                  className="ml-20 mt-1 bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Cr??er compte
                </button>
              </Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
