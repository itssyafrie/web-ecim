import {useQuery} from "@tanstack/react-query";
import {GET_EVENT_DETAILS} from "@/constants/queryKey";
import {EventEntity} from "@/types/types";
import getEventDetails from "@/api/event/getEventDetails";


const useEventDetails = (id: number) => {
    const { isPending, isError, data, error } = useQuery<EventEntity, Error>({
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

export default useEventDetails