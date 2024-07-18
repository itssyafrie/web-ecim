const path = {
    auth: 'auth',
    user: 'user',
    event: 'event',
    discount: 'discount',
    dashboard: 'dashboard',
    trx: 'trx'
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
        discount: {
            getAvailableDiscount: `${path.discount}/available`,
            createEventDiscount: `${path.discount}/event`,
            claimDiscount: `${path.discount}/claim`,
            redeemDiscount: `${path.discount}/redeem`
        },
        dashboard: {
            getDashboardEvents: `${path.dashboard}/events`,
            getTrxs: `${path.dashboard}/trxs`,
            getStats: `${path.dashboard}/stats`
        },
        trx: {
            trx: path.trx
        }
    },
};