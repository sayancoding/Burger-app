import React, { Component } from 'react'
import CheckOutSummary from '../../Components/checkOutSummary/checkOutSummary'
import ContactData from './contactData/contactData';
import { Route } from 'react-router-dom'

export class CheckOut extends Component {
    state={
        ingredients: {
            salad: 0,
            bacon: 0,
            meat: 0,
            cheese: 0,
        }
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for (let param of query.entries())
        {
            ingredients[param[0]] = +param[1]; 
            // console.log(param[1])
        }
        this.setState({ingredients:ingredients})
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
                <Route path={this.props.match.path + '/data'} component={ContactData} />
            </div>
        )
    }
}

export default CheckOut;
