import { db } from "../Firebase/config";
import { AuthContext } from "../context/AuthContext";
import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const Auth = useContext(AuthContext);

  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("utilisateurs")
      .get()
      .then((snapshot) => {
        let items = [];
        snapshot.docs.forEach((doc) => {
          items.push(doc.data());
        });
        setPersons(items);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }
  return (
    <div>
      <h1 className="text-center">Hello World</h1>
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
      {persons.map((person) => (
        <div key={person.id}>
          <h2>
            {person.prénom} - {person.nom}
          </h2>
          <p>
            {person.email} - {person.telephone}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
