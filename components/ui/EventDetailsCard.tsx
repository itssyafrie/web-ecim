"use client";

import { EventResponse } from "@/types/Event";

interface EventDetailsProps {
  eventResponse: EventResponse;
}

const EventDetailsCard: React.FC<EventDetailsProps> = ({ eventResponse }) => {
  const {
    id,
    title,
    description,
    imageSrc,
    location,
    category,
    interest,
    offering,
    price,
  } = eventResponse;

  return (
    <div className="rounded-lg w-auto border-[0.3px] border-neutral-700 bg-neutral-800 hover:shadow-xl hover:shadow-black/70 p-6 text-neutral-300">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-60 object-cover rounded"
      />
      <div className="text-2xl font-medium mt-4">{title}</div>
      <div className="font-light text-sm text-neutral-400">{location.city}</div>
      <div className="font-light text-sm text-neutral-400">
        Saturday, November 9, 2024
      </div>
      <div className="text-xl font-medium mt-4">Description</div>
      <p className="font-light text-sm text-justify">{description}</p>
      <div className="py-4">
        <div className="text-xl font-medium">Availability</div>
        <div className="font-light text-sm text-neutral-400">500 seats</div>
      </div>
      <hr className="border-[0.3px] border-neutral-700" />
      <div className="text-xl font-medium mt-4">Organized by</div>
      <p className="font-light text-sm text-blue-500">Konco Kentel</p>
    </div>
  );
};

export default EventDetailsCard;
