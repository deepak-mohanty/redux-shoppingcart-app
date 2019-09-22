
import Item1 from '../assets/images/item1.jpg'
import Item2 from '../assets/images/item2.jpg'
import Item3 from '../assets/images/item3.jpg'
import Item4 from '../assets/images/item4.jpg'
import Item5 from '../assets/images/item5.jpg'
import Item6 from '../assets/images/item6.jpg'
import { addToCart } from '../actions/index';

const initialState = {
    items: [
        {id:1,title:'Winter body', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:110,img:Item1},
        {id:2,title:'Adidas', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80,img: Item2},
        {id:3,title:'Vans', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:120,img: Item3},
        {id:4,title:'White', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:260,img:Item4},
        {id:5,title:'Cropped-sho', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160,img: Item5},
        {id:6,title:'Blues', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90,img: Item6}
    ],
    addedItems: [],
    total: 0
}

const cartReducer = (state = initialState, action) => {
    if(action.type === 'ADD_TO_CART'){
        let addedItem = state.items.find((item) => item.id === action.payload);
        // console.log(addedItem)
        //check if the item already existed in the added Items
        let existed_item = state.addedItems.find((item) => action.payload === item.id)
        // console.log(action.payload, state);
        if(existed_item){
            addedItem.quantity += 1;

            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }
        }
    }
    else{
        return state;
    }
}

export default cartReducer;