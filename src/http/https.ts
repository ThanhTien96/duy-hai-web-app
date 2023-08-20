import axios from "axios";
import https from 'https'

const http = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_API}`,
    headers: {
        'Content-Type': 'application/json'
    },

})


export default http