import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Button,
  Stack,
  InputGroup,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalWrapper';
import InputsGroup from './InputsGroup';

export function DrawerSample() {
  const { isOpen, onOpen, onClose } = useContext(GlobalContext);

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create / Update Users</DrawerHeader>

        <DrawerBody>
          <Stack spacing={'24px'}>
            <InputsGroup fieldname="Fullname" />
            <InputsGroup fieldname="Fmail" />
            <InputsGroup fieldname="Age" />
            <InputsGroup fieldname="Country" />
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue">Save</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
