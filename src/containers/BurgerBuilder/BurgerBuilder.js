import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/UI/OrderSummary/OrderSummary'
import axios from '../../axiosOrders'
import Spinner from '../../components/UI/Spinner/Spinner'
import ErrorHandler from '../../hoc/ErrorHandler/ErrorHandler'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.5,
    bacon: 1.0,
    meat: 1.3
}


class BurgerBuilder extends Component {

        

    state = {
        // ingredients: null,
        ingredients :  {
            salad: 0,
            bacon:0,
            meat:0,
            cheese:0
            },
    
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,

    }


    // componentDidMount() {
    //     axios.get('https://react-burger-e71ce.firebaseio.com/ingredients.json')
    //         .then(response => {
    //             this.setState({ ingredients: response.data })
    //         })
            // .catch(error =>{
    //             this.setState({error:true})
    //         });
    // }

    updatedPurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el
            }, 0)
        this.setState({ purchasable: sum > 0 })
    }

   addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice + priceAddition
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatedPurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice - priceDeduction
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
        this.updatedPurchaseState(updatedIngredients)

    }

    purchasingHandler = () => {
        this.setState({ purchasing: true })
    }

    purchasingCancelHandler = () => {
        this.setState({ purchasing: false })
    }
    purchasingContinuelHandler = () => {
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            Customer: {
                Name: 'Alexander Sanchez',
                address: {
                    street: 'testStreet12',
                    city: 'Orlando',
                    Zipcode: '23456',
                    country: 'USA'
                },

                email: 'test@test.com',
                delivery: 'fastest'
            }
        }
        // alert('you continued!')
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, purchasing: false })
            }).catch(error => {
                this.setState({ loading: false, purchasing: false })
            })
    }

    render() {

        const disabledInfo = {

            ...this.state.ingredients
        }

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }

        let orderSummary = null

        let burger = this.state.error ? <p>Ingredients can't be loaded...</p>: <Spinner />
        if (this.state.ingredients) {
            burger = (
                <Auxillary>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        purchasing={this.purchasingHandler}
                        price={this.state.totalPrice}
                    />;

                </Auxillary>
            );

            orderSummary = <OrderSummary 
            ingredients={this.state.ingredients}
            purchaseCancelled={this.purchasingCancelHandler}
            purchaseContinue={this.purchasingContinuelHandler}
            price={this.state.totalPrice} />

        }

        if (this.state.loading) {

            orderSummary = <Spinner />;
        }


        return (

            <Auxillary>
                <Modal show={this.state.purchasing} modalClosed={this.purchasingCancelHandler} >
                    {orderSummary}
                </Modal>
                {burger}
            </Auxillary>

        )
    }

}



export default ErrorHandler(BurgerBuilder, axios);