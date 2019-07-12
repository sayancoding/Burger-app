import React from 'react';

import Aux from '../../hoc/wrapped';
import classes from './layout.css';

const layout = (props) =>{
    return(
    <Aux>
        <div>Sidedrawer toolbar backdrop</div>
        <main className={classes.content}>
            {props.children}
        </main>
    </Aux>
    ) 
}

export default layout;