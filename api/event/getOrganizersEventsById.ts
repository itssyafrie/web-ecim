import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {EventEntity, PaginationParams} from "@/types/types";


const fetchOrganizersEventsById = async (id: number, params: PaginationParams) => {
    const endpoint = config.endpoints.getOrganizersEvents

    try {
        const res = await axiosInstance.get(`${endpoint}/${id}`, {
            params: {
                page: params.page ?? 0,
                size: params.size ?? 10
            }
        })
        return res.data.content
    } catch (err) {
        throw err
    }

}

const getOrganizersEventsById = async (id: number, params: PaginationParams) => {
    return (await fetchOrganizersEventsById(id, params)) as unknown as EventEntity[]
}

export default getOrganizersEventsById