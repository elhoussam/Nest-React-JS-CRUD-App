import { useContext } from 'react';
import { GlobalContext } from './context/GlobalWrapper';
import {
  Text,
  Input,
  FormControl,
  Box,
  Container,
  Button,
} from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineUserDelete } from 'react-icons/ai';
import { Table, Thead, Tbody, Tr, Th, TableContainer } from '@chakra-ui/react';
import Row from './component/Row';

function App() {
  // const {age} = useContext( GlobalContext);
  return (
    <div className="App">
      <Container maxW={'full'} p="4" fontSize={'18px'}>
        <Box boxShadow={'base'} rounded={'lg'} p="4">
          <Box gap={'2'} display={'flex'}>
            <FormControl>
              <Input boxShadow={'base'} type="text" />
            </FormControl>{' '}
            <Button
              leftIcon={<AiOutlineSearch />}
              colorScheme="teal"
              variant={'outline'}
              maxW={'300px'}
              minW="120px"
            >
              Search
            </Button>
          </Box>
        </Box>

        <Box mt={'5'} rounded={'lg'} boxShadow={'base'}>
          <Box p={'4'} display="flex" justifyContent={'space-between'}>
            <Text fontSize="xl" fontWeight="bold">
              Liste of users
            </Text>

            <Button
              leftIcon={<AiOutlineUserDelete />}
              colorScheme="teal"
              variant={'outline'}
              maxW={'300px'}
              minW="120px"
            >
              Add User
            </Button>
          </Box>
          <Box>
            <TableContainer>
              <Table size="sm" variant="simple">
                <Thead>
                  <Tr>
                    <Th>Avatar</Th>
                    <Th>Full Name</Th>
                    <Th>Email</Th>
                    <Th>Age</Th>
                    <Th>Country</Th>
                    <Th>Action</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Row />
                  <Row />
                  <Row />
                  <Row />
                  <Row />
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
