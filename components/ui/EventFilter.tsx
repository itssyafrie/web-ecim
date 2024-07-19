import React, { useState } from "react";
import useEvents from "@/hooks/event/useEvents";
import { EventEntity } from "@/types/types";
import { Loader } from "lucide-react";
import EventCard from "./EventCard";

const EventFilter = () => {
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    category: "",
    interest: "",
  });

  const { events, isLoading, isError, errorFilter, category, interest } =
    useEvents(filters);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  console.log("EVENTS>>>>>", events);
  console.log("CATEGORY>>>>>", category);
  console.log("Interestzz", interest);

  return (
    <div className="space-y-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="location"
          value={filters.location}
          onChange={handleInputChange}
          placeholder="Filter by location"
          className="w-full px-4 py-2 border rounded-md bg-neutral-900 border-neutral-700 text-neutral-300"
        />
        <select
          name="category"
          value={filters.category}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md bg-neutral-900 border-neutral-700 text-neutral-300"
        >
          {category &&
            category.map((item) => (
              <option key={item.id} value="">
                {item.name}
              </option>
            ))}
        </select>
        <select
          name="interest"
          value={filters.interest}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border rounded-md bg-neutral-900 border-neutral-700 text-neutral-300"
        >
          {interest &&
            interest.map((item) => (
              <option key={item.id} value="">
                {item.name}
              </option>
            ))}
        </select>
      </div>

      {isLoading && (
        <div className="flex justify-center items-center h-32">
          <Loader className="w-8 h-8 animate-spin" />
        </div>
      )}

      {isError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {errorFilter?.message}</span>
        </div>
      )}

      {!isLoading && !isError && events.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event: EventEntity) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}

      {!isLoading && !isError && events.length === 0 && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-md">
          <strong className="font-bold">No events found</strong>
          <span className="block sm:inline"> Try adjusting your filters</span>
        </div>
      )}
    </div>
  );
};

export default EventFilter;
