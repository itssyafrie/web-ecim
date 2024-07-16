"use client";

import Logo from "./Logo";
import NavbarButtons from "./NavbarButtons";
import UserMenu from "./UserMenu";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between py-4 border-b border-neutral-800">
      <Logo />
      <NavbarButtons />
      <UserMenu />
    </nav>
  );
};

export default Navbar;
