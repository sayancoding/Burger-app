import React from 'react';
import classes from './toolbar.css'
import Logo from '../../Logo/logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggol from '../SideDrawer/DrawerToggol/DrawerToggol'

const toolbar = (props) =>{
    return(
        <header className={classes.Toolbar}>
            <DrawerToggol clicked={props.drawerToogle}/>
            <Logo/>
            <nav className={classes.DesktopOnly}>
                <NavigationItems/>
            </nav>
        </header>
    );
}

export default toolbar ;