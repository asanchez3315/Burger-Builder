import React, { Component } from 'react'
import CheckoutSummary from '../../../components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import CheckoutData from '../CheckoutData/CheckoutData'



class Checkout extends Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            bacon: 1,
            meat: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search)
        const ingredients = {}
        for (let param of query.entries()) {
            // [salad,1]
            ingredients[param[0]] = +param[1]
        }

        this.setState({ ingredients: ingredients })
    }

    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        // console.log('this works')
        this.props.history.replace('checkout/checkout-data');
    }



    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
                <Route path={this.props.match.path + '/checkout-data'}
                    render={() => (<CheckoutData ingredients={this.state.ingredients} />)} />
            </div>
        )
    }
}

export default Checkout