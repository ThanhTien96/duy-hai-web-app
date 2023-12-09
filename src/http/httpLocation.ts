
import axios from "axios";
import https from 'https'

const httpLocation = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_LOCATION_API}/api/`,
    headers: {
        'Content-Type': 'application/json',
    },
})

httpLocation.interceptors.request.use((config) => {
    return config
});


export default httpLocation