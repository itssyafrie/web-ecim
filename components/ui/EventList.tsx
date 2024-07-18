"use client";

import Card2 from "./Card2";
import useEvents from "@/hooks/event/useEvents";
import {useState} from "react";
import {EventSearchParams} from "@/types/types";

const EventList: React.FC = () => {
    const [searchParams, setSearchParams] = useState<EventSearchParams>({
        page: 0,
        size: 9
    })
    const { events, isLoading, isError, error } = useEvents(searchParams)


  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {events.map((event) => (
          <Card2 key={event.id} eventEntity={event} outline />
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
