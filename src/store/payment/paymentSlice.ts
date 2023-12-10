import { IPaid } from "@/@types/order";
import { IPaymentCardInfo } from "@/@types/payment";
import { apiPaths } from "@/constants";
import { http } from "@/http";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export enum EPaymentMethod {
    CASH = 'thanh toán khi nhận hàng',
    CREDIT_CARD = 'thanh toán chuyển khoản',
}

export interface IPaymentSlice {
    paymentCardInfo: IPaymentCardInfo[];
    paymentMethod?: EPaymentMethod;
    paid?: IPaid;

}

const initialState: IPaymentSlice = {
    paymentCardInfo: [],
    paymentMethod: undefined,
    paid: undefined,
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
    reducers: {
        setPaymentMethod: (state, {payload}: {type: string, payload: EPaymentMethod}) => {
            state.paymentMethod = payload;
        },
        setPaid: (state, {payload}) => {
            state.paid = payload
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchPaymentInfoThunk.fulfilled, (state, {payload}) => {
            state.paymentCardInfo = payload;
        })
    }
});

export const {
    setPaymentMethod,
    setPaid
} = paymentSlice.actions;

export default paymentSlice.reducer;




