import {useQuery} from "@tanstack/react-query";
import {GET_EVENTS} from "@/constants/queryKey";
import getEvents from "@/api/getEvents";
import {EventEntity} from "@/types/EventEntity";


const useEvents = () => {
    const { isPending, isError, data, error } = useQuery<EventEntity[], Error>({
        queryKey: [GET_EVENTS],
        queryFn: async () => await getEvents()
    })

    return {
        events: data ?? [],
        isLoading: isPending,
        isError,
        error
    }
}

export default useEvents