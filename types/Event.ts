export interface EventResponse {
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

// export interface SearchParams {
//     title?: string;
//     category?: string;
//     interest?: string;
//     city?: string;
//     state?: string;
//     page: number;
//     size: number;
//   }

//   export interface Suggestion {
//     text: string;
//     type: 'title' | 'category' | 'interest' | 'location';
//   }
  
//   export interface SearchResponse {
//     content: Event[];
//     totalPages: number;
//     totalElements: number;
//     // Add more pagination-related fields if needed
//   }