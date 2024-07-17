import {useQuery} from "@tanstack/react-query";
import {AvailableDiscount} from "@/types/types";
import {GET_AVAILABLE_DISCOUNT} from "@/constants/queryKey";
import getAvailableDiscount from "@/api/discount/getAvailableDiscount";


const useAvailableDiscount = (id: number) => {
    const { isPending, isError, data, error } = useQuery<AvailableDiscount[], Error>({
        queryKey: [GET_AVAILABLE_DISCOUNT],
        queryFn: async () => await getAvailableDiscount(id)
    })

    return {
        discounts: data ?? [],
        isLoading: isPending,
        isError,
        error
    }
}

export default useAvailableDiscount