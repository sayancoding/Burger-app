import React, { Component } from 'react';

import classes from './contactData.css'
import Button from '../../../Components/UI/Button/Button'

class contactData extends Component {
    state = {
        name:'',
        email:'',
        address:{
            street:'',
            zip:'',
        }
    }

    render() {
        return (
            <div className={classes.ContactData}>
                <h3>Your Details write here</h3>
                <form action="">
                    <input type="text" name ="name" placeholder="Name.."/>
                    <input type="text" name ="email" placeholder="Email.."/>
                    <input type="text" name ="street" placeholder="Street.."/>
                    <input type="text" name ="zip" placeholder="Zip Code.."/>
                </form>
                
                <Button btnType="Success">Get Done</Button>
            </div>
        )
    }
}

export default contactData;
