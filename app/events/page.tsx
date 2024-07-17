"use client";

import ChooseTicket from "@/components/ui/ChooseTicket";
import Container from "@/components/ui/Container";
import EventCard from "@/components/ui/EventCard";
import Navbar from "@/components/ui/Navbar";
import ReviewList from "@/components/ui/ReviewList";
import { EventResponse } from "@/types/types";
import { useState, useEffect } from "react";

const EventDetails = () => {
  const [events, setEvents] = useState<EventResponse>();
  const [loading, setLoading] = useState(false);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8080/api/v1/event/1`);
      if (!response.ok) {
        throw new Error("Failed to fetch events");
      }
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  return (
    <main className="min-h-screen">
      <Container>
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
          <div className="md:col-span-2">
            <EventCard />
          </div>
          <ChooseTicket />
          <div className="md:col-span-2">
            <ReviewList />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default EventDetails;
