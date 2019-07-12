import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/Burger/BuildControls/BuildControls'

import Aux from '../../hoc/Aux';

const ingredient_price={
    salad:11,
    bacon:14,
    cheese:13,
    meat:18,
}

class BurgerBuilder extends Component{

    state = {
        ingredients:{
            salad:0,
            bacon:0,
            meat:0,
            cheese:0,
        },
        totalPrice : 15,
        purchasable:false,
    }

    purchasableHandeler=(price)=>{
        if(price > 15)
        {
            this.setState({purchasable:true})
        }
        else{
            this.setState({purchasable:false})
        }
    }
    
    addIngredientHandeler = (type) =>{
        const oldCount = this.state.ingredients[type]
        const updateCount = oldCount+1
        const updatedIngredients={
            ...this.state.ingredients
        }
        updatedIngredients[type] = updateCount
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice+ingredient_price[type]

        this.setState({
            ingredients:updatedIngredients,
            totalPrice:newPrice
        })

        this.purchasableHandeler(newPrice);
    }

    removeIngredientHandeler = (type) =>{
        const oldCount = this.state.ingredients[type]
        if(oldCount>0){
            const updateCount = oldCount - 1
            const updatedIngredients={
                ...this.state.ingredients
            }
            updatedIngredients[type] = updateCount
            const oldPrice = this.state.totalPrice
            const newPrice = oldPrice - ingredient_price[type]
    
            this.setState({
                ingredients:updatedIngredients,
                totalPrice:newPrice
            })
            this.purchasableHandeler(newPrice);
        }
        
    }
    
    render(){
        const disableInfo = {...this.state.ingredients}
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }

        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls 
                    ingredientAdd={this.addIngredientHandeler}
                    ingredientRemove={this.removeIngredientHandeler}
                    disabled = {disableInfo}
                    price = {this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;
