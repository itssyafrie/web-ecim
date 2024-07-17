import {useQuery} from "@tanstack/react-query";
import {PaginationParams, TimeframeParams, Trx} from "@/types/types";
import {GET_DASHBOARD_TRXS} from "@/constants/queryKey";
import getAllTrxs from "@/api/trx/getAllTrxs";


const useAllTrxs = (timeframeParams: TimeframeParams, paginationParams: PaginationParams) => {
    const { isPending, isError, data, error } = useQuery<Trx[], Error>({
        queryKey: [GET_DASHBOARD_TRXS],
        queryFn: async () => await getAllTrxs(timeframeParams, paginationParams)
    })

    return {
        trxs: data ?? [],
        isLoading: isPending,
        isError,
        error
    }
}

export default useAllTrxs