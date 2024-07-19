import {useQuery} from "@tanstack/react-query";
import {GET_EVENTS} from "@/constants/queryKey";
import getEvents from "@/api/event/getEvents";
import {Category, EventEntity, EventSearchParams, Interest} from "@/types/types";
import getCategories from "@/api/event/getCategories";
import getInterests from "@/api/event/getInterests";


const useEvents = (params: EventSearchParams) => {
    const { isPending, isError, data: events, error: errorFilter } = useQuery<EventEntity[], Error>({
        queryKey: [GET_EVENTS, params],
        queryFn: async () => await getEvents(params)
    })

    const {data: category, isLoading, error: errorCategory} = useQuery({
        queryKey: ["Categories"],
        queryFn: async () => await getCategories() as Category[]
    })

    const {data: interest, isLoading: isInterestLoading, error: errorInterest} = useQuery({
        queryKey: ["Interest"],
        queryFn: async () => await getInterests() as Interest[]
    })

    return {
        events: events ?? [],
        category,
        interest: interest ?? [],
        isLoading: isPending,
        isError,
        errorCategory,
        errorFilter,
    }
}

export default useEvents