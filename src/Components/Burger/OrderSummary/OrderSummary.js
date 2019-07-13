import React from 'react';
import Aux from '../../../hoc/wrapped';

const OrderSummary = (props) =>{
    const ingredients  = Object.keys(props.ingredients)
        .map(igkeys=>{
            return (
            <li><span style={{textTransform:'capitalize'}}>{igkeys}</span> : {props.ingredients[igkeys]}</li>
            )
        })

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger with your favorite ingredients :</p>
            <ul>
                {ingredients}
            </ul>
            <h4><span>₹</span> : {props.totalprice}</h4>
            <p>Continue to check-out?</p>
        </Aux>

    );
}

export default OrderSummary ;