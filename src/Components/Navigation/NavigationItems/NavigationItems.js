import React from 'react';
import classes from './NavigationItems.css'
// import {Link } from 'react-router-dom'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) =>{
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem
            link="/" active={true} 
            >Burger Builder</NavigationItem>
            {/* <Link to="/cheackout"> */}
                <NavigationItem
                    link="./checkout" active={false}
                >Check Out</NavigationItem>
            {/* </Link> */}
        
        </ul>
    );
}

export default NavigationItems ;