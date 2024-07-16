import Card from "@/components/ui/Card";
import CardList from "@/components/ui/CardList";
import Categories from "@/components/ui/Categories";
import Container from "@/components/ui/Container";
import EventList from "@/components/ui/EventList";
import Navbar from "@/components/ui/Navbar";
import Searchbar from "@/components/ui/Searchbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <Navbar />
        <Searchbar />
        <Categories />
        {/* <CardList /> */}
        <EventList />
      </Container>
    </main>
  );
}
