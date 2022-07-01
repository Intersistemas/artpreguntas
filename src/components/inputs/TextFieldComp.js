import { Box } from '@mui/system'
import { FormControl, TextField} from '@mui/material'
import React, { useState } from 'react'
import { handleCambioDNI, handleCambioEmail, handleCambioNombre } from '../../redux/actions'
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
        case "Nombre":
          dispatch(handleCambioNombre(e.target.value));
          break;
        case "Email":
          dispatch(handleCambioEmail(e.target.value));
          break;

        default:
          break;
      }
    }
    
  return (
    <Box sx={{
      display: 'flex',  
      justifyContent: 'center',
      width: '100%',
      marginTop: '2%'
    }}>
        <FormControl fullWidth size='small'>
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