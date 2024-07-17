import {TimeSpecifier} from "@/types/enums/TimeSpecifier";

export interface EventEntity {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    location: {
        street1: string;
        street2: string;
        city: string;
        state: string;
    };
    category: {
        id: number;
        name: string;
    };
    interest: {
        id: number;
        name: string;
    };
    offering: Set<EventOffering>;
    price: number;
}

interface EventOffering {
    id: number;
    name: string;
    description: string;
    price: number;
    capacity: number;
    availability: number;
}

export interface Category {
    id: number;
    name: string;
}

export interface Interest {
    id: number;
    name: string;
}

interface EventSearchParams {
    title?: string;
    category?: string;
    interest?: string;
    city?: string;
    state?: string;
    page?: number;
    size?: number;
}

interface PaginationParams {
    page?: number;
    size?: number;
}

interface Trx {
    id: number;
    price: number;
    tixes: Set<Tix>;
}

interface Tix {
    code: string;
    eventOffering: EventOffering;
}

interface Stats {
    count: number;
    offeringId: number;
    price: number;
    revenue: number;
}

interface TimeframeParams {
    timeSpecifier: TimeSpecifier;
    date: string // COMPLIANT TO ISO 8601 DATE STRING
}

interface AvailableDiscount {
    id: number,
    name: string,
    description: string,
    amountFlat: number,
    amountPercent: number
}
