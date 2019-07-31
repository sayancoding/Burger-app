import React from 'react';
import classes from './Spinner.css'

const Spinner = ()=>{
    return (
    <div className={classes.Spinner}>
        <div className={classes.Loader}>
            <span className={classes.Text}>Loading..</span>
        </div>
    </div>)
}
export default Spinner;