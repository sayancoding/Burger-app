import React, {Component} from 'react';
import { Route ,Switch } from 'react-router-dom'

import Layout from './Components/Layout/layout';
import BurgerBuilder from './Container/BurgerBuilder/BurgerBuilder';
import CheckOut from './Container/CheckOut/CheckOut'

class App extends Component{
  render(){
    return(
      <div>
        <Layout>
          <Switch>
            <Route path='/checkout' exact component={CheckOut} />
            <Route path='/' exact component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    )
  }
} 

export default App;
