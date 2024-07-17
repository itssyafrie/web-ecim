import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {Interest} from "@/types/types";


const fetchInterests = async () => {
    const endpoint = config.endpoints.event.getInterests

    try {
        const res = await axiosInstance.get(endpoint)
        return res.data
    } catch (err) {
        throw err
    }
}

const getInterests = async () => {
    return (await fetchInterests()) as unknown as Interest[]
}

export default getInterests