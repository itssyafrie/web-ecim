import { eventEntity } from "@/types/types";

interface Card2Props {
  eventEntity: eventEntity;
  outline?: boolean;
  small?: boolean;
}

const Card2: React.FC<Card2Props> = ({ eventEntity, outline, small }) => {
  const {
    id,
    title,
    description,
    imageSrc,
    location,
    category,
    interest,
    offering,
    price,
  } = eventEntity;

  return (
    <div
      className={`rounded-lg w-auto border-[0.3px] border-neutral-700 hover:ring-1 hover:ring-slate-900/5 hover:shadow-xl hover:shadow-black/70
        ${outline ? "bg-neutral-800" : "bg-blue-500"} 
        ${outline ? "text-neutral-300" : "text-black"}
        ${small ? "py-2" : "py-4"}
        ${small ? "px-2" : "px-4"}
        ${small ? "text-sm" : "text-md"}
        ${small ? "font-light" : "font-medium"}`}
    >
      <div className="pb-4">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded"
        />
      </div>
      <div className="text-xl">{title}</div>
      <div className="font-light text-sm text-neutral-400">
        {location.street1}
      </div>
      <div className="font-light text-sm text-neutral-400">
        {location.street2}
      </div>
      <div className="font-light text-sm text-neutral-400">{location.city}</div>
      <div className="font-light text-sm text-neutral-400">
        {location.state}
      </div>
      <div className="pt-5 font-light text-sm text-neutral-300 text-justify">
        {description}
      </div>
      <div className="text-light text-lg text-neutral-300 font-light pt-4">
        {price}
      </div>
    </div>
  );
};

export default Card2;
