
import { combineReducers } from "@reduxjs/toolkit";
import product from './productSlice';

interface AsyncReducer {
    [key: string]: any;
}

const rootReducer = {
    product
}

const createReducer = (asyncReducer?: AsyncReducer) =>  combineReducers({
    ...asyncReducer,
    ...rootReducer,
});

export default createReducer;




