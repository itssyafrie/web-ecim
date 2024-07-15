"use client";

interface ReviewCardProps {
  user: string;
  review: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ user, review }) => {
  return (
    <div className="flex flex-col gap-y-4 rounded-lg w-auto border-[0.3px] border-neutral-700 bg-neutral-800 hover:shadow-xl hover:shadow-black/70 p-6 text-neutral-300">
      <div className="text-lg font-medium">{user}</div>
      <div className="text-sm text-justify font-light">{review}</div>
    </div>
  );
};

export default ReviewCard;
