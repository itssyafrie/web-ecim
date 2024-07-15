import Link from "next/link";
import Button from "./Button";

const NavbarButtons = () => {
  return (
    <main className="flex flex-row gap-x-4">
      <Link href={"/login"}>
        <Button label="Login" outline />
      </Link>
      <Link href={"/signup"}>
        <Button label="Sign Up" />
      </Link>
    </main>
  );
};

export default NavbarButtons;
