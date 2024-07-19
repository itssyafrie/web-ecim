"use client";

import React, { useState, useEffect, useRef } from "react";
import { useDebounce } from "use-debounce";
import useSuggestion from "@/hooks/event/useSuggestion";
import { EventSuggestion } from "@/types/types";
import { Loader } from "lucide-react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 300);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const { events, isLoading, isError, error } =
    useSuggestion(debouncedSearchTerm);

  console.log("searchbar", events);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setShowSuggestions(!!debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSuggestionClick = (suggestion: EventSuggestion) => {
    setSearchTerm(suggestion.title);
    setShowSuggestions(false);
  };

  return (
    <div className="relative w-full" ref={searchRef}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search events..."
        className="w-full px-4 py-2 border-[0.3px] border-neutral-700 bg-neutral-900 text-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {showSuggestions && (
        <div className="absolute w-full mt-1 text-neutral-300 bg-neutral-900 border rounded-md shadow-lg">
          {isLoading && (
            <div className="flex justify-center items-center h-16">
              <Loader color="#3b82f6" className="w-8 h-8 animate-spin" />
            </div>
          )}
          {isError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-md">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error?.message}</span>
            </div>
          )}
          {!isLoading &&
            !isError &&
            events &&
            events.length > 0 &&
            events.slice(0, 5).map((suggestion) => (
              <div
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
                className="p-2 hover:bg-blue-500 cursor-pointer"
              >
                {suggestion.title}
              </div>
            ))}
          {!isLoading &&
            !isError &&
            (!events || events.length === 0) &&
            debouncedSearchTerm && (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded-md">
                <strong className="font-bold">Not Found:</strong>
                <span className="block sm:inline"> No events found.</span>
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
