import React from 'react';

import { connect } from 'react-redux';
import { addToCart } from '../actions/index';

class Product extends React.Component{

    handleAddProducts = (id) => {
        return this.props.addToCart(id);
    }

    render(){

        let itemList = this.props.items.map( (item) => {
            return (
                <div className="col-4" key={item.id}>
                    <div className="card productCard" style={{width: '100%', marginBottom: '30px'}} >
                        <img src={item.img} className="card-img-top" alt={'Shoe Type : ' + item.title} style={{height: '260px', width: '100%'}} />
                        <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.desc}</p>
                        <div className="card-text d-flex">Price: <div className="font-weight-bold ml-2">$ {item.price}</div></div>
                        <a href="#" className="btn rounded-circle addProductsBtn" onClick={() => {this.handleAddProducts(item.id)}}>
                            <i className="fa fa-plus" aria-hidden="true"></i>
                        </a>
                        </div>
                    </div>
                </div>
            )
        })

        return(
            <div className="container">
                <div className="row">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownprops) => {
    return{
        items: state.cartReducer.items
    }
}

export default connect(mapStateToProps, {addToCart})(Product);