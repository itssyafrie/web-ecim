"use client";

import { useState, useEffect } from "react";
import { EventResponse } from "@/types/Event";
import Card2 from "./Card2";
import useEvents from "@/hooks/useEvents";

const EventList: React.FC = () => {
  // const [events, setEvents] = useState<EventResponse[]>([]);
  // const [page, setPage] = useState(0);
  // const [loading, setLoading] = useState(false);
  //
  // const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
  // const SEMVER = process.env.NEXT_PUBLIC_SEMVER
  //
  // const fetchEvents = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch(
  //       `${BASE_URL}/${SEMVER}/event`
  //     );
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch events");
  //     }
  //     const data = await response.json();
  //     console.log(data.data.content)
  //     setEvents((prevEvents) => [...prevEvents, ...data.data.content]);
  //     setPage((prevPage) => prevPage + 1);
  //   } catch (error) {
  //     console.error("Error fetching events:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  //
  // useEffect(() => {
  //   fetchEvents();
  // }, []);
    const { events, isLoading, isError, error } = useEvents()


  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <Card2 key={event.id} eventResponse={event} outline />
        ))}
      </div>
      {/*{loading && <p>Loading...</p>}*/}
      {/*{!loading && (*/}
      {/*  <button*/}
      {/*    onClick={fetchEvents}*/}
      {/*    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded justify-center"*/}
      {/*  >*/}
      {/*    Load More*/}
      {/*  </button>*/}
      {/*)}*/}
    </div>
  );
};

export default EventList;
