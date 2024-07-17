import {useQuery} from "@tanstack/react-query";
import {Interest} from "@/types/types";
import {GET_INTERESTS} from "@/constants/queryKey";
import getInterests from "@/api/event/getInterests";


const useInterests = () => {
    const { isPending, isError, data, error } = useQuery<Interest[], Error>({
        queryKey: [GET_INTERESTS],
        queryFn: async () => await getInterests()
    })

    return {
        interests: data ?? [],
        isLoading: isPending,
        isError,
        error
    }
}

export default useInterests