import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './CheckoutData.module.css'
// import axios from '../../../axiosOrders'
import Input from '../../../components/UI/Forms/Input/Input'


class CheckoutData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipcode: ''
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
//  this.setState({ loading: true })
//         const order = {
//             ingredients: this.state.ingredients,
//             price: this.state.totalPrice,
//             Customer: {
//                 Name: 'Alexander Sanchez',
//                 address: {
//                     street: 'testStreet12',
//                     city: 'Orlando',
//                     Zipcode: '23456',
//                     country: 'USA'
//                 },

//                 email: 'test@test.com',
//                 delivery: 'fastest'
//             }
//         }
//         // alert('you continued!')
//         axios.post('/orders.json', order)
//             .then(response => {
//                 this.setState({ loading: false, purchasing: false })
//             }).catch(error => {
//                 this.setState({ loading: false, purchasing: false })
//             })
    }

    render () {
        return(
            <div className={classes.CheckoutData}>
                <h4>Enter your contact information</h4>
                
                <form>
                    <Input inputtype='input' type='text'name='name' placeholder='Your Name' />
                    <Input inputtype='input' type='email'name='email' placeholder='Your Email' />
                    <Input inputtype='input' type='text'name='street' placeholder='Street' />
                    <Input inputtype='input' type='text'name='zipcode' placeholder='Zipcode' />
                    <Button clicked={this.orderHandler} btnType = 'Success'>Order</Button>
                </form>
            </div>
        )
    }
}

export default CheckoutData;