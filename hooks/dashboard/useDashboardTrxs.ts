import {useQuery} from "@tanstack/react-query";
import {PaginationParams, Trx} from "@/types/types";
import {GET_DASHBOARD_TRXS} from "@/constants/queryKey";
import getDashboardTrxs from "@/api/dashboard/getDashboardTrxs";


const useDashboardTrxs = (params: PaginationParams) => {
    const { isPending, isError, data, error } = useQuery<Trx[], Error>({
        queryKey: [GET_DASHBOARD_TRXS],
        queryFn: async () => await getDashboardTrxs(params)
    })

    return {
        trxs: data ?? [],
        isLoading: isPending,
        isError,
        error
    }
}

export default useDashboardTrxs