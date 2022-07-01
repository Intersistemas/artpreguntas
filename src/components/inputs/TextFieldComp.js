import { Box } from '@mui/system'
import { FormControl, TextField} from '@mui/material'
import React, { useState } from 'react'
import { handleCambioDNI, handleCambioEmail, handleCambioNombre } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const TextFieldComp = (props) => {
    const { label } = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleChange = (event) => {      
      switch(label) {
        case "DNI":
          const re = /^[0-9\b]+$/;
          if(event.target.value === '' || re.test(event.target.value)) {
            dispatch(handleCambioDNI(+event.target.value));
          } else {
            return
          }          
          break;

        case "Nombre":
          dispatch(handleCambioNombre(event.target.value));
          break;

        case "Email":
          dispatch(handleCambioEmail(event.target.value));
          break;

        default:
          break;
      }

      setValue(event.target.value)
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