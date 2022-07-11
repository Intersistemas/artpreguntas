import { Box } from '@mui/system'
import { FormControl, TextField} from '@mui/material'
import React, { useState } from 'react'
import { handleCambioEmail, handleCambioNombre } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import "react-simple-keyboard/build/css/index.css";

import "./TextFieldComp.module.css";


const TextFieldComp = (props) => {
    const { label } = props;
    
    //hooks
    const dispatch = useDispatch();    

    const [input, setInput] = useState(""); 
    
    const onChangeInput = event => {
      switch(label) {        
        case "Nombre":
          dispatch(handleCambioNombre(event.target.value));
          break;

        case "Email":
          dispatch(handleCambioEmail(event.target.value));
          break;

        default:
          break;
      }

      const input = event.target.value;
      setInput(input)    
  };
    
  return (
    <Box sx={{
      display: 'flex',  
      justifyContent: 'center',
      width: '100%',
      marginTop: '2%'
    }}>
        <FormControl fullWidth size='small'>        
          <TextField
              id={label}
              value={input}              
              onChange={onChangeInput}
              placeholder={"Ingrese " + label}
              variant="outlined"
              label={label}
              size="small"
          />                    
        </FormControl>
    </Box>
  )
}

export default TextFieldComp