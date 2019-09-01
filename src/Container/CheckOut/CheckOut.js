import React, { Component } from 'react'
import CheckOutSummary from '../../Components/checkOutSummary/checkOutSummary'
import ContactData from './contactData/contactData';
import { Route } from 'react-router-dom'

export class CheckOut extends Component {
    state={
        ingredients: null,
        totalPrice:0,
    }
    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let prices = 0;
        for (let param of query.entries())
        {
            if (param[0] ==='price'){
                prices = param[1];
            }
            ingredients[param[0]] = +param[1]; 
            // console.log(param[1])
        }
        this.setState({ingredients:ingredients,totalPrice:prices})
    }

    checkoutCancel=()=>{
        this.props.history.goBack();
    }
    checkoutContinue=()=>{
        // this.props.history.replace('checkout/contact-data');
        this.props.history.replace("/checkout/data")
    }
    
    render() {
        return (
            <div>
                <CheckOutSummary 
                ingredients={this.state.ingredients}
                checkoutCancel={this.checkoutCancel}
                checkoutContinue={this.checkoutContinue}/>
                <Route path={this.props.match.path + '/data'} 
                render={(props)=>(
                <ContactData 
                    ingredients={this.state.ingredients}
                    totalPrice = {this.state.totalPrice}
                    {...props}
                    />)} />
            </div>
        )
    }
}

export default CheckOut;
