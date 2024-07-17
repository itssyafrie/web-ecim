import Categories from "@/components/ui/Categories";
import Container from "@/components/ui/Container";
import EventList from "@/components/ui/EventList";
import Navbar from "@/components/ui/Navbar";
import Searchbar from "@/components/ui/Searchbar";
import postLogin from "@/api/auth/postLogin";

export default function Home() {
    // useEffect(() => {
    //     const fetch = async () => {
    //         const res = await postLogin()
    //         console.log("FROM HOME: " + res)
    //     }
    //     fetch()
    // }, [])
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
