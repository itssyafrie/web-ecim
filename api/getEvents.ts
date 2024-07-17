import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {eventEntity} from "@/types/types";


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
    return (await fetchEvents()) as unknown as eventEntity[]
}

export default getEvents