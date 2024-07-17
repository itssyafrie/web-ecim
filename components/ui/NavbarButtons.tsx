"use client";

import Link from "next/link";
import Button from "./Button";

const NavbarButtons = () => {
  return (
    <main className="hidden md:block">
      <div className="flex flex-row gap-x-4">
        <Link href={"/login"}>
          <Button label="Login" outline />
        </Link>
        <Link href={"/signup"}>
          <Button label="Sign Up" />
        </Link>
      </div>
    </main>
  );
};

export default NavbarButtons;
