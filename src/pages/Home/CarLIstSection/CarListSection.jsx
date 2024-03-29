import React from "react";
import carImg1 from "../../../assets/Home/Cars/car-one.png";
// import carImg2 from "../../../assets/Home/Cars/car-two.png";
import carImg3 from "../../../assets/Home/Cars/car-three.png";
import carImg4 from "../../../assets/Home/Cars/car-four.png";
import carImg5 from "../../../assets/Home/Cars/car-five.png";
import carImg6 from "../../../assets/Home/Cars/car-six.png";
import carImg7 from "../../../assets/Home/Cars/car-seven.png";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: carImg1,
    aosDelay: "0",
  },
  // {
  //   name: "KIA UX",
  //   price: 100,
  //   image: carImg2,
  //   aosDelay: 590,
  // },
  {
    name: "KIA UX",
    price: 100,
    image: carImg3,
    aosDelay: "500",
  },
  {
    name: "KIA UX",
    price: 100,
    image: carImg4,
    aosDelay: "600",
  },
  {
    name: "KIA UX",
    price: 100,
    image: carImg5,
    aosDelay: "700",
  },
  {
    name: "KIA UX",
    price: 100,
    image: carImg6,
    aosDelay: "800",
  },
  {
    name: "KIA UX",
    price: 100,
    image: carImg7,
    aosDelay: "900",
  },
];

const CarListSection = () => {
  return (
    <div className="pb-24 pt-12 bg-white dark:bg-dark dark:text-white">
      <div className="container">
        {/* heading */}
        <div className="text-center">
          <h1
            data-aos="fade-up"
            className="text-3xl text-center sm:text-4xl font-semibold font-serif mb-3"
          >
            Our Products
          </h1>
          <p data-aos="fade-up" className="text-sm pb-10 max-w-[500px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
            nihil quia doloremque assumenda. Accusantium ullam nesciunt iusto!
            Veritatis, cupiditate temporibus?
          </p>
        </div>
        {/* car Listing cards */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carList.map((item, index) => (
              <div
                data-aos="fade-up"
                data-aos-duration={item.aosDelay}
                key={index}
                className="text-center group space-y-3 p-3 relative border border-gray-300 rounded-lg"
              >
                <div>
                  <img
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-500"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div>
                  <h2>{item.name}</h2>
                  <p>Price: {item.price}</p>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Voluptatem, alias sequi consectetur unde rem nisi.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div data-aos="fade-up" className="grid place-content-center mt-8">
          <button className="button-outline">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default CarListSection;
