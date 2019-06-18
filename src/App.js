import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout/Checkout'
import Orders from './containers/Orders/Orders'
import { Route } from 'react-router-dom'

class App extends Component {

  render() {

    return (

      <div>
        <Layout>
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/Orders' component={Orders} />
        </Layout>
      </div>
    )
  }
}
export default App;
