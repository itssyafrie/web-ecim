"use client";

import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";

const Counter = () => {
  const [ticketCount, setTicketCount] = useState<number>(0);
  const onIncrement = () => {
    setTicketCount((prevCount) => prevCount + 1);
  };
  const onDecrement = () => {
    setTicketCount((prevCount) => Math.max(0, prevCount - 1));
  };
  return (
    <div className="grid grid-cols-3 gap-6">
      <div onClick={onDecrement}>
        <MinusCircle />
      </div>
      <div className="text-center">{ticketCount}</div>
      <div onClick={onIncrement}>
        <PlusCircle />
      </div>
    </div>
  );
};

export default Counter;
