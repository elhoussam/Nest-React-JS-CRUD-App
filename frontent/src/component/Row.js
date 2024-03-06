import { Tr, Td, Box, Button, Avatar } from '@chakra-ui/react';
import {
  AiFillDelete,
  AiFillEdit,
  AiFillInfoCircle,
  TiInfoLarge,
} from 'react-icons/ai';

function Row() {
  return (
    <Tr>
      <Td>
        <Avatar size="sm" name="NOUAR KHERKHACHI HOUSSAM"></Avatar>
      </Td>
      <Td>NOUAR KHERKHACHI Houssam</Td>
      <Td>NOUAR@EMAIL.COM</Td>
      <Td>23</Td>
      <Td>Algeria</Td>
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
