import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './Header';
import Product from './Products';
import Cart from './Cart';

class App extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Navbar />
                <div>
                <Route path="/" exact component={Product} />
                <Route path="/cart" component={Cart} />
                <Route path="/cart/order" component={Cart} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;