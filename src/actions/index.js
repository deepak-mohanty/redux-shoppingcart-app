
export const addToCart = (id) => {
    return {
        type: 'ADD_TO_CART',
        payload: id,
    }
}

export const removeItem = (id) => {
    return {
        type: "REMOVE_ITEM",
        payload: id,
    }
}

export const addQuantity  = (id) => {
    return {
        type: 'ADD_QUANTITY',
        payload: id
    }
}


export const substractQuantity = (id) => {
    return{
        type: 'SUBSTRACT_QUANTITY',
        payload: id
    }
}