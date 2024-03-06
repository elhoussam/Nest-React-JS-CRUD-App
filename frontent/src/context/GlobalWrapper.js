import { createContext } from 'react';
import axios from 'axios';
export const GlobalContext = createContext();

export default function Wrapper({ children }) {
  const fetchUsers = () => {
    axios.get('http:/localhost:5000/api/users');
  };
  return (
    <GlobalContext.Provider value={{ age: 41 }}>
      {children}
    </GlobalContext.Provider>
  );
}
