import React from 'react';
import Auxillary from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button'


const orderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey} ><span style={{ textTransform: 'capitalize' }} >{igKey}: {props.ingredients[igKey]}</span></li>
        })


    return (
        <Auxillary>

            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>

            <Button clicked={props.purchaseCancelled} btnType='Danger'>Cancel</Button>
            <Button clicked={props.purchaseContinue} btnType='Success'>Continue</Button>

        </Auxillary>
    )

}

export default orderSummary