export const config = {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    endpoints: {
        // AUTH
        register: "auth/register",
        login: "auth/login",
        logout: "auth/logout",
        // USER
        createAttendee: "user/attendee",
        createOrganizer: "user/organizer",
        // EVENT
        getEvents: "event",
        getCategories: "event/category",
        getInterests: "event/interest",
        getOrganizersEvents: "event/organizer",
        // DASHBOARD
        getDashboardEvents: "dashboard/events"
    },
};