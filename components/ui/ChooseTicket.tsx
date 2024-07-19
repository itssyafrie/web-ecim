"use client";

import React, { useState, useEffect } from "react";
import Button from "./Button";
import Counter from "./Counter";
import Dropdown from "./Dropdown";
import { EventEntity, EventOffering } from "@/types/types";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

interface ChooseTicketProps {
  offerings: EventOffering[];
}

const ChooseTicket: React.FC<ChooseTicketProps> = ({ offerings }) => {
  const [vipCount, setVipCount] = useState(0);
  const [festivalCount, setFestivalCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const VIP_PRICE = 3477000;
  const FESTIVAL_PRICE = 997000;

  useEffect(() => {
    const newTotal = vipCount * VIP_PRICE + festivalCount * FESTIVAL_PRICE;
    setTotalPrice(newTotal);
  }, [vipCount, festivalCount]);

  const handleSelect = (value: string) => {
    console.log("Selected", value);
    // Here you can add logic to apply voucher discounts
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="rounded-lg w-auto border-[0.3px] border-neutral-700 bg-neutral-800 text-neutral-300 hover:shadow-xl hover:shadow-black/70 p-6">
        <div className="text-xl font-medium">Select Your Ticket</div>
        {offerings &&
          offerings.map((offer) => (
            <>
              <div className="font-medium pt-8">{offer.name}</div>
              <div className="font-light">
                <div className="flex flex-row items-center justify-between pb-3">
                  <div>{formatPrice(offer.price)}</div>
                  <Counter
                    value={vipCount}
                    onChange={(newValue) => setVipCount(newValue)}
                  />
                </div>
              </div>
            </>
          ))}
        <div className="font-medium pt-8">FESTIVAL</div>
        <div className="font-light">
          <div className="flex flex-row items-center justify-between">
            <div>{formatPrice(FESTIVAL_PRICE)}</div>
            <Counter
              value={festivalCount}
              onChange={(newValue) => setFestivalCount(newValue)}
            />
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
        <div className="text-xl font-bold">{formatPrice(totalPrice)}</div>
      </div>
      <Button label="Buy Ticket" />
    </div>
  );
};

export default ChooseTicket;
