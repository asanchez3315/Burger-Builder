import React, { Component } from 'react';
import Auxillary from '../../hoc/Auxillary';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/Sidedrawer/Sidedrawer';


class Layout extends Component {
    state={
        showSideDrawer: false
        
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }

    toggleClickHandler = () => {
        this.setState((prevState)=>{
            return {showSideDrawer:!prevState.showSideDrawer}
        })
    }
       
    render() {
        return (
            <Auxillary>

                <Toolbar  drawerToggleClick={this.toggleClickHandler}  />
                <SideDrawer Open={this.state.showSideDrawer} Closed={this.sideDrawerClosedHandler}  />
                <main className={classes.Content}>
                    {this.props.children}
                </main>

            </Auxillary>

        )
    }
}

export default Layout