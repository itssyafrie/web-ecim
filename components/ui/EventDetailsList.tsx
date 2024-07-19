"use client";
import React, { useState, useEffect } from "react";
import { EventResponse } from "@/types/Event";
import EventDetailsCard from "./EventDetailsCard";
import { Loader } from "lucide-react";
import useEventDetails from "@/hooks/event/useEventDetails";

interface EventDetailsListProps {
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
}

const EventDetailsList: React.FC<EventDetailsListProps> = ({
  id,
  title,
  description,
  imageSrc,
  location,
  category,
  interest,
}) => {
  // const [event, setEvent] = useState<EventResponse | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchEvent = async () => {
  //     setLoading(true);
  //     setError(null);
  //     try {
  //       const response = await fetch(
  //         `http://127.0.0.1:8080/api/v1/event/${eventId}`
  //       );
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch event");
  //       }
  //       const data = await response.json();
  //       setEvent(data);
  //     } catch (error) {
  //       console.error("Error fetching event:", error);
  //       setError("Failed to load event details. Please try again later.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchEvent();
  // }, [eventId]);

  return (
    <div className="rounded-lg w-auto border-[0.3px] border-neutral-700 bg-neutral-800 hover:shadow-xl hover:shadow-black/70 p-6 text-neutral-300">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-60 object-cover rounded"
      />
      <div className="text-2xl font-medium mt-4">{title}</div>
      <div className="font-light text-sm text-neutral-400">{category.name}</div>
      <div className="font-light text-sm text-neutral-400">{location.city}</div>
      <div className="text-xl font-medium mt-4">Description</div>
      <p className="font-light text-sm text-justify">{description}</p>
      <div className="py-4">
        <div className="text-xl font-medium">Interest</div>
        <div className="font-light text-sm text-neutral-400">
          {interest.name}
        </div>
      </div>
    </div>
  );
};

export default EventDetailsList;
