import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {EventEntity} from "@/types/types";


const fetchEventDetails = async (id: number) => {
    const endpoint = config.endpoints.event.getEvents

    try {
        const res = await axiosInstance.get(`${endpoint}/${id}`)
        return res.data
    } catch (err) {
        throw err
    }

}

const getEventDetails = async (id: number) => {
    return (await fetchEventDetails(id)) as unknown as EventEntity
}

export default getEventDetails