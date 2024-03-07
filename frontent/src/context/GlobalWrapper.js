import { createContext, useState } from 'react';
import axios from 'axios';

export const GlobalContext = createContext();

export default function Wrapper({ children }) {
  const [users, setUsers] = useState([]);
  const fetchUsers = () => {
    axios
      .get('api/users/')
      .then((res) => {
        setUsers(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const searchUsers = (query) => {
    axios
      .post(`api/users/search?key=${query}`)
      .then((res) => {
        setUsers(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <GlobalContext.Provider value={{ age: 41, fetchUsers, searchUsers, users }}>
      {children}
    </GlobalContext.Provider>
  );
}
