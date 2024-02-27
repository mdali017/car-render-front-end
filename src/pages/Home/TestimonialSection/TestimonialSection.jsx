import React from "react";

const testimonialData = [
  {
    id: 1,
    name: "Dishad",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est,
        voluptatum ipsum saepe voluptatem minus sit error tempora vero ut?`,
    aosDelay: "0",
  },
  {
    id: 2,
    name: "Satya",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est,
        voluptatum ipsum saepe voluptatem minus sit error tempora vero ut?`,
    aosDelay: "300",
  },
  {
    id: 3,
    name: "Alexa",
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est,
        voluptatum ipsum saepe voluptatem minus sit error tempora vero ut?`,
    aosDelay: "1000",
  },
  // {
  //     id: 4,
  //     name: "Alex",
  //     image: "",
  //     description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est,
  //     voluptatum ipsum saepe voluptatem minus sit error tempora vero ut?`,
  //     aosDelay: "0"
  // },
];

const TestimonialSection = () => {
  return (
    <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
      <div className="container">
        {/* header part */}
        <div className="space-y-4 pb-12">
          <p className="text-3xl font-semibold text-center sm:text-4xl font-serif">
            What Our Clients Say About Us
          </p>
          <p data-aos="fade-up" className="text-center sm:px-44">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa est,
            voluptatum ipsum saepe voluptatem minus sit error tempora vero ut?
          </p>
        </div>
        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-8 text-black dark:text-white">
          {testimonialData.map((item) => (
            <div
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              key={item.id}
              className="card text-center group space-y-6 p-6 bg-gray-100 dark:bg-white/20 sm:py-12 duration-300 rounded-lg"
            >
              <div className=" grid place-items-center">
                <img
                  className="w-20 h-20 rounded-full"
                  src={item.image}
                  alt="Person Image"
                />
              </div>
              <div className="text-center">⭐⭐⭐⭐⭐</div>
              <p>{item.description}</p>
              <p className="font-semibold text-center">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
