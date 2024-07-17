'use client'

import Categories from "@/components/ui/Categories";
import Container from "@/components/ui/Container";
import EventList from "@/components/ui/EventList";
import Navbar from "@/components/ui/Navbar";
import Searchbar from "@/components/ui/Searchbar";
import {TimeframeParams} from "@/types/types";
import useDashboardStats from "@/hooks/dashboard/useDashboardStats";
import {TimeSpecifier} from "@/types/enums/TimeSpecifier";

export default function Home() {
    // const [pagination, setPagination] = useState<PaginationParams>({
    //     page: 0,
    //     size: 9
    // })
    const params: TimeframeParams = {
        timeSpecifier: TimeSpecifier.YEAR,
        date: new Date().toISOString()
    }
    const { stats, isLoading, isError, error } = useDashboardStats(params)
    // useEffect(() => {
    //     const fetch = async () => {
    //         const res = await postLogin()
    //         console.log("FROM HOME: " + res)
    //     }
    //     fetch()
    // }, [])

    console.log(stats)
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
