import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./globals.css";
// import {QueryClientProvider} from "@tanstack/react-query";
import QueryClientProvider from "@/utils/providers/ReactQueryProviders";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-neutral-900">
      <QueryClientProvider>
        <body className={inter.className}>{children}</body>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </html>
  );
}
