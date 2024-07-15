import Logo from "./Logo";
import NavbarButtons from "./NavbarButtons";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between py-4 border-b border-neutral-800">
      <Logo />
      <NavbarButtons />
    </nav>
  );
};

export default Navbar;
