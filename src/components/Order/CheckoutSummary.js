import React from 'react';
import Button from '../UI/Button/Button'
import Burger from '../Burger/Burger'
import classes from './CheckoutSummary.module.css'

const checkoutSummary = (props) => {

    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope you enjoy your burger!</h1>
            <div style={{ width: '100%',  }}>
                    <Burger ingredients={props.ingredients} />
            </div>
            <Button  clicked={props.checkoutCancelled} btnType='Danger'>Cancel</Button>
            <Button clicked={props.checkoutContinue} btnType='Success'>Continue</Button>

        </div>

    )

}

export default checkoutSummary;