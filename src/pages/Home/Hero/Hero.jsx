import React from "react";
import heroImg1 from "../../../assets/Home/hero_img_01.png";
import heroImg2 from "../../../assets/Home/hero_img_02.png";

const Hero = () => {
  const theme = localStorage.getItem("theme");
  console.log(theme);
  return (
    <div className="dark:bg-black dark:text-white duration-500 relative -z-20">
      <div className="container min-h-[560px]">
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="order-1 sm:order2"
          >
            <img
              className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0, 0, 0, 1)]"
              src={theme === "light" ? heroImg2 : heroImg1}
              alt=""
            />
            {/* {theme === "light" ? (
              <>
                <img
                  src={heroImg1}
                  alt=""
                  className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0, 0, 0, 1)]"
                />
              </>
            ) : (
              <>
                <img
                  src={heroImg2}
                  alt=""
                  className="relative -z-10 max-h-[600px] sm:scale-125 drop-shadow-[2px_20px_6px_rgba(0, 0, 0, 1)]"
                />
              </>
            )} */}
          </div>
          <div>
            <p
              data-aos="fade-up"
              data-aos-duration="600"
              className="text-primary text-2xl font-semibold font-serif"
            >
              Effortless
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-4xl font-semibold font-serif"
            >
              Car Rental
            </h1>
            <p data-aos="fade-up" data-aos-duration="1000">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad,
              consequatur cum? Nobis veniam ratione eveniet animi consequatur
              libero, debitis perspiciatis delectus, necessitatibus rerum optio
              qui facere ullam dolore enim totam?
            </p>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              className="btn bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/20 duration-300"
            >
              Get Started
            </button>
          </div>
        </div>
        time: 35:35
      </div>
    </div>
  );
};

export default Hero;
