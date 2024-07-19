import {config} from "@/constants/url";
import axiosInstance from "@/utils/axiosInstance";
import {EventSuggestion} from "@/types/types";


const fetchEvents = async (params: string) => {
    const endpoint = config.endpoints.event.getSuggestion

    try {
        const res = await axiosInstance.get(endpoint, {
            params: {search:params}
        })
        return res.data
    } catch (err) {
        throw err
    }

}

const getSuggestion = async (params: string) => {
    return (await fetchEvents(params)) as unknown as EventSuggestion[]
}

export default getSuggestion