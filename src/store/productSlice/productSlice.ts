import { createSlice } from "@reduxjs/toolkit";



interface IInitProductSlice {
    loading: boolean;
    productList?: any;
}

const initialState: IInitProductSlice = {
    loading: false,
    productList: [],
};


const productSlice = createSlice({
    name: "productSlice",
    initialState,
    reducers: {}
});

export const {} = productSlice.actions;
export default productSlice.reducer;