import React from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop'
import Auxillary from '../../../hoc/Auxillary'
const modal = (props) => (

    <Auxillary>
        <Backdrop show={props.show}  clicked={props.modalClosed}/>

        <div className={classes.Modal}
            style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' }}>
            {props.children}
        </div>

    </Auxillary>
)

export default modal;