import {useQuery} from "@tanstack/react-query";
import {GET_EVENTS} from "@/constants/queryKey";
import getEvents from "@/api/event/getEvents";
import {EventEntity, EventSearchParams} from "@/types/types";


const useEvents = (params: EventSearchParams) => {
    const { isPending, isError, data, error } = useQuery<EventEntity[], Error>({
        queryKey: [GET_EVENTS],
        queryFn: async () => await getEvents(params)
    })

    return {
        events: data ?? [],
        isLoading: isPending,
        isError,
        error
    }
}

export default useEvents