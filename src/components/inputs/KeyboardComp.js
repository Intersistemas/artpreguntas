import { Box, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Keyboard from "react-simple-keyboard";
import { handleCambioEmail, handleCambioNombre } from "../../redux/actions";

const KeyboardComp = props => {
  const { keyboardRef: keyboard, inputNames = ["default"] } = props;
  const dispatch = useDispatch();  

  const [inputs, setInputs] = useState({});
  const [inputName, setInputName] = useState(inputNames[0]);
  const [layoutName, setLayoutName] = useState("default");

  const onChangeAll = inputs => {    
    setInputs({ ...inputs });
    //console.log("Inputs changed", inputs, keyboard);
    //console.log('value', event.target.value)
    // console.log('Nombre', inputs.Nombre)
    // console.log('Email', inputs.Email)
    // console.log('Input', inputName)

    switch(inputName) {      
      case "Nombre":
        dispatch(handleCambioNombre(inputs.Nombre));
        break;

      case "Email":
        dispatch(handleCambioEmail(inputs.Email));
        break;

      default:
        break;
    }
  };

  const onChangeInput = event => {
    const inputVal = event.target.value;    
    switch(inputName) {      
      case "Nombre":
        dispatch(handleCambioNombre(event.target.value));
        break;

      case "Email":
        dispatch(handleCambioEmail(event.target.value));
        break;

      default:
        break;
    }

    setInputs({
      ...inputs,
      [inputName]: inputVal
    });

    keyboard.current.setInput(inputVal);
  };

  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };

  const getInputValue = inputName => {
    return inputs[inputName] || "";
  };

  const onKeyPress = button => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const keyboardProps = {
    keyboardRef: r => (keyboard.current = r),
    onChangeAll,
    inputName,
    onKeyPress,
    layoutName
  };

  return (
    <div>
      {inputNames.map(input => (
        <Box key={input} sx={{
          display: 'flex',  
          justifyContent: 'center',
          width: '100%',
          marginTop: '2%'
        }}>
          <FormControl fullWidth size='small'>        
            <TextField
                key={input}
                placeholder={input}
                id={input}
                value={getInputValue(input)}
                onFocus={() => setInputName(input)}
                onChange={onChangeInput}
                size="small"
            />                    
          </FormControl>
        </Box>
      ))}
      
      <Keyboard {...keyboardProps} />
    </div>
  );
};

export default KeyboardComp;
