import React from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer';


const layout = (props) => (

    <Auxillary>

            <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>

    </Auxillary>


)



export default layout