import axios from "axios";
import https from "./https";
const clientAxios = axios.create({
    baseURL: '/api',
    
});

export default clientAxios;