import React from 'react';

import { connect } from 'react-redux';


class Product extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        let itemList = this.props.items.map( (item) => {
            return (
                <div className="col-4">
                    <div className="card productCard" style={{width: '100%', marginBottom: '30px'}} key={item.id}>
                        <img src={item.img} className="card-img-top" alt={'Shoe Type : ' + item.title} style={{height: '260px', width: '100%'}} />
                        <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.desc}</p>
                        <a href="#" className="btn btn-primary rounded-circle addProductsBtn"><i class="fa fa-plus" aria-hidden="true"></i></a>
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
    console.log(state.cartReducer.items)
    return{
        items: state.cartReducer.items
    }
}

export default connect(mapStateToProps)(Product);