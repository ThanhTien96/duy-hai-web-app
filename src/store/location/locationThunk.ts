import httpLocation from "@/http/httpLocation";
import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchProvincesThunk = createAsyncThunk(
    "fetchProvinces",
    async (_, thunkApi) => {
        const res = await httpLocation({
            url: "",
            method: "GET",
            signal: thunkApi.signal
        });

        return res.data
    }
)


// fetch district
export const fetchDistrictsThunk = createAsyncThunk(
    "fetchDistrict",
    async (code: number, thunkApi) => {
        const res = await httpLocation({
            url: `/p/${code}`,
            method: "GET",
            params:{
                depth: 2
            },
            signal: thunkApi.signal
        });

        return res.data
    }
)

// fetch ward
export const fetchWardsThunk = createAsyncThunk(
    "fetchWards",
    async (code: number, {signal}) => {
        const res = await httpLocation({
            url: `/d/${code}`,
            method: "GET",
            params: {
                depth: 2
            },
            signal
        });

        return res.data
    }
)