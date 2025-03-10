import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {EventEntity, PaginationParams} from "@/types/types";


const fetchDashboardEvents = async (params: PaginationParams) => {
    const endpoint = config.endpoints.dashboard.getDashboardEvents


    try {
        const res = await axiosInstance.get(endpoint, {
            params: {
                page: params.page ?? 0,
                size: params.size ?? 10
            },
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT}`
            }
        })
        return res.data.content
    } catch (err) {
        throw err
    }

}

const getDashboardEvents = async (params: PaginationParams) => {
    return (await fetchDashboardEvents(params)) as unknown as EventEntity[]
}

export default getDashboardEvents