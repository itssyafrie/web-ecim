import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {Category} from "@/types/types";


const fetchCategories = async () => {
    const endpoint = config.endpoints.getCategories

    try {
        const res = await axiosInstance.get(endpoint)

        return res.data
    } catch (err) {
        throw err
    }
}

const getCategories = async () => {
    return (await fetchCategories()) as unknown as Category[]
}

export default getCategories