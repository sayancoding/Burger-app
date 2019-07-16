import React from 'react';

import Aux from '../../hoc/wrapped';
import classes from './layout.css';
import Toolbar from '../Navigation/Toolbar/toolbar'

const layout = (props) =>{
    return(
    <Aux>
        {/* <div>Sidedrawer toolbar backdrop</div> */}
        <Toolbar/>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
    ) 
}

export default layout;