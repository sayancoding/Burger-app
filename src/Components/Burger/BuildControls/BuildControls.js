import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls=[
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Meat',type:'meat'},
    {label:'Cheese',type:'cheese'},
]

const buildControls = (props) =>{
    return(
        <div className={classes.BuildControls}>
            <p>Current Price (₹) : <strong>{props.price}</strong></p>
            {controls.map(ctrl=>{
               return (
               <BuildControl 
               key={ctrl.label} 
               added={()=>props.ingredientAdd(ctrl.type)} 
               removed={()=>props.ingredientRemove(ctrl.type)} 
               label={ctrl.label}
               disabled={props.disabled[ctrl.type]}
               />)
            })}

            <button className={classes.OrderButton} disabled={!props.purchasable}>ORDER NOW</button>
        </div>
    );
}

export default buildControls ;