import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[], //since this state have to hold more than one item 
    reducers:{
        //actions
        addToWishlist:(state, action)=>{
            //functiom to add items to wishlist array state
            state.push(action.payload)
        },
        //function to remove items from wishlist array state
        removeFromWishlist : (state, action)=>{
            //it returns a new array with items satisfiying the below condition
           return state.filter(item=>item.id!==action.payload)
        }
    }
})

export const {addToWishlist, removeFromWishlist } = wishlistSlice.actions

export default wishlistSlice.reducer //it import at store

