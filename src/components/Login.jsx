import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <section className="App h-screen w-full flex justify-center items-center bg-green-100">
        <div className="w-full max-w-md bg-gray-800">
          <form
            action=""
            className=" bg-white shadow-md rounded px-8 py-8 pt-8"
          >
            <div className="px-4 pb-4">
              <label htmlFor="email" className="text-sm block font-bold  pb-2">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
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
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                placeholder="Enter your password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
              />
            </div>
            <div>
              <button
                className="ml-4 mt-1 bg-green-300 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
