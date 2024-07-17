import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {AxiosResponse} from "axios";

interface LoginResponse {
    token: string,
    message: string
}

const postLogin = async () : Promise<string> => {
    const endpoint = config.endpoints.login

    try {
        const res : LoginResponse = await axiosInstance.post(endpoint, {
            email: "frontend@mail.com",
            password: "password",
            confirmPassword: "password"
        })
        return res.token
    } catch (err) {
        throw err
    }
}

export default postLogin