import {useQuery} from "@tanstack/react-query";
import {GET_EVENT_DETAILS} from "@/constants/queryKey";
import {eventEntity} from "@/types/types";
import getEventDetails from "@/api/getEventDetails";


const useEvents = (id: number) => {
    const { isPending, isError, data, error } = useQuery<eventEntity, Error>({
        queryKey: [GET_EVENT_DETAILS, id],
        queryFn: async () => await getEventDetails(id)
    })

    return {
        events: data ?? [],
        isLoading: isPending,
        isError,
        error
    }
}

export default useEvents