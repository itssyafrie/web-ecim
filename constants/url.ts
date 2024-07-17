const path = {
    auth: 'auth',
    user: 'user',
    event: 'event',
    dashboard: 'dashboard'
};
export const config = {
    BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    endpoints: {
        auth: {
            register: `${path.auth}/register`,
            login: `${path.auth}/login`,
            logout: `${path.auth}/logout`,
        },
        user: {
            createAttendee: `${path.user}/attendee`,
            createOrganizer: `${path.user}/organizer`,
        },
        event: {
            getEvents: path.event,
            getCategories: `${path.event}/category`,
            getInterests: `${path.event}/interest`,
            getOrganizersEvents: `${path.event}/organizer`,
        },
        // DASHBOARD
        dashboard: {
            getDashboardEvents: `${path.dashboard}/events`
        },
    },
};