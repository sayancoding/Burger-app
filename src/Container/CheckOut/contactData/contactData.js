import React, { Component } from 'react';
import axios from '../.../../../../axios-server'

import classes from './contactData.css'
import Button from '../../../Components/UI/Button/Button'
import Spinner from '../../../Components/UI/Spinner/Spinner'

class contactData extends Component {
    state = {
        name:'',
        email:'',
        address:{
            street:'',
            zip:'',
        },
        loading:false,
        totalPrice:null,
    }

    orderHandle=(event)=>{
        event.preventDefault();
        console.log(this.props.ingredients,this.props.totalPrice);
        
        this.setState({loading:true})
        const data = {
            // ingredients : this.props.ingredients,
            // totalPrice : this.props.totalPrice,
            // customer : {
            //     name : "sayan maity",
            //     address:{
            //         dist:'west bengal',
            //         zip:'721212',
            //         country : "india",
            //     },
            //     email:"sayanmaity007@gmail.com"
            // },
            // deliveryMethod:"fast"
        }
        axios.post('/order.json',data)
            .then(res=>{
                this.setState({loading:false})
                this.props.history.replace('/')
            })
            .catch(err=>{
                this.setState({loading:false})
                console.log(this.props.history)
            })
        alert('You in continue but site under developing.. 😐')
    }

    render() {
        let form = (
        <form action="">
            <input type="text" name="name" placeholder="Name.." />
            <input type="text" name="email" placeholder="Email.." />
            <input type="text" name="street" placeholder="Street.." />
            <input type="text" name="zip" placeholder="Zip Code.." />
        </form>);
        if(this.state.loading){
            form = <Spinner/>
        }
        return (
            <div className={classes.ContactData}>
                <h3>Your Details write here</h3>

                {form}
                <Button btnType="Success" clicked={this.orderHandle}>Get Done</Button>
            </div>
        )
    }
}

export default contactData;
