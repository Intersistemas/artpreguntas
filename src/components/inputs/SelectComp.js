import React, { useState } from 'react'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { useDispatch } from 'react-redux'
import { handleCambioDificultad, handleCambioSexo } from '../../redux/actions'

const SelectComp = (props) => {
    const { label, options } = props;
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)

        switch(label) {
            case "Dificultad":
                console.log('dispatch')
                dispatch(handleCambioDificultad(e.target.value));
                break;

            case "Sexo":
                dispatch(handleCambioSexo(e.target.value));
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
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={handleChange}>
                {options.map(({id, name}) => (
                    <MenuItem value={id} key={id}>{name}</MenuItem>
                ))}
            </Select>
        </FormControl>        
    </Box>
  )
}

export default SelectComp