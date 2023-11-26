import axios from "axios";
import https from 'https'

const http = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API}/api`,
    headers: {
        'Content-Type': 'application/json',
        accessToken: process.env.NEXT_PUBLIC_API_TOKEN
    },
})

http.interceptors.request.use((config) => {
    return config
});


export default http