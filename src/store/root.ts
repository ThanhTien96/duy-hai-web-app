
import { combineReducers } from "@reduxjs/toolkit";
import product from './productSlice';
import cart from './cart';
import app from './app';
import location from './location';
import payment from './payment';

interface AsyncReducer {
    [key: string]: any;
}

const rootReducer = {
    product,
    cart,
    app,
    location,
    payment,
}

const createReducer = (asyncReducer?: AsyncReducer) =>  combineReducers({
    ...asyncReducer,
    ...rootReducer,
});

export default createReducer;




