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
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalWrapper';
import InputsGroup from './InputsGroup';

export function DrawerSample() {
  const { isOpen, onOpen, onClose, addUser, updateUser, form, setForm } =
    useContext(GlobalContext);

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onAdd = () => {
    addUser(form, setForm);
  };

  const onUpdate = () => {
    updateUser(form, setForm);
  };
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Create / Update Users</DrawerHeader>

        <DrawerBody>
          <Stack spacing={'24px'}>
            <InputsGroup
              fieldname="fullname"
              value={form?.fullname}
              onChangeHandler={onChangeHandler}
            />
            <InputsGroup
              fieldname="email"
              value={form?.email}
              onChangeHandler={onChangeHandler}
            />
            <InputsGroup
              fieldname="age"
              value={form?.age}
              onChangeHandler={onChangeHandler}
            />
            <InputsGroup
              fieldname="country"
              value={form?.country}
              onChangeHandler={onChangeHandler}
            />
          </Stack>
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button colorScheme="blue" onClick={form ? onUpdate : onAdd()}>
            Save
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
