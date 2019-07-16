import React from 'react';
import classes from './toolbar.css'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/NavigationItems'

const toolbar = (props) =>{
    return(
        <header className={classes.Toolbar}>
            <div>Menu</div>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </header>
    );
}

export default toolbar ;