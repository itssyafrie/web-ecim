"use client";

import Categories from "@/components/ui/Categories";
import Container from "@/components/ui/Container";
import EventList from "@/components/ui/EventList";
import EventSearch from "@/components/ui/EventSearch";
import Navbar from "@/components/ui/Navbar";
import SearchBar from "@/components/ui/Searchbar";
import Searchbar from "@/components/ui/Searchbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <Navbar />
        <EventSearch />
        <Categories />
        {/* <CardList /> */}
        <EventList />
      </Container>
    </main>
  );
}
