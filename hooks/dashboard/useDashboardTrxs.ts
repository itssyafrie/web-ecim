import {useQuery} from "@tanstack/react-query";
import {PaginationParams, TimeframeParams, Trx} from "@/types/types";
import {GET_DASHBOARD_TRXS} from "@/constants/queryKey";
import getDashboardTrxs from "@/api/dashboard/getDashboardTrxs";


const useDashboardTrxs = (timeframeParams: TimeframeParams, paginationParams: PaginationParams) => {
    const { isPending, isError, data, error } = useQuery<Trx[], Error>({
        queryKey: [GET_DASHBOARD_TRXS],
        queryFn: async () => await getDashboardTrxs(timeframeParams, paginationParams)
    })

    return {
        trxs: data ?? [],
        isLoading: isPending,
        isError,
        error
    }
}

export default useDashboardTrxs