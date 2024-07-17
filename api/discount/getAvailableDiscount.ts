import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {AvailableDiscount} from "@/types/types";


const fetchAvailableDiscount = async (id: number) => {
    const endpoint = config.endpoints.discount.getAvailableDiscount

    try {
        const res = await axiosInstance.get(endpoint, {
            params: {
              eventId: id
            },
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT}`
            }
        })

        return res.data
    } catch (err) {
        throw err
    }
}

const getAvailableDiscount = async (id: number) => {
    return (await fetchAvailableDiscount(id)) as unknown as AvailableDiscount[]
}

export default getAvailableDiscount