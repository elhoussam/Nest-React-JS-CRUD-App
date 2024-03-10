import { createContext, useState } from 'react';
import axios from 'axios';
import { useDisclosure, useToast } from '@chakra-ui/react';
export const GlobalContext = createContext();

export default function Wrapper({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [users, setUsers] = useState([]);
  const toast = useToast();

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

  const deleteUser = (id) => {
    axios
      .delete(`api/users/${id}`)
      .then((res) => {
        setUsers(users?.filter((user) => user._id !== id));
        // console.log(res.data);
        toast({
          title: `User ${res.data.fullname} Deleted.`,
          status: 'success',
          duration: 1000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const addUser = (object) => {
    console.log(object);
    axios
      .post('api/users/', object)
      .then((res) => {
        setUsers([...users, res.data]);
        toast({
          title: `User ${res.data.fullname} Added.`,
          status: 'success',
          duration: 1000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
        err.response.data?.message.reverse().map((msg) => {
          toast({
            // title: 'error',
            description: msg,

            status: 'error',
            duration: 4000,
            isClosable: true,
          });
        });
      });
  };
  return (
    <GlobalContext.Provider
      value={{
        age: 41,
        fetchUsers,
        searchUsers,
        deleteUser,
        addUser,
        users,
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
