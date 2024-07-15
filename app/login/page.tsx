import LoginButton from "@/components/ui/LoginButton";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

const Login = () => {
  return (
    <main className="min-h-screen py-24 px-12 sm:px-24 md:px-60 lg:px-72 xl:px-96">
      <div className="rounded-lg w-auto ring-1 ring-slate-900/5 bg-neutral-800 hover:shadow-xl py-10">
        <div className="flex flex-row items-center justify-center py-4 px-12">
          <Logo />
        </div>
        <div className="flex flex-col py-4 px-12 gap-y-4">
          <input
            className="pl-4 font-light text-sm text-neutral-400 bg-neutral-900 w-full py-3 hover:shadow-xl transition cursor-pointer rounded-lg ring-1 ring-slate-900/5"
            placeholder="Email"
          />
          <input
            className="pl-4 font-light text-sm text-neutral-400 bg-neutral-900 w-full py-3 hover:shadow-xl transition cursor-pointer rounded-lg ring-1 ring-slate-900/5"
            placeholder="Password"
          />
        </div>
        <LoginButton />
        <div className="flex flex-col py-4 px-12 items-center justify-center gap-y-2">
          <div className="text-neutral-400 text-sm">First time using Ecim?</div>
          <div className="text-blue-500 text-sm hover:underline">
            <Link href={"/signup"}>Sign Up</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
