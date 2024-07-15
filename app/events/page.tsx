import ChooseTicket from "@/components/ui/ChooseTicket";
import Container from "@/components/ui/Container";
import EventCard from "@/components/ui/EventCard";
import Navbar from "@/components/ui/Navbar";
import ReviewList from "@/components/ui/ReviewList";

const EventDetails = () => {
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
