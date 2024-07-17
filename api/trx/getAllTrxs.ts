import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {PaginationParams, TimeframeParams, Trx} from "@/types/types";
import {TimeSpecifier} from "@/types/enums/TimeSpecifier";


const fetchAllTrxs = async (timeframeParams: TimeframeParams, paginationParams: PaginationParams) => {
    const endpoint = config.endpoints.trx.trx


    try {
        const res = await axiosInstance.get(endpoint, {
            params: {
                timeSpecifier: timeframeParams.timeSpecifier || TimeSpecifier.YEAR,
                date: timeframeParams.date || new Date().toISOString(),
                page: paginationParams.page ?? 0,
                size: paginationParams.size ?? 10
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

const getAllTrxs = async (timeframeParams: TimeframeParams, paginationParams: PaginationParams) => {
    return (await fetchAllTrxs(timeframeParams, paginationParams)) as unknown as Trx[]
}

export default getAllTrxs