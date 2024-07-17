import axios from 'axios';
import { SearchResponse, Suggestion } from "@/types/Event";

const API_BASE_URL = '/api/v1';

export const searchEvents = async (query: string, page: number = 0, size: number = 20): Promise<SearchResponse> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/event/search`, { params: { query, page, size } });
    return response.data;
  } catch (error) {
    console.error('Error searching events:', error);
    throw error;
  }
};

export const searchSuggestions = async (query: string): Promise<Suggestion[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/event/suggestions`, { params: { query } });
    return response.data;
  } catch (error) {
    console.error('Error fetching suggestions:', error);
    throw error;
  }
};