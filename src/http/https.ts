import axios from "axios";
import https from 'https'

const http = axios.create({
    baseURL: `/api/next`,
    headers: {
        'Content-Type': 'application/json'
    },

})


export default http