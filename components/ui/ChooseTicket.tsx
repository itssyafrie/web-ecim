"use client";

import Button from "./Button";
import Counter from "./Counter";
import Dropdown from "./Dropdown";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const ChooseTicket: React.FC = () => {
  const handleSelect = (value: string) => {
    console.log("Selected", value);
  };
  return (
    <div className="flex flex-col gap-y-4">
      <div className="rounded-lg w-auto border-[0.3px] border-neutral-700 bg-neutral-800 text-neutral-300 hover:shadow-xl hover:shadow-black/70 p-6">
        <div className="text-xl font-medium">Select Your Ticket</div>
        <div className="font-medium pt-8">VIP</div>
        <div className="font-light">
          <div className="flex flex-row items-center justify-between pb-3">
            <div>Rp 3477000</div>
            <Counter />
          </div>
        </div>
        <div className="font-medium pt-8">FESTIVAL</div>
        <div className="font-light">
          <div className="flex flex-row items-center justify-between">
            <div>Rp 997000</div>
            <Counter />
          </div>
        </div>
        <div className="py-10">
          <hr className="border-[0.3px] border-neutral-700" />
        </div>
        <div className="font-medium pb-3">Voucher</div>
        <div className="flex justify-end">
          <Dropdown options={options} onSelect={handleSelect} />
        </div>
        <div className="font-medium pt-8 pb-3">Total</div>
      </div>
      <Button label="Buy Ticket" />
    </div>
  );
};

export default ChooseTicket;
