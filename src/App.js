import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const getUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const res = response;
  const obj = res.data;
  return obj;
};

export const App = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = () => {
      setLoading(true);

      getUsers()
        .then((obj) => {
          setUsers(obj);
        })
        .catch((error) => {
          setError("Ooops. Something went wrong...");
          console.log(error);
        })
        .finally(() => setLoading(false));
    };
    fetchUsers();
  }, []);

  // Рендерим розмітку в залежності від значень у стані
  return (
    <div>
      <h1>Users</h1>
      {loading && "...loading"}
      {error && <div>{error}</div>}
      {users && (
        <ul>
          {users.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
