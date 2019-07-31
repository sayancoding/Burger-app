import React, { Component } from 'react';
import Burger from '../../Components/Burger/Burger';
import BurgerControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary'
import axios from '../../axios-server'
import Spinner from '../../Components/UI/Spinner/Spinner'

import Aux from '../../hoc/wrapped';

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
        purchasing:false,

        loading : false,
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

    purchaseHandeler=()=>{
        this.setState({purchasing:true})
    }

    purchaseContinue =()=>{
        const data = {
            ingredients : this.state.ingredients,
            totalPrice : this.state.totalPrice,
            customer : {
                name : "sayan maity",
                address:{
                    dist:'west bengal',
                    zip:'721212',
                    country : "india",
                },
                email:"sayanmaity007@gmail.com"
            },
            deliveryMethod:"fast"
        }
        axios.post('/order.json',data)
            .then(res=>{console.log(res);})
            .catch(err=>{console.log(err);})
        // alert('You in continue but site under developing.. 😐')
    }

    purchaseCancelHandeler=()=>{
        this.setState({purchasing:false})
    }
    
    render(){
        const disableInfo = {...this.state.ingredients}
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;
        }
        
        let Display = <OrderSummary 
        ingredients={this.state.ingredients} 
        cancel={this.purchaseCancelHandeler} 
        continue={this.purchaseContinue}
        totalprice={this.state.totalPrice}
        />

        if(this.state.loading){
            Display = <Spinner/>
        }
        

        return(
            <Aux>
                <Modal show = {this.state.purchasing} click={this.purchaseCancelHandeler}>
                    {Display}
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BurgerControls 
                    ingredientAdd={this.addIngredientHandeler}
                    ingredientRemove={this.removeIngredientHandeler}
                    disabled = {disableInfo}
                    price = {this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    purchasing={this.purchaseHandeler}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;
