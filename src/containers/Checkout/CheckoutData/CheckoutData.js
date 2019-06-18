import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './CheckoutData.module.css'
// import axios from '../../../axiosOrders'
import Input from '../../../components/UI/Forms/Input/Input'


class CheckoutData extends Component {

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },


            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ' Street '
                },
                value: ''
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'City'
                },
                value: ''
            },
            Zipcode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zipcode'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email Address'
                },
                value: ''
            },
            delivery: {
                elementType: 'select',
                elementConfig: {
                    options: [{ value: 'fastest', displayValue: 'Fastest' },
                    { value: 'cheapest', displayValue: 'Cheapest' }]
                },
                value: ''
            }
        }

    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
        //  this.setState({ loading: true })
        //         const order = {
        //             ingredients: this.state.ingredients,
        //             price: this.state.totalPrice,
        //            
        //         }
        //         // alert('you continued!')
        //         axios.post('/orders.json', order)
        //             .then(response => {
        //                 this.setState({ loading: false, purchasing: false })
        //             }).catch(error => {
        //                 this.setState({ loading: false, purchasing: false })
        //             })
    }

    render() {
        return (
            <div className={classes.CheckoutData}>
                <h4>Enter your contact information</h4>

                <form>
                    <Input elementType='...' elementConfig='...' value='...' />
                    <Input inputtype='input' type='email' name='email' placeholder='Your Email' />
                    <Input inputtype='input' type='text' name='street' placeholder='Street' />
                    <Input inputtype='input' type='text' name='zipcode' placeholder='Zipcode' />
                    <Button clicked={this.orderHandler} btnType='Success'>Order</Button>
                </form>
            </div>
        )
    }
}

export default CheckoutData;