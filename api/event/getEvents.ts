import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {EventEntity, EventSearchParams} from "@/types/types";


const fetchEvents = async (params: EventSearchParams) => {
    const endpoint = config.endpoints.event.getEvents

    try {
        const res = await axiosInstance.get(endpoint, {
            params: {
                ...params,
                page: params.page ?? 0,
                size: params.size ?? 10
            }
        })
        return res.data.content
    } catch (err) {
        throw err
    }

}

const getEvents = async (params: EventSearchParams) => {
    return (await fetchEvents(params)) as unknown as EventEntity[]
}

export default getEvents