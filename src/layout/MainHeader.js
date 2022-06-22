import React from 'react';
//import classes from './MainHeader.module.css';
//import logo from '../../media/Logo.svg';
import style from './MainHeader.module.css';
import logo1 from '../media/logo1.png';

const MainHeader = (props) => {
  return (
    <div>
      <header className='header'> 
        <div className={style.header}>
            <img className={style.image} src={logo1} alt=""/>
        </div>
      </header>
    </div>
  );
};

export default MainHeader;
