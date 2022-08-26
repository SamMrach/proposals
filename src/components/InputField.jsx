import React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
 const InputField=({value,handleChange})=>{
    return(
        <>
        <FormControl>
        <InputLabel htmlFor="component-outlined">Name</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={value}
          onChange={handleChange}
          label="Name"
        />
      </FormControl>
        </>
    )
}
export default InputField;
