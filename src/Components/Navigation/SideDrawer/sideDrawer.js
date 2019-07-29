import React from 'react';
import Logo from '../../Logo/logo'
import Aux from '../../../hoc/wrapped'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './sideDrawer.css'
import BackDrop from '../../UI/Backdrop/Backdrop'

const sideDrawer = (props) =>{
    let attachClass = [classes.SideDrawer,classes.Close]
    if(props.show){
        attachClass = [classes.SideDrawer,classes.Open]
    }
    return(
        <Aux>
            <BackDrop show={props.show} click={props.cancel}/>
            <div className={attachClass.join(' ')}>
            <Logo/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Aux>
        
    );
}

export default sideDrawer ;