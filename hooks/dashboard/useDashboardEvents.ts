import {useQuery} from "@tanstack/react-query";
import {EventEntity, PaginationParams} from "@/types/types";
import {GET_DASHBOARD_EVENTS} from "@/constants/queryKey";
import getDashboardEvents from "@/api/dashboard/getDashboardEvents";


const useDashboardEvents = (params: PaginationParams) => {
    const { isPending, isError, data, error } = useQuery<EventEntity[], Error>({
        queryKey: [GET_DASHBOARD_EVENTS],
        queryFn: async () => await getDashboardEvents(params)
    })

    return {
        events: data ?? [],
        isLoading: isPending,
        isError,
        error
    }
}

export default useDashboardEvents