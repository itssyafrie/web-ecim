export const config = {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    endpoints: {
        getEvents: "event",
        getCategories: "event/category",
        getInterests: "event/interest"
    },
};