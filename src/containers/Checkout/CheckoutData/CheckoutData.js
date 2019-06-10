import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button'
import classes from './CheckoutData.module.css'


class CheckoutData extends Component {

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            zipcode: ''
        }
    }

    render () {
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                <form>
                    <input className={classes.Input} type='text'name='name' placeholder='Your Name' />
                    <input className={classes.Input} type='email'name='email' placeholder='Your Email' />
                    <input className={classes.Input} type='text'name='street' placeholder='Street' />
                    <input className={classes.Input} type='text'name='zipcode' placeholder='Zipcode' />
                    <Button btnType = 'Success'>Order</Button>
                </form>
            </div>
        )
    }
}

export default CheckoutData;