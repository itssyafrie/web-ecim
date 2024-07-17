import {useQuery} from "@tanstack/react-query";
import {GET_EVENTS} from "@/constants/queryKey";
import getEvents from "@/api/getEvents";
import {eventEntity} from "@/types/types";


const useEvents = () => {
    const { isPending, isError, data, error } = useQuery<eventEntity[], Error>({
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