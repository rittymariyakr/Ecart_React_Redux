import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: [],//give empty array as initial state, becouse more tha one item is going to store
    reducers: {
        //actions
        //function to add items to cart array
        addToCart: (state, action) => {
            state.push(action.payload)
        },

        //fuction to remove item from cart 
        removeFromCart: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },

        //function to empty the cart when the chwchout
        emptyCart: (state) => {
            return state = []
        }

    }
})
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer//import at store