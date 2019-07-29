import React from 'react';
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) =>{
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem
            link="./" active={true} 
            >Burger Builder</NavigationItem>
            <NavigationItem
            link="./" active={false}
            >Check Out</NavigationItem>
            
        </ul>
    );
}

export default NavigationItems ;