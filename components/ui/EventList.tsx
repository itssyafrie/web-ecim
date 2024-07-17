"use client";

import { useState, useEffect } from "react";
import { EventResponse } from "@/types/Event";
import Card2 from "./Card2";

const EventList: React.FC = () => {
  const [events, setEvents] = useState<EventResponse[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://127.0.0.1:8080/api/v1/event?page=${page}&size=20`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents((prevEvents) => [...prevEvents, ...data.content]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {events.map((event) => (
          <Card2 key={event.id} eventResponse={event} outline />
        ))}
      </div>
      {loading && <p>Loading...</p>}
      {!loading && (
        <button
          onClick={fetchEvents}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded justify-center"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default EventList;
