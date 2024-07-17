"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useDebounce } from "use-debounce";
import { searchSuggestions } from "@/app/api/api";
import { Suggestion } from "@/types/Event";
import Button from "./Button";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [debouncedQuery] = useDebounce(query, 300);

  const fetchSuggestions = useCallback(async (input: string) => {
    if (input.trim() === "") {
      setSuggestions([]);
      return;
    }
    try {
      const result = await searchSuggestions(input);
      setSuggestions(result);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  }, []);

  useEffect(() => {
    fetchSuggestions(debouncedQuery);
  }, [debouncedQuery, fetchSuggestions]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setQuery(suggestion.text);
    onSearch(suggestion.text);
  };

  return (
    <div className="relative">
      <input
        className="w-full px-4 py-2 text-sm text-neutral-300 bg-neutral-800 border rounded-lg border-neutral-700 focus:border-blue-500 focus:outline-none focus:ring"
        type="text"
        placeholder="Search for events, categories, interests, locations..."
        value={query}
        onChange={handleInputChange}
      />
      <div className="absolute right-2 top-2">
        <Button label="Search" onClick={handleSearch} small />
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 bg-neutral-800 border border-neutral-700 rounded-md shadow-lg">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-neutral-700 cursor-pointer text-neutral-300"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.text}{" "}
              <span className="text-xs text-neutral-400">
                ({suggestion.type})
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
