"use client";

import React, { useState, useCallback } from "react";
import SearchBar from "./Searchbar";
import Card2 from "./Card2"; // Adjust the import path as needed
import { searchEvents } from "@/app/api/api";
import { EventResponse } from "@/types/Event";

const EventSearch: React.FC = () => {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = useCallback(async (query: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await searchEvents(query);
      setEvents(response.content);
    } catch (err) {
      setError("Failed to fetch events. Please try again.");
      console.error("Error fetching events:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="mt-4 text-neutral-300">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {events.map((event) => (
          <Card2 key={event.id} eventResponse={event} outline />
        ))}
      </div>
    </div>
  );
};

export default EventSearch;
