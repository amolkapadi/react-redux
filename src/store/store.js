import { configureStore } from "@reduxjs/toolkit";
import cardReducer from './cardSlice';
import productReducer from './productSlice'


const store =configureStore({
    reducer:{
        card:cardReducer,
        product:productReducer,
    }
})
export default store;