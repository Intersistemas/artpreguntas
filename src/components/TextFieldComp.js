import { Box } from '@mui/system'
import { FormControl, TextField} from '@mui/material'
import React, { useState } from 'react'
import { handleCambioDNI, handleCambioEmail } from '../redux/actions'
import { useDispatch } from 'react-redux'

const TextFieldComp = (props) => {
    const { label } = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleChange = (e) => {
      setValue(e.target.value)

      switch(label) {
        case "DNI":
          dispatch(handleCambioDNI(e.target.value));
          break;

        case "Email":
          dispatch(handleCambioEmail(e.target.value));
          break;

        default:
          break;
      }
    }
    
  return (
    <Box mt={3} width="100%">
        <FormControl fullWidth>
            <TextField
                value={value}
                onChange={handleChange}
                variant="outlined"
                label={label}
                size="small"
            />
        </FormControl>
    </Box>
  )
}

export default TextFieldComp