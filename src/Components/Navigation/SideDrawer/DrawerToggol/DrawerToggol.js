import React from 'react';
import classes from './DrawerToggol.css'

const drawerToggol = (props) =>{
    return(
        <div onClick={props.clicked} className={classes.DrawerToggle}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default drawerToggol ;