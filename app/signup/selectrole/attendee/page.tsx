"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

const Customer = () => {
  return (
    <main className="min-h-screen">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-20">
          <div className="md:col-start-3 md:col-span-2">
            <div className="flex flex-col gap-y-6 justify-center items-center">
              <Logo />
              <h1 className="text-neutral-300 text-center font-light text-xl md:text-3xl">
                Just one more thing...
              </h1>
              <input
                type="text"
                placeholder="Enter referral (optional)"
                className="w-full px-4 h-[36px] text-neutral-300 bg-neutral-800 border rounded-lg border-neutral-700"
              />
              <Link href={"/signup/selectrole/attendee"}>
                <Button btnlarge label="Finish registration" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Customer;
