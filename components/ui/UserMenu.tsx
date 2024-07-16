"use client";

import Dropdown from "./Dropdown";

const options = [
  { value: "home", label: "Home", href: "/" },
  { value: "myevents", label: "My Events", href: "/events" },
  { value: "dashboard", label: "Dashboard", href: "/dashboard" },
];

const UserMenu: React.FC = () => {
  const handleSelect = (value: string) => {
    console.log("Selected", value);
  };
  return (
    <div>
      <Dropdown options={options} onSelect={handleSelect} placeholder="Menu" />
    </div>
  );
};

export default UserMenu;
