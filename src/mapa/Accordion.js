import React, { useState } from 'react';
import { Data } from './Data';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';

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
  width: 100%;
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
  font-size: larger;
  


  p {
    font-size: 2rem;
  }
`;

const Accordion = (props) => {
  const [clicked, setClicked] = useState(false);
  const actividades = props.Actividades;

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
        <Container>
          {actividades.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.actividad}</h1>
                  <span>{clicked === index ? <FiMinus style={{ color: 'orange'}} /> : <FiPlus style={{ color: 'orange'}} />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown key={index}>
                   <div style={{padding: '0% 10%'}}>
                   Trabajadores Cubiertos:  <a style={{fontWeight: 'bolder'}}>{item.antNom}</a><br/>
                   Siniestros Registrados: <a style={{fontWeight: 'bolder'}}>{item.siniestros}</a><br/>
                  
                   <a style={{color: 'orange'}}> Indice de Siniestralidad (por 1.000 trabajadores): <a style={{fontWeight: 'bolder'}}> {item.indSiniestralidad}</a><br/> </a>
                   <a style={{color: 'orange'}}> Indice de invidencia de Fallecidos (por 1.000.000 trabajadores): <a style={{fontWeight: 'bolder'}}>{item.fallecimientos}</a><br/> </a>
                    {/*item.indMortalidad*/}<br/>
                   </div>  
                  <div style={{ color: 'white', backgroundColor: 'orange', display: 'flow-root'}}>
                    <div style={{display: 'flow-root', padding: '0% 10%'}}>
                      <a style={{ fontSize: 'small'}}> TODAS LAS UNIDADES PRODUCTIVAS TOTAL PAÍS</a><br/>

                      <a>índice de siniestralidad (por 1000 trabajadores): <a style={{fontWeight: 'bolder'}}>40,0</a></a><br/>

                      <a>índice de incidencia de fallecidos (por 1000000 trabajadores): <a style={{fontWeight: 'bolder'}}>56,5</a></a><br/>

                      <a style={{ fontSize: 'small', float:'right'}}>Datos del año: 2020</a>
                    </div>  
                  </div>   
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion;
