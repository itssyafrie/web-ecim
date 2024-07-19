"use client";

import { MinusCircle, PlusCircle } from "lucide-react";

interface CounterProps {
  value: number;
  onChange: (newValue: number) => void;
}

const Counter: React.FC<CounterProps> = ({ value, onChange }) => {
  const onIncrement = () => {
    onChange(value + 1);
  };

  const onDecrement = () => {
    onChange(Math.max(0, value - 1));
  };

  return (
    <div className="grid grid-cols-3 gap-6">
      <div onClick={onDecrement} className="cursor-pointer">
        <MinusCircle />
      </div>
      <div className="text-center">{value}</div>
      <div onClick={onIncrement} className="cursor-pointer">
        <PlusCircle />
      </div>
    </div>
  );
};

export default Counter;
