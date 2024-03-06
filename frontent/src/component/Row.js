import { Tr, Td, Box, Button, Avatar } from '@chakra-ui/react';
import { AiFillDelete, AiFillEdit, AiFillInfoCircle } from 'react-icons/ai';

function Row({ userData }) {
  // console.log(userData);
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
          <Button size="sm" colorScheme={'blue'}>
            <AiFillEdit />
          </Button>
          <Button size="sm" colorScheme={'green'}>
            <AiFillInfoCircle />
          </Button>
          <Button size="sm" colorScheme={'red'}>
            <AiFillDelete />
          </Button>
        </Box>
      </Td>
    </Tr>
  );
}
export default Row;
