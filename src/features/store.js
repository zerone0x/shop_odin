import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import shopReducer from "./shopSlice";


export default configureStore({
    reducer:{
        cart: cartReducer,
        shop: shopReducer
    }
})