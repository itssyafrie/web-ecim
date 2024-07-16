import axios from "axios";
import {config} from "@/constants/url";


const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: config.BASE_URL,
    timeout: 5000,
    headers: {
        "Content-type": "application/json"
    }
})

axiosInstance.interceptors.response.use(
    res => {
        return res.data
    },
    err => {
        return Promise.reject(err)
    }
)

export default axiosInstance