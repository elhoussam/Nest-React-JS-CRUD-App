import { Tr, Td, Box, Button, Avatar } from '@chakra-ui/react';
import { useContext } from 'react';
import { AiFillDelete, AiFillEdit, AiFillInfoCircle } from 'react-icons/ai';
import { GlobalContext } from '../context/GlobalWrapper';

function Row({ userData }) {
  const { deleteUser, updateUser, onOpen, onClose, form, setForm } =
    useContext(GlobalContext);
  // console.log(userData);
  const updateUserHandler = (userObject) => {
    console.log(userObject);
    setForm(userObject);
    onOpen();
  };
  return (
    <Tr id={userData._id}>
      <Td>
        <Avatar size="sm" name={userData.fullname}></Avatar>
      </Td>
      <Td>{userData.fullname}</Td>
      <Td>{userData.email}</Td>
      <Td>{userData.age}</Td>
      <Td>{userData.country}</Td>
      <Td>
        <Box display="flex" gap="1">
          <Button
            size="sm"
            colorScheme={'blue'}
            onClick={() => updateUserHandler(userData)}
          >
            <AiFillEdit />
          </Button>
          <Button size="sm" colorScheme={'green'}>
            <AiFillInfoCircle />
          </Button>
          <Button
            size="sm"
            colorScheme={'red'}
            onClick={() => deleteUser(userData._id)}
          >
            <AiFillDelete />
          </Button>
        </Box>
      </Td>
    </Tr>
  );
}
export default Row;
