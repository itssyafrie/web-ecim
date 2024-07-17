"use client";

import Card2 from "./Card2";
import useEvents from "@/hooks/useEvents";

const EventList: React.FC = () => {
    const { events, isLoading, isError, error } = useEvents()


  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
