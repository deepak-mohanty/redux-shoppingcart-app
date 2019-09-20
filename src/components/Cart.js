import React from 'react';
import { connect } from 'react-redux';
import { Link } from'react-router-dom';

class Cart extends React.Component{
    render(){
        let addedItem = this.props.items.length ? 
            (
                this.props.items.map(item => {
                    return (
                        <div className="card mb-3" style={{maxWidth: '100%', height: '200px'}}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={item.img} className="card-img" alt={item.title} style={{height: '200px'}} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.desc}</p>
                                    <div className="card-text d-flex">Price: <div className="font-weight-bold ml-2">$ {item.price}</div></div>
                                     <div className="card-text d-flex">Quantity: <div className="font-weight-bold ml-2">{item.quantity}</div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            ):
            (
                <p>Your cart is currently empty</p>
            )
        return(
            <div className="container">
            <div className="cart">
                <h5>You have ordered:</h5>
                <div className="d-flex flex-column">
                    {addedItem}
                </div>
            </div>  
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cartReducer.addedItems
    }
}

export default connect(mapStateToProps)(Cart);