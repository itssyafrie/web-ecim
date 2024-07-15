import Button from "./Button";

const Searchbar = () => {
  return (
    <div className="flex flex-row items-center justify-between gap-x-4 my-4">
      <input
        className="pl-4 font-light text-sm text-neutral-400 bg-neutral-800 w-full py-3 hover:shadow-xl hover:shadow-black/70 transition cursor-pointer rounded-lg ring-1 ring-slate-900"
        placeholder="Search"
      />
      <Button label="Search" />
    </div>
  );
};

export default Searchbar;
