'use client'

import Categories from "@/components/ui/Categories";
import Container from "@/components/ui/Container";
import EventList from "@/components/ui/EventList";
import Navbar from "@/components/ui/Navbar";
import Searchbar from "@/components/ui/Searchbar";
import postLogin from "@/api/auth/postLogin";
import {useEffect, useState} from "react";
import useEvents from "@/hooks/event/useEvents";
import useDashboardEvents from "@/hooks/dashboard/useDashboardEvents";
import {EventSearchParams, PaginationParams} from "@/types/types";

export default function Home() {
    const [pagination, setPagination] = useState<PaginationParams>({
        page: 0,
        size: 9
    })
    const { events, isLoading, isError, error } = useDashboardEvents(pagination)
    // useEffect(() => {
    //     const fetch = async () => {
    //         const res = await postLogin()
    //         console.log("FROM HOME: " + res)
    //     }
    //     fetch()
    // }, [])

    console.log(events)
  return (
    <main className="min-h-screen">
      <Container>
        <Navbar />
        <Searchbar />
        <Categories />
        {/* <CardList /> */}
        {/*<EventList />*/}
      </Container>
    </main>
  );
}
