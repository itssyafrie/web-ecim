"use client";

interface ButtonProps {
  label: string;
  btnlarge?: boolean;
  outline?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, btnlarge, outline, small }) => {
  return (
    <button
      className={`rounded-lg hover:opacity-80 
      ${btnlarge ? "w-full" : "w-auto"}
      ${outline ? "bg-neutral-900" : "bg-blue-500"} 
      ${outline ? "border-neutral-300" : "border-none"}
      ${outline ? "text-neutral-300" : "text-black"}
      ${small ? "py-1" : "py-2"}
      ${small ? "px-1" : "px-2"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "font-light" : "font-medium"}
      ${small ? "border-[0.5px]" : "border-[1px]"}`}
    >
      {label}
    </button>
  );
};

export default Button;
