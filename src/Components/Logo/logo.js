import React from 'react';
import Logo from '../../assets/Images/burger-logo.png'
import classes from './logo.css'

const logo = (props) =>{
    return(
        <div className={classes.Logo}>
            <img src={Logo} alt="Logo"/>
        </div>
    );
}

export default logo ;