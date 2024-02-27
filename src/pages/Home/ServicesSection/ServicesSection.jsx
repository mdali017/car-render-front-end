import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { FaRegEdit } from "react-icons/fa";

const skillData = [
  {
    name: "Best Price",
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam tenetur ipsa nostrum!",
    aosDelay: "500",
  },
  {
    name: "Fast and Safe",
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam tenetur ipsa nostrum!",
    aosDelay: "800",
  },
  {
    name: "Experience Drivers",
    icon: (
      <FaRegEdit className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam tenetur ipsa nostrum!",
    aosDelay: "1000",
  },
];

const ServicesSection = () => {
  return (
    <div className="py-14 dark:bg-black dark:text-white sm:min-h-[450px]">
      <div className="container">
        <div className="pb-12">
          <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">
            Why Choose Us
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skillData.map((item, index) => (
            <div
              data-aos="fade-up"
              className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 hover:bg-primary duration-300 text- hover:text-black rounded-lg"
              data-aos-delay={item.aosDelay}
              key={index}
            >
              <div className="grid place-items-center ">{item.icon}</div>
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <a href={item.link}>Learn More</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
