import ReviewCard from "./ReviewCard";

const ReviewList = () => {
  const reviews = [
    {
      user: "Sukonto",
      review:
        "The Sunset Music Festival at Marina Bay Sands was a vibrant celebration of music, lights, and energy. The festival boasted a stellar lineup of DJs and electronic music artists, keeping the crowd dancing from dusk till dawn. The Marina Bay Sands backdrop added a touch of luxury to the experience, making it an unforgettable night.",
    },
    {
      user: "Sukonto",
      review:
        "The Sunset Music Festival at Marina Bay Sands was a vibrant celebration of music, lights, and energy. The festival boasted a stellar lineup of DJs and electronic music artists, keeping the crowd dancing from dusk till dawn. The Marina Bay Sands backdrop added a touch of luxury to the experience, making it an unforgettable night.",
    },
    {
      user: "Sukonto",
      review:
        "The Sunset Music Festival at Marina Bay Sands was a vibrant celebration of music, lights, and energy. The festival boasted a stellar lineup of DJs and electronic music artists, keeping the crowd dancing from dusk till dawn. The Marina Bay Sands backdrop added a touch of luxury to the experience, making it an unforgettable night.",
    },
    {
      user: "Sukonto",
      review:
        "The Sunset Music Festival at Marina Bay Sands was a vibrant celebration of music, lights, and energy. The festival boasted a stellar lineup of DJs and electronic music artists, keeping the crowd dancing from dusk till dawn. The Marina Bay Sands backdrop added a touch of luxury to the experience, making it an unforgettable night.",
    },
    {
      user: "Sukonto",
      review:
        "The Sunset Music Festival at Marina Bay Sands was a vibrant celebration of music, lights, and energy. The festival boasted a stellar lineup of DJs and electronic music artists, keeping the crowd dancing from dusk till dawn. The Marina Bay Sands backdrop added a touch of luxury to the experience, making it an unforgettable night.",
    },
  ];
  return (
    <main>
      <div className="pt-8 pb-4 text-2xl md:text-3xl text-white">Reviews</div>
      <div className="flex flex-col items-center gap-y-4">
        {reviews.map((review, index) => (
          <ReviewCard key={index} user={review.user} review={review.review} />
        ))}
      </div>
    </main>
  );
};

export default ReviewList;
