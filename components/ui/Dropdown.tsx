"use client";

import { ChevronDown, LucideIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface DropdownOption {
  value: string;
  label: string;
  href?: string;
  icon?: LucideIcon;
}

interface DropdownProps {
  options: DropdownOption[];
  onSelect: (value: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );

  const handleToggle = () => setIsOpen(!isOpen);

  const handleSelect = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option.value);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-neutral-700 shadow-sm px-4 py-2 bg-neutral-900 text-sm font-medium text-neutral-400 hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900"
          onClick={handleToggle}
        >
          {selectedOption ? selectedOption.label : placeholder}
          <ChevronDown className="-mr-1 ml-2 h-5 w-5" />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-neutral-800 border-[0.3px] border-neutral-700 ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) =>
              option.href ? (
                <Link key={option.value} href={option.href} passHref>
                  <div
                    className="block px-4 py-2 mx-2 my-2 text-sm rounded-md text-neutral-300 hover:bg-blue-500 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => handleSelect(option)}
                  >
                    {option.icon && <option.icon className="mr-2 h-5 w-5" />}
                    {option.label}
                  </div>
                </Link>
              ) : (
                <Link
                  key={option.value}
                  href="#"
                  className="block px-4 py-2 mx-2 my-2 text-sm rounded-md text-neutral-300 hover:bg-blue-500 hover:text-gray-900"
                  role="menuitem"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSelect(option);
                  }}
                >
                  {option.icon && <option.icon className="mr-2 h-5 w-5" />}
                  {option.label}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
