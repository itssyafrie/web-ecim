import {useQuery} from "@tanstack/react-query";
import {EventEntity, PaginationParams} from "@/types/types";
import getOrganizersEvents from "@/api/event/getOrganizersEvents";
import {GET_ORGANIZERS_EVENTS} from "@/constants/queryKey";


const useOrganizersEvents = (params: PaginationParams) => {
    const { isPending, isError, data, error } = useQuery<EventEntity[], Error>({
        queryKey: [GET_ORGANIZERS_EVENTS],
        queryFn: async () => await getOrganizersEvents(params)
    })

    return {
        events: data ?? [],
        isLoading: isPending,
        isError,
        error
    }
}

export default useOrganizersEvents