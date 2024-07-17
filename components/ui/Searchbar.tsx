"use client";

import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import Button from "./Button";

const Searchbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  const [debouncedSearchValue] = useDebounce(searchValue, 500);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (debouncedSearchValue) {
        const response = await fetch(
          `/api/v1/event/suggestions?query=${debouncedSearchValue}`
        );
        const data = await response.json();
        setSuggestions(data);
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [debouncedSearchValue]);

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    setSelectedSuggestion(null);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchValue(suggestion.label);
    setSelectedSuggestion(suggestion);
    setSuggestions([]);
  };

  const handleSearch = async () => {
    if (selectedSuggestion) {
      const { type, value } = selectedSuggestion;
      const response = await fetch(`/api/v1/event?${type}=${value}`);
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <div className="flex flex-col items-center justify-between gap-y-4 my-4">
      <div className="relative w-full">
        <input
          value={searchValue}
          onChange={handleSearchValueChange}
          className="pl-4 font-light text-sm text-neutral-400 bg-neutral-800 w-full py-3 hover:shadow-xl hover:shadow-black/70 transition cursor-pointer rounded-lg ring-1 ring-slate-900"
          placeholder="Search by title, category, interest, city, or state"
        />
        {suggestions.length > 0 && (
          <ul className="absolute bg-neutral-800 border border-neutral-700 w-full mt-1 rounded-lg max-h-60 overflow-y-auto">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.value}
                className="px-4 py-2 hover:bg-neutral-700 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      <Button label="Search" onClick={handleSearch} />
    </div>
  );
};

export default Searchbar;
