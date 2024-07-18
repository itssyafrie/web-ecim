import React, { useState, useEffect } from "react";
import { EventResponse } from "@/types/Event";
import EventDetailsCard from "./EventDetailsCard";
import { Loader } from "lucide-react";

interface EventDetailsListProps {
  eventId: number;
}

const EventDetailsList: React.FC<EventDetailsListProps> = ({ eventId }) => {
  const [event, setEvent] = useState<EventResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://127.0.0.1:8080/api/v1/event/${eventId}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch event");
        }
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error("Error fetching event:", error);
        setError("Failed to load event details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="w-8 h-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
        role="alert"
      >
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  if (!event) {
    return (
      <div
        className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mb-4"
        role="alert"
      >
        <strong className="font-bold">Not Found:</strong>
        <span className="block sm:inline"> Event not found.</span>
      </div>
    );
  }

  return <EventDetailsCard eventResponse={event} />;
};

export default EventDetailsList;
