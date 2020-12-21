import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Header';
import Product from './Products';
import Cart from './Cart';
import NotFound from './NotFound';

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Product} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/cart/order" component={Cart} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;