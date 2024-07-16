"use client";

import { BarChartBig, House, Ticket } from "lucide-react";
import { useState } from "react";
import DashboardHome from "./DashboardHome";
import DashboardEvents from "./DashboardEvents";
import Link from "next/link";
import Statistics from "./Statistics";

const DashboardLayout = () => {
  const [activePage, setActivePage] = useState("home");

  const renderActivePage = () => {
    switch (activePage) {
      case "home":
        return <DashboardHome />;
      case "events":
        return <DashboardEvents />;
      case "statistics":
        return <Statistics />;
      default:
        return <DashboardHome />;
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-8">
      <div className="flex flex-col gap-y-4">
        <div className="rounded-lg w-auto border-[0.3px] border-neutral-700 bg-neutral-800 text-neutral-300 hover:shadow-xl hover:shadow-black/70 p-6">
          <div className="text-xl font-medium">Dashboard</div>
          <div className="pt-3">
            <hr className="border-[0.3px] border-neutral-700" />
          </div>
          <div className="flex flex-row justify-between md:flex-col gap-y-3 pt-3">
            <Link
              href="#"
              className={`block py-2 px-2 rounded-lg ${
                activePage === "home"
                  ? "text-blue-500"
                  : "text-neutral-300 hover:text-blue-500"
              }`}
              onClick={() => setActivePage("home")}
            >
              <div className="text-md flex items-center justify-center md:justify-normal flex-col gap-y-1 md:flex-row md:gap-x-3">
                <House />
                <div>Home</div>
              </div>
            </Link>
            <Link
              href="#"
              className={`block py-2 px-2 rounded-lg ${
                activePage === "events"
                  ? "text-blue-500"
                  : "text-neutral-300 hover:text-blue-500"
              }`}
              onClick={() => setActivePage("events")}
            >
              <div className="text-md flex items-center justify-center md:justify-normal flex-col gap-y-1 md:flex-row md:gap-x-3">
                <Ticket />
                <div>My Events</div>
              </div>
            </Link>
            <Link
              href="#"
              className={`block py-2 px-2 rounded-lg ${
                activePage === "statistics"
                  ? "text-blue-500"
                  : "text-neutral-300 hover:text-blue-500"
              }`}
              onClick={() => setActivePage("statistics")}
            >
              <div className="text-md flex items-center justify-center md:justify-normal flex-col gap-y-1 md:flex-row md:gap-x-3">
                <BarChartBig />
                <div>Statistics</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:col-span-2">
        <div className="rounded-lg w-auto border-[0.3px] border-neutral-700 bg-neutral-800 hover:shadow-xl hover:shadow-black/70 p-6 text-neutral-300">
          {renderActivePage()}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
