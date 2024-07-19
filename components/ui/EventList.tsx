"use client";

import Card2 from "./Card2";
import useEvents from "@/hooks/event/useEvents";
import { useState } from "react";
import { EventSearchParams } from "@/types/types";
import { useRouter } from "next/navigation";

const EventList: React.FC = () => {
  const [searchParams, setSearchParams] = useState<EventSearchParams>({
    page: 0,
    size: 9,
  });
  const { events, isLoading, isError, errorFilter } = useEvents(searchParams);
  console.log(events.map((event) => event.id));

  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/events/${id}`);
  };

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {events.map((event, index) => (
          <Card2
            onClick={() => handleCardClick(index)}
            key={index}
            eventEntity={event}
            outline
          />
        ))}
      </div>
    </div>
  );
};

export default EventList;
