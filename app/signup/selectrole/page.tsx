import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

const SelectRole = () => {
  return (
    <main className="min-h-screen">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 py-20">
          <div className="md:col-start-3 md:col-span-2">
            <div className="flex flex-col gap-y-6 justify-center items-center">
              <Logo />
              <h1 className="text-neutral-300 text-center font-light text-xl md:text-3xl">
                How would you like to join us?
              </h1>
              <Link href={"/signup/selectrole/organizer"}>
                <Button btnlarge label="Organizer" />
              </Link>
              <Link href={"/signup/selectrole/attendee"}>
                <Button btnlarge label="Attendee" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default SelectRole;
