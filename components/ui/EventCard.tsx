import React from "react";
import { EventEntity } from "@/types/types";

interface EventCardProps {
  event: EventEntity;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="border rounded-md p-4 shadow-sm">
      <img
        src={event.imageSrc}
        alt={event.title}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h3 className="font-bold text-lg">{event.title}</h3>
      <p className="text-gray-600 text-sm mb-2">{event.description}</p>
      <p className="text-sm text-gray-500">
        Location: {event.location.city}, {event.location.state}
      </p>
      <p className="text-sm text-gray-500">Category: {event.category.name}</p>
      <p className="text-sm text-gray-500">Interest: {event.interest.name}</p>
    </div>
  );
};

export default EventCard;
