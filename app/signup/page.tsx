import SignupForm from "@/components/forms/SignupForm";
import Logo from "@/components/ui/Logo";
import SignUpButton from "@/components/ui/SignUpButton";
import Link from "next/link";

const SignUp = () => {
  return (
    <main className="min-h-screen py-24 px-12 sm:px-24 md:px-60 lg:px-72 xl:px-96">
      <div className="rounded-lg w-auto ring-1 ring-slate-900/5 bg-neutral-800 hover:shadow-xl py-10">
        <div className="flex flex-row items-center justify-center py-4 px-12">
          <Logo />
        </div>
        <div className="py-4 px-12">
          <SignupForm />
        </div>
        <SignUpButton />
        <div className="flex flex-col py-4 px-12 items-center justify-center gap-y-2">
          <div className="text-neutral-400 text-sm">
            Already have an account?
          </div>
          <div className="text-blue-500 text-sm hover:underline">
            <Link href={"/login"}>Login</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
