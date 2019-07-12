import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css'

const burger = (props) =>{

    let trnsfomedIngredients = Object.keys(props.ingredients)
    .map(igkey=>{
        return [...Array(props.ingredients[igkey])].map((_,i)=>{
            return <BurgerIngredient key={igkey+i} type={igkey}/>
        })
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[])

    if(trnsfomedIngredients.length === 0)
    {
        trnsfomedIngredients = <p>Please adding ingredient</p>
    }

    console.log(trnsfomedIngredients);

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {trnsfomedIngredients}
            <BurgerIngredient type="bread-bottom" />

        </div>
    );
}

export default burger ;