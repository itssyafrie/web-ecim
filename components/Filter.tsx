import React, { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    title: "",
    category: "",
    interest: "",
    city: "",
    state: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    onFilterChange({ ...filters, [name]: value });
  };

  return (
    <div className="flex flex-col gap-y-4">
      <input
        name="title"
        value={filters.title}
        onChange={handleChange}
        className="pl-4 font-light text-sm text-neutral-400 bg-neutral-800 w-full py-3 hover:shadow-xl hover:shadow-black/70 transition cursor-pointer rounded-lg ring-1 ring-slate-900"
        placeholder="Filter by title"
      />
      <input
        name="category"
        value={filters.category}
        onChange={handleChange}
        className="pl-4 font-light text-sm text-neutral-400 bg-neutral-800 w-full py-3 hover:shadow-xl hover:shadow-black/70 transition cursor-pointer rounded-lg ring-1 ring-slate-900"
        placeholder="Filter by category"
      />
      <input
        name="interest"
        value={filters.interest}
        onChange={handleChange}
        className="pl-4 font-light text-sm text-neutral-400 bg-neutral-800 w-full py-3 hover:shadow-xl hover:shadow-black/70 transition cursor-pointer rounded-lg ring-1 ring-slate-900"
        placeholder="Filter by interest"
      />
      <input
        name="city"
        value={filters.city}
        onChange={handleChange}
        className="pl-4 font-light text-sm text-neutral-400 bg-neutral-800 w-full py-3 hover:shadow-xl hover:shadow-black/70 transition cursor-pointer rounded-lg ring-1 ring-slate-900"
        placeholder="Filter by city"
      />
      <input
        name="state"
        value={filters.state}
        onChange={handleChange}
        className="pl-4 font-light text-sm text-neutral-400 bg-neutral-800 w-full py-3 hover:shadow-xl hover:shadow-black/70 transition cursor-pointer rounded-lg ring-1 ring-slate-900"
        placeholder="Filter by state"
      />
    </div>
  );
};

export default Filter;
