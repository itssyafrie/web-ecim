"use client";

import Categories from "@/components/ui/Categories";
import Container from "@/components/ui/Container";
import EventFilter from "@/components/ui/EventFilter";
import EventList from "@/components/ui/EventList";
import Navbar from "@/components/ui/Navbar";
import SearchBar from "@/components/ui/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <Navbar />
        <SearchBar />
        {/* <Categories /> */}
        {/* <CardList /> */}
        <EventFilter />
        <EventList />
      </Container>
    </main>
  );
}
