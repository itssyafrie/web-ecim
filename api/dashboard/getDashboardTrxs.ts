import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {PaginationParams, Trx} from "@/types/types";


const fetchDashboardTrxs = async (params: PaginationParams) => {
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

const getDashboardTrxs = async (params: PaginationParams) => {
    return (await fetchDashboardTrxs(params)) as unknown as Trx[]
}

export default getDashboardTrxs