import {useQuery} from "@tanstack/react-query";
import {interest} from "@/types/types";
import {GET_INTERESTS} from "@/constants/queryKey";
import getInterests from "@/api/getInterests";


const useInterests = () => {
    const { isPending, isError, data, error } = useQuery<interest[], Error>({
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