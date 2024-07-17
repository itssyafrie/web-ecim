import {useQuery} from "@tanstack/react-query";
import {Stats, TimeframeParams} from "@/types/types";
import {GET_DASHBOARD_STATS, GET_DASHBOARD_TRXS} from "@/constants/queryKey";
import getDashboardStats from "@/api/dashboard/getDashboardStats";


const useDashboardStats = (params: TimeframeParams) => {
    const { isPending, isError, data, error } = useQuery<Stats[], Error>({
        queryKey: [GET_DASHBOARD_STATS],
        queryFn: async () => await getDashboardStats(params)
    })

    return {
        stats: data ?? [],
        isLoading: isPending,
        isError,
        error
    }
}

export default useDashboardStats