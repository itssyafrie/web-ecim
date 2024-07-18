import {useQuery} from "@tanstack/react-query";
import {Category} from "@/types/types";
import {GET_CATEGORIES} from "@/constants/queryKey";
import getCategories from "@/api/event/getCategories";

const useCategories = () => {
    const { isPending, isError, data, error } = useQuery<Category[], Error>({
        queryKey: [GET_CATEGORIES],
        queryFn: async () => await getCategories()
    })

    return {
        categories: data ?? [],
        isLoading: isPending,
        isError,
        error
    }
}

export default useCategories