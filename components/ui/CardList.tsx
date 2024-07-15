import Card from "./Card";

const CardList = () => {
  const events = [
    {
      title: "Music Concert",
      location: "New York, USA",
      imageSrc: "/images/huuhuynh.jpg",
      price: 50000,
      description: "Enjoy a night of great music with top artists.",
    },
    {
      title: "Art Exhibition",
      location: "Paris, France",
      imageSrc: "/images/huuhuynh.jpg",
      price: 300000,
      description: "Experience the finest art from around the world.",
    },
    {
      title: "Cultural expo",
      location: "London, United Kingdom",
      imageSrc: "/images/huuhuynh.jpg",
      price: 300000,
      description: "Experience the finest art from around the world.",
    },
    {
      title: "Art Exhibition",
      location: "Paris, France",
      imageSrc: "/images/huuhuynh.jpg",
      price: 300000,
      description: "Experience the finest art from around the world.",
    },
    {
      title: "Art Exhibition",
      location: "Paris, France",
      imageSrc: "/images/huuhuynh.jpg",
      price: 300000,
      description: "Experience the finest art from around the world.",
    },
    {
      title: "Art Exhibition",
      location: "Paris, France",
      imageSrc: "/images/huuhuynh.jpg",
      price: 300000,
      description: "Experience the finest art from around the world.",
    },
    {
      title: "Art Exhibition",
      location: "Paris, France",
      imageSrc: "/images/huuhuynh.jpg",
      price: 200000,
      description: "Experience the finest art from around the world.",
    },
    {
      title: "Art Exhibition",
      location: "Paris, France",
      imageSrc: "/images/huuhuynh.jpg",
      price: 200000,
      description: "Experience the finest art from around the world.",
    },
  ];

  return (
    <main>
      <div className="py-8 text-2xl md:text-3xl text-white">
        Discover exciting events!
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map((event, index) => (
          <Card
            outline
            key={index}
            title={event?.title}
            location={event?.location}
            imageSrc={event?.imageSrc}
            price={event?.price}
            description={event?.description}
          />
        ))}
      </div>
    </main>
  );
};

export default CardList;
