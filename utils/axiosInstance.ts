import axios, { AxiosInstance, ParamsSerializerOptions } from "axios";
import {config} from "@/constants/url";


const axiosInstance: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: config.BASE_URL,
    timeout: 5000,
    headers: {
        "Content-type": "application/json"
    },
    paramsSerializer: {
        serialize: (params: Record<string, any>): string => {
            const keys = Object.keys(params);
            const parts = keys.reduce((acc: string[], key: string) => {
                if (params[key] !== null && params[key] !== undefined) {
                    acc.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`);
                }
                return acc;
            }, []);
            return parts.join('&');
        }
    } as ParamsSerializerOptions
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