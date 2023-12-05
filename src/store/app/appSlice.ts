import { setLoading } from './../../components/Product/productAction';
import { createSlice } from "@reduxjs/toolkit";

export type TStatusType = "error" | "info" | "warning" | "success";

export interface IAppSlice {
    loading: boolean;
    status: TStatusType;
    message: string;
    logs: [TStatusType, string][];
}

const initialState: IAppSlice = {
    loading: false,
    status: "info",
    message: "N/A",
    logs: [],
};


const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
        setAppLoading: (state, {payload}: {type: string, payload: boolean}) => {
            state.loading = payload;
        },
        setAlert: (state, {payload}: {type: string, payload: {status: TStatusType, message: string}}) => {
            state.status = payload.status;
            state.message = payload.message;
            // Store logs in temporary
            state.logs = [...state.logs, [payload.status, payload.message]]
        }
    }   
});

export const {
    setAppLoading,
    setAlert,
} = appSlice.actions;

export default appSlice.reducer;


