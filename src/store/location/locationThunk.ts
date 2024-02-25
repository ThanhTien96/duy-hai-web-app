import httpLocation from "@/http/httpLocation";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProvincesThunk = createAsyncThunk(
    "fetchProvinces",
    async (_, thunkApi) => {
        const res = await httpLocation({
            url: "province",
            method: "GET",
            signal: thunkApi.signal
        });
        return res.data.results
    }
)


// fetch district
export const fetchDistrictsThunk = createAsyncThunk(
    "fetchDistrict",
    async (prodvinceId: string, thunkApi) => {
        const res = await httpLocation({
            url: `/province/district/${prodvinceId}`,
            method: "GET",
            signal: thunkApi.signal
        });
        return res.data.results
    }
)

// fetch ward
export const fetchWardsThunk = createAsyncThunk(
    "fetchWards",
    async (code: number, {signal}) => {
        const res = await httpLocation({
            url: `/province/ward/${code}`,
            method: "GET",
            signal
        });
console.log("wards", res);
        return res.data.results
    }
)