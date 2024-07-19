import {useQuery} from "@tanstack/react-query";
import {GET_SUGGESTION} from "@/constants/queryKey";
import getSuggestion from "@/api/event/getSuggestion";
import {EventSuggestion} from "@/types/types";


const useSuggestion = (params: string) => {
    const { isPending, isError, data: events, error } = useQuery<EventSuggestion[], Error>({
        queryKey: [GET_SUGGESTION, params],
        queryFn: async () => await getSuggestion(params)
    })

    return {
        events,
        isLoading: isPending,
        isError,
        error
    }
}

export default useSuggestion