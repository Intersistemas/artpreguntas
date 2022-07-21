import React, { useState } from 'react';
import { Data } from './DataKids';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import uvaIcon from './icons/uvaIcon.png';
import vacaIcon from './icons/vacaIcon.png';
import yerbaIcon from './icons/yerbaIcon.png';
import azucarIcon from './icons/azucarIcon.png';
import manzanaIcon from './icons/manzanaIcon.png';
import { orange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import check from './check.png';
import update from 'react-addons-update';
import del from './delete.png';
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";


import Stack from '@mui/material/Stack';

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 1vh;
  //background: #f8a700;
  font-family: sans-serif;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  font-family: sans-serif;
`;

const Wrap = styled.div`
  background: white;
  color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid #f8a700;
  border-top: 2px solid #f8a700;
  font-family: sans-serif;

  h1 {
    padding:0rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
  background: white;
  color: black;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  display: inherit;
  font-family: sans-serif;
  font-weight: bold;

  p {
    font-size: 2rem;
  }
`;

const Accordion = (props) => {
  const [clicked, setClicked] = useState(false);
  const [open, setOpen] = React.useState(false);



  const manzana=[0,0,0,0,1];
  const vaca = [1,0,0,0,0];
  const yerba= [0,0,1,0,0];
  const uva= [0,0,0,1,0];
  const azucar= [0,1,0,0,0];

  let [actividades, setActividades] = useState([manzana,vaca, yerba, uva, azucar]);

  let [actividadesCheck, setActividadesCheck] = useState([0, 0, 0, 0, 0]);

  const iconRender = indice => {
    switch(indice) {      
      case 0:
        return manzanaIcon
        break;
      case 1:
        return vacaIcon
        break;
      case 2:
        return yerbaIcon
      break;
      case 3:
        return uvaIcon
        break;
      case 4:
        return azucarIcon
        break;
      default:
        break;
    }
  }

  const colores = indice => {
    switch(indice) {      
      case 0:
        return 'yellow'
        break;
      case 1:
        return 'orange'
        break;
      case 2:
        return 'red'
      break;
      case 3:
        return 'green'
        break;
      case 4:
        return 'skyblue'
        break;
      default:
        break;
    }
  }

  const handleClick = (value,indice) => () => {

      if (value == 1){
              let newState = actividadesCheck.map((obj , ind) => {
                // 👇️ if id equals 2, update country property
                if (ind == indice) {
                  return 1;
                }
                // 👇️ otherwise return object as is
                return obj;
              });
          
              setActividadesCheck(
                 newState
              );

              if( newState.indexOf(0) > -1){
        
              }else{
                setClicked(true)
              }
      }
      
  };

  const handleClose = () => {
    setClicked(false);
    window.location.replace('');
    //window.location.href = window.location.href;
  };

  return (
    <>
     <div style = {{display: 'grid', width: '90%','justify-items': 'end'}}>
          <div style={{float:'right'}}>
              <Typography  variant="h4" fontWeight={"bold"} color={'gray'}>¿En qué región se produce?</Typography>
              <Typography  variant="h4" fontWeight={"bold"} color={'gray'}>Elegí un producto</Typography>
          </div>
          {actividades.map((item, index) => {

            let i = index;
            return (
                <li style={{float: 'right', 'list-style-type': 'none'}}>
                    {i == 4 ? <img style={{zoom: '25%','margin-bottom': '-7%'}} src={iconRender(i)}/> :  <img style={{zoom: '25%' }} src={iconRender(i)}/>}
                 
                    {item.map((reg, index2) => {
                    return (
                        <button
                         onClick={handleClick(reg,i,index2)}
                         style={{zoom:'350%','border-width': 'thin', backgroundColor: colores(index2), color: colores(index2)}}
                         key={index2}>
                          
                          {/*(actividadesCheck[i] == 1 && reg == 1) ? <img style={{zoom: '20%', margin: '-10% 0%'}} src={check}/> : (actividadesCheck[i] == 2 ? <img style={{zoom: '20%', margin: '-10% 0%'}} src={del}/> : <a>B.</a>)*/}

                          {(actividadesCheck[i] == 1 && reg == 1) ? <img style={{zoom: '20%', margin: '-10% 0%'}} src={check}/> : <a>B.</a>}
                        </button>
                      );
                    })}
                </li>
            );
          })}
      <Dialog open={clicked} onClose={handleClose}>
        <DialogActions>
            <Button onClick={handleClose}>X</Button>
        </DialogActions>
        <Typography variant="h4" fontWeight={"bold"} color={'gray'}>Felicidades Ganaste!</Typography>  
      </Dialog>
      </div>
   </>
  );
};

export default Accordion;
