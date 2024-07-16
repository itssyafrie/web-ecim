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
    offering: {
        name: string;
        description: string;
        price: number;
        capacity: number;
        availability: number;
    };
    price: number;
}