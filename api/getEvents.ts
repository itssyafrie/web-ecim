import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {EventEntity} from "@/types/EventEntity";


const fetchEvents = async () => {
    const endpoint = config.endpoints.getEvents

    try {
        const res = await axiosInstance.get(endpoint)
        return res.data.content
    } catch (err) {
        throw err
    }

}

const getEvents = async () => {
    return (await fetchEvents()) as unknown as EventEntity[]
}

export default getEvents