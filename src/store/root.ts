
import { combineReducers } from "@reduxjs/toolkit";
import product from './productSlice';
import cart from './cart';
import app from './app';

interface AsyncReducer {
    [key: string]: any;
}

const rootReducer = {
    product,
    cart,
    app,
}

const createReducer = (asyncReducer?: AsyncReducer) =>  combineReducers({
    ...asyncReducer,
    ...rootReducer,
});

export default createReducer;




