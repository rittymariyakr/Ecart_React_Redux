import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slices/wishlistSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice
    }
})

//components needs store // give this store inside index.js inside Provider tag
export default store