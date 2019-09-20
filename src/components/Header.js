import React from 'react';

import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <div className="row w-100">
                        <NavLink className="navbar-brand" to="/"> Shopping cart </NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto">
                                <NavLink exact={true} className="nav-item nav-link" to="/">Shop</NavLink>
                                <NavLink exact={true} className="nav-item nav-link" to="/cart">My Shop</NavLink>
                                <NavLink exact={true} className="nav-item nav-link" to="/cart">
                                    <i className="fa fa-shopping-cart" style={{fontSize: '24px', color:'white'}}></i>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;