import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';

function InputsGroup({ fieldname, onChangeHandler }) {
  return (
    <FormControl>
      <FormLabel>{fieldname}</FormLabel>
      <Input type="text" name={fieldname} onChange={onChangeHandler} />
    </FormControl>
  );
}

export default InputsGroup;
