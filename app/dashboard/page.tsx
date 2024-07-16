"use client";

import Container from "@/components/ui/Container";
import DashboardLayout from "@/components/ui/DashboardLayout";
import Navbar from "@/components/ui/Navbar";

const Dashboard = () => {
  return (
    <main className="min-h-screen">
      <Container>
        <Navbar />
        <DashboardLayout />
      </Container>
    </main>
  );
};

export default Dashboard;
