import React from 'react';
import { connect } from 'react-redux';
import { removeItem, addQuantity, substractQuantity } from '../actions/index';

class Cart extends React.Component{

    handleAddQuantity = (id) => {
        return this.props.addQuantity(id)
    }

    handleSubstractQuantity = (id) => {
        return this.props.substractQuantity(id)
    }

    handleRemoveItem = (id) => {
        return this.props.removeItem(id)
    }

    render(){
        let totalCartValue = this.props.total;
        let addedItem = this.props.items.length ? 
            (
                this.props.items.map(item => {
                    return (
                        <div className="card mb-3" style={{maxWidth: '100%', height: '200px'}} key={item.id}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={item.img} className="card-img" alt={item.title} style={{height: '200px'}} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between">
                                            <h5 className="card-title">{item.title}</h5>
                                            <i className="fa fa-trash-o" aria-hidden="true" style={{fontSize: '24px'}} onClick={() => this.handleRemoveItem(item.id)}></i>
                                        </div>
                                        <p className="card-text">{item.desc}</p>
                                        <div className="d-flex justify-content-between">
                                            <div>                                                
                                                <div className="card-text d-flex">Price: <div className="font-weight-bold ml-2">$ {item.price}</div></div>
                                                <div className="card-text d-flex">Quantity: <div className="font-weight-bold ml-2">{item.quantity}</div></div>
                                            </div>
                                            <div className="d-flex align-items-end">
                                                <i className="fa fa-arrow-circle-o-up mr-2" aria-hidden="true" style={{fontSize: '24px', color: '#34c134' }} onClick={() => this.handleAddQuantity(item.id)}></i>
                                                <i className="fa fa-arrow-circle-o-down" aria-hidden="true" style={{fontSize: '24px', color: 'red'}} onClick={() => this.handleSubstractQuantity(item.id)}></i>
                                            </div>
                                        </div>
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
            <div className="container mt-120">
            <div className="cart">
                <div className="d-flex justify-content-between">
                    <h5>Your Cart Items List</h5>
                    {totalCartValue !== 0 ?
                        (
                        <div>
                            <span className="font-weight-normal">Total Price :</span>
                            <span className="font-weight-bold ml-2">$ {totalCartValue}</span>
                        </div>
                        )
                        : " "
                    }
                    
                </div>
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
        items: state.cartReducer.addedItems,
        total: state.cartReducer.total
    }
}

export default connect(mapStateToProps, { addQuantity, substractQuantity, removeItem })(Cart);