import React, { useState } from 'react';
import styled from 'styled-components';
import uvaIcon from './icons/uvaIcon.png';
import vacaIcon from './icons/vacaIcon.png';
import yerbaIcon from './icons/yerbaIcon.png';
import azucarIcon from './icons/azucarIcon.png';
import manzanaIcon from './icons/manzanaIcon.png';
import { orange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import check from './check.png';
import del from './delete.png';
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import { Box } from '@mui/system';




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
  const [clicked2, setClicked2] = useState(false);

  let manzana=[0,0,0,0,0];
  let vaca  = [0,0,0,0,0];
  let yerba = [0,0,0,0,0];
  let uva   = [0,0,0,0,0];
  let azucar= [0,0,0,0,0];


  const manzanaW=[0,0,0,0,1];
  const vacaW  = [1,0,0,0,0];
  const yerbaW = [0,0,1,0,0];
  const uvaW   = [0,0,0,1,0];
  const azucarW= [0,1,0,0,0];

  let [actividades, setActividades] = useState([manzana,vaca, yerba, uva, azucar]);
  let [actividadesW, setActividadesW] = useState([manzanaW,vacaW, yerbaW, uvaW, azucarW]);

  let [actividadesCheck, setActividadesCheck] = useState([0, 0, 0, 0, 0]);

  const iconRender = indice => {
    switch(indice){      
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

  const handleChequear = () => {

    if (JSON.stringify(actividades) === JSON.stringify(actividadesW)) {
      console.log('son iguales');
      (setClicked(true))

    }else{
        console.log('**0');
        (setClicked2(true))
        let matriz0 = actividades.map((obj, index) => {
          console.log('actividades',actividades);
          console.log('obj:',obj);
          console.log('indice del 1 ', actividades[index].indexOf(1));

            let utilidad = obj.map((col , ind) => {
    
              console.log('actividad:',col);
              console.log('ind',ind);
              console.log('indice del 1: ', actividades[index].indexOf(1));

              if (col == 1 && ind != actividadesW[index].indexOf(1)) {
                  return 2;
              }
                return col
            });
            return utilidad
        });

        console.log('matriz0',matriz0)
        setActividades(
          matriz0
       );
      
    };
  };

  const handleClick = (value,actividad,color) => () => {

    let matriz = actividades.map((obj, index) => {
      if (actividad == index) {

        let utilidad = actividadesCheck.map((col , ind) => {
          if (ind == color) {
              return value;
          }
          return 0;
        });

        return utilidad
      }
      return obj;
    });

    setActividades(
      matriz
   );

};

  const handleClose = () => {
    setClicked(false);

    window.location.href = window.location.href;
  };


  const handleClose2 = () => {
    setClicked2(false);
  };
  
  return (
    <>
     <div style = {{display: 'grid', width: '90%','justify-items': 'end'}}>
          <div style={{float:'right'}}>
              <Typography  variant="h4" fontWeight={"bold"} color={'gray'}>¿En qué región se produce?</Typography>
              <Typography  variant="h4" fontWeight={"bold"} color={'gray'}>Elegí 1 por producto</Typography>
          </div>
          {actividades.map((item, index) => {

            let i = index;
            return (
                <li style={{float: 'right', 'list-style-type': 'none'}}>
                    {i == 4 ? <img style={{zoom: '25%','margin-bottom': '-7%'}} src={iconRender(i)}/> :  <img style={{zoom: '25%' }} src={iconRender(i)}/>}
                 
                    {item.map((reg, index2) => {
                    return (
                        <button
                         onClick={handleClick(1,i,index2)}
                         style={{zoom:'350%','border-width': 'thin', backgroundColor: colores(index2), color: colores(index2)}}
                         key={index2}>
                          
                          {/*(actividadesCheck[i] == 1 && reg == 1) ? <img style={{zoom: '20%', margin: '-10% 0%'}} src={check}/> : (actividadesCheck[i] == 2 ? <img style={{zoom: '20%', margin: '-10% 0%'}} src={del}/> : <a>B.</a>)*/}

                          {/*(actividadesCheck[i] == 1 && reg == 1) ? <img style={{zoom: '20%', margin: '-10% 0%'}} src={check}/> : <a>B.</a>*/}
                          {( reg == 1) ? <img style={{zoom: '20%', margin: '-10% 0%'}} src={check}/> : (reg == 2) ? <img style={{zoom: '20%', margin: '-10% 0%'}} src={del}/> : <a>B.</a>}

                          

                        </button>
                      );
                    })}
                </li>
            );
          })}

          <Box mt={1} >
            <Button onClick={handleChequear} sx={{width: 200,height: 100}}variant="contained">chequear</Button>
          </Box>

          <Dialog open={clicked} onClose={handleClose}>
            <DialogActions sx={{
                  border: "20px solid orange",
                  'text-align': 'center',
                }} >
                   <Typography variant="h3" fontWeight={"bold"} color={'gray'}>👏🥳🎉 <br/> Felicidades Ganaste!<br/>👏🥳🎉</Typography>  
                <Button  sx={{display: 'contents'}} onClick={handleClose}>X</Button>
            </DialogActions> 
          </Dialog>

          <Dialog open={clicked2} onClose={handleClose2}>
            <DialogActions sx={{border: "20px solid orange"}}>
              <Typography variant="h2" fontWeight={"bold"} color={'gray'}>😀Estuviste cerca! ¡Casi casi... pss tenemos un premio para vos!😁🎁</Typography> 
              <Button sx={{display: 'contents'}} onClick={handleClose2}>X</Button>
            </DialogActions>
            
          </Dialog>


      </div>
   </>
  );
};

export default Accordion;
