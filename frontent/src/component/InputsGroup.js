import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';

function InputsGroup({ fieldname }) {
  return (
    <FormControl>
      <FormLabel>{fieldname}</FormLabel>
      <Input type="text" name={fieldname} />
    </FormControl>
  );
}

export default InputsGroup;
