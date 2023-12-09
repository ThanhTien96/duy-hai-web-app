import { IPaymentCardInfo } from "@/@types/payment";
import { apiPaths } from "@/constants";
import { http } from "@/http";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export interface IPaymentSlice {
    paymentMethod: IPaymentCardInfo[];
}

const initialState: IPaymentSlice = {
    paymentMethod: [],
};

export const fetchPaymentInfoThunk = createAsyncThunk(
    "fetchPaymentInfo",
    async (_, {signal}) => {
        const res = await http({
            url: apiPaths.paymentInfo, 
            method: "GET",
            signal
        });
        return res.data.data;
    }
)

const paymentSlice = createSlice({
    name: "paymentSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPaymentInfoThunk.fulfilled, (state, {payload}) => {
            state.paymentMethod = payload;
        })
    }
});

export default paymentSlice.reducer;




