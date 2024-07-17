import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {eventEntity, EventSearchParams} from "@/types/types";


const fetchEvents = async (params: EventSearchParams) => {
    const endpoint = config.endpoints.getEvents

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
    return (await fetchEvents(params)) as unknown as eventEntity[]
}

export default getEvents