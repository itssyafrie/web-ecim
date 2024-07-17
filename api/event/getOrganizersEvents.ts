import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {EventEntity, PaginationParams} from "@/types/types";


const fetchOrganizersEvents = async (params: PaginationParams) => {
    const endpoint = config.endpoints.getOrganizersEvents

    try {
        const res = await axiosInstance.get(endpoint, {
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

const getOrganizersEvents = async (params: PaginationParams) => {
    return (await fetchOrganizersEvents(params)) as unknown as EventEntity[]
}

export default getOrganizersEvents