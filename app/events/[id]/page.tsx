"use client";

import ChooseTicket from "@/components/ui/ChooseTicket";
import Container from "@/components/ui/Container";
import EventDetailsList from "@/components/ui/EventDetailsList";
import Navbar from "@/components/ui/Navbar";
import ReviewList from "@/components/ui/ReviewList";
import useEventDetails from "@/hooks/event/useEventDetails";
import { EventEntity, EventOffering } from "@/types/types";
import { Loader } from "lucide-react";
import { useParams } from "next/navigation";

const EventDetails = () => {
  const { id } = useParams<{ id: string }>() || {};

  const { events, isLoading, isError, error } = useEventDetails(parseInt(id));

  const offering = events as EventEntity;
  const offeringData = offering.offerings as unknown as EventOffering[];

  console.log("Offering Data>>>", offeringData);
  console.log("Offering>>>", offering);

  // console.log(
  //   "Offering data details>>>",
  //   offeringData.map((data) => data)
  // );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader color="#3b82f6" className="w-8 h-8 animate-spin" />
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
        {/* <span className="block sm:inline"> {error}</span> */}
      </div>
    );
  }

  if (!events) {
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
  return (
    <main className="min-h-screen">
      <Container>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
          <div className="md:col-span-2">
            {/* <EventCard /> */}
            <EventDetailsList
              id={(events as EventEntity).id}
              title={(events as EventEntity).title}
              description={(events as EventEntity).description}
              imageSrc={(events as EventEntity).imageSrc}
              location={(events as EventEntity).location}
              category={(events as EventEntity).category}
              interest={(events as EventEntity).interest}
            />
          </div>
          <ChooseTicket offerings={offeringData} />
          <div className="md:col-span-2">
            <ReviewList />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default EventDetails;
