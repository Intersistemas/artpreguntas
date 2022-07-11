import { Checkbox } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { handleCambioTerminosCondiciones } from '../../redux/actions';

const CheckBoxComp = () => {
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch()

    const handleCheck = () => {
        dispatch(handleCambioTerminosCondiciones(!checked));
        setChecked(!checked)
    }
  return (
    <div>
        {/* <Checkbox 
            checked={checked}
            onChange={handleCheck}
            inputProps={{ 'aria-label': 'controlled' }}
        /> */}
        <Link to="/terminoscondiciones">*Al jugar acepta las Bases y Condiciones.</Link>  
    </div>
          
  )
}

export default CheckBoxComp