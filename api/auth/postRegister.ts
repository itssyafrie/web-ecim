import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";


const postRegister = async () => {
    const endpoint = config.endpoints.register

    try {
        const res = await axiosInstance.post(endpoint, {
            email: "frontend@mail.com",
            password: "password",
            confirmPassword: "password"
        })
        return res.data
    } catch (err) {
        throw err
    }
}

export default postRegister