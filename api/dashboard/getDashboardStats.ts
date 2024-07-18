import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {Stats, TimeframeParams} from "@/types/types";
import {TimeSpecifier} from "@/types/enums/TimeSpecifier";


const fetchDashboardStats = async (params: TimeframeParams) => {
    const endpoint = config.endpoints.dashboard.getStats


    try {
        const res = await axiosInstance.get(endpoint, {
            params: {
                timeSpecifier: params.timeSpecifier || TimeSpecifier.YEAR,
                date: params.date || new Date().toISOString()
            },
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT}`
            }
        })
        return res.data
    } catch (err) {
        throw err
    }

}

const getDashboardStats = async (params: TimeframeParams) => {
    return (await fetchDashboardStats(params)) as unknown as Stats[]
}

export default getDashboardStats