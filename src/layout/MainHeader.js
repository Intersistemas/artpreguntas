import React from 'react';
//import classes from './MainHeader.module.css';
//import logo from '../../media/Logo.svg';
import style from './MainHeader.module.css';
import logo1 from '../media/logo1.png';
import {Link} from "react-router-dom";
import { Button } from '@mui/material'

const MainHeader = (props) => {
  return (
    <div>
      <header className='header'> 
        <div className={style.header}>
            <img className={style.image} src={logo1} alt=""/>
            <div style={{'float': 'right'}}>
                <Button>  <Link className="nav-color" to="/">Trivia</Link></Button>
                <Button>  <Link className="nav-color" to="/Mapa">Mapa</Link></Button>
            </div>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
