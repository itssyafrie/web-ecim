import {useQuery} from "@tanstack/react-query";
import {EventEntity, PaginationParams} from "@/types/types";
import {GET_ORGANIZERS_EVENTS} from "@/constants/queryKey";
import getOrganizersEventsById from "@/api/event/getOrganizersEventsById";


const useOrganizersEventsById = (id: number, params: PaginationParams) => {
    const { isPending, isError, data, error } = useQuery<EventEntity[], Error>({
        queryKey: [GET_ORGANIZERS_EVENTS, id],
        queryFn: async () => await getOrganizersEventsById(id, params)
    })

    return {
        events: data ?? [],
        isLoading: isPending,
        isError,
        error
    }
}

export default useOrganizersEventsById