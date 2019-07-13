import React from 'react';
import Aux from '../../../hoc/wrapped'
import BackDrop from '../Backdrop/Backdrop'
import classes from './Modal.css'

const Modal = (props) =>{
    return(
        <Aux>
        <BackDrop show={props.show} click={props.click} />    
        <div className={classes.Modal}
            style={{
                transform : props.show ? 'translateY(0)':'translateY(-100vh)'
            }}
        >
            {props.children}
        </div>
        </Aux>
        
    );
}

export default Modal ;