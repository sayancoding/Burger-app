import React, { Component } from 'react'
import CheckOutSummary from '../../Components/checkOutSummary/checkOutSummary'

export class CheckOut extends Component {
    state={
        ingredients: {
            salad: 1,
            bacon: 1,
            meat: 0,
            cheese: 1,
        }
    }
    // componentDidMount() {
    //     console.log(this.props.ingredients);
    //     this.setState({

    //     })
    // }
    
    render() {
        return (
            <div>
                <CheckOutSummary ingredients={this.state.ingredients}/>
            </div>
        )
    }
}

export default CheckOut;
