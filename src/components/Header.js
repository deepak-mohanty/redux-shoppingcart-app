import React from 'react';

import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/"> Shopping cart </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <Link className="nav-item nav-link active" to="/">Shop</Link>
                        <Link className="nav-item nav-link" to="/cart">My Shop</Link>
                        <Link className="nav-item nav-link" to="/cart">
                            <i className="fa fa-shopping-cart" style={{fontSize: '24px', color:'white'}}></i>
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;