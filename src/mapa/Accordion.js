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
  background: #f8a700;
`;

const Container = styled.div`
  position: absolute;
  top: 30%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
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
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  p {
    font-size: 2rem;
  }
`;

const Accordion = (props) => {
  const [clicked, setClicked] = useState(false);

  const prov = props.Prov;
  const actividades = props.Actividades;

  console.log('props-accor1'+props.Prov);
  console.log('props-accor2',props.Actividades)

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
                  <Dropdown>
                   Trabajadores Cubiertos:  {item.antNom}<br/>
                   Siniestros Registrados: {item.siniestros}<br/>
                  
                   Indice de Siniestralidad (por 1.000 trabajadores): {item.indSiniestralidad}<br/>
                   Indice de invidencia de Fallecidos (por 1.000.000 trabajadores): {item.fallecimientos}<br/>
                    {/*item.indMortalidad*/}<br/>
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
