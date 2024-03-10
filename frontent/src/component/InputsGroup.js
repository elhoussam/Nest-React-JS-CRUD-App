import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import React from 'react';

function InputsGroup({ fieldname, onChangeHandler, value }) {
  return (
    <FormControl>
      <FormLabel>{fieldname}</FormLabel>
      <Input
        type="text"
        name={fieldname}
        value={value}
        onChange={onChangeHandler}
      />
    </FormControl>
  );
}

export default InputsGroup;
