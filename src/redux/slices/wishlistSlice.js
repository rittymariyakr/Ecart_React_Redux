import { createSlice } from "@reduxjs/toolkit";



const wishlistSlice = createSlice({
    name:'wishlist',
    initialState:[], //since this state have to hold more than one item (each item are objects)
    reducers:{
        //actions
         //functiom to add items to wishlist array state
         //when we click on a particular product's wishlist button, the product will added to wishlist
        addToWishlist:(state, action)=>{ //addToWishlist function is calling at Home.jsx(dispatch)
            state.push(action.payload) //here payload of action has item that pass from home.jsx's wishlist button click //tjis item is adding to the state using push. because state (initialState) is an array
        },
        
        //function to remove items from wishlist array state
        removeFromWishlist : (state, action)=>{
            //it returns a new array with items satisfiying the below condition
           return state.filter(item=>item.id!==action.payload) //action.payload has the id of item we want to delete. when we filter, we get new array of items except the id that in ithe action.payload
        }
    }
})
//exporting action
export const {addToWishlist, removeFromWishlist } = wishlistSlice.actions 

export default wishlistSlice.reducer //it import at store inside reducer Keey

