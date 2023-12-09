import { IDistrictType, IProvinceType, IWardType } from "@/@types/location";
import { createSlice } from "@reduxjs/toolkit";
import { fetchDistrictsThunk, fetchProvincesThunk, fetchWardsThunk } from "./locationThunk";


export interface ILocationSlice {
    provinces: IProvinceType[];
    districts: IDistrictType[];
    wards: IWardType[];
};


const initialState: ILocationSlice = {
    provinces: [],
    districts: [],
    wards: [],
}

const locationSlice = createSlice({
    name: "locationSlice",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProvincesThunk.fulfilled, (state, {payload}) => {
            state.provinces = payload;
        });
        builder.addCase(fetchDistrictsThunk.fulfilled, (state, {payload}) => {
            state.districts = payload.districts;
        });
        builder.addCase(fetchWardsThunk.fulfilled, (state, {payload}) => {
            state.wards = payload.wards
        })
    }
});

export default locationSlice.reducer;

