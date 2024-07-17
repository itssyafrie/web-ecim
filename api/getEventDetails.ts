import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {eventEntity} from "@/types/types";


const fetchEventDetails = async (id: number) => {
    const endpoint = config.endpoints.getEvents

    try {
        const res = await axiosInstance.get(`${endpoint}/${id}`)
        return res.data
    } catch (err) {
        throw err
    }

}

const getEvents = async (id: number) => {
    return (await fetchEventDetails(id)) as unknown as eventEntity
}

export default getEvents