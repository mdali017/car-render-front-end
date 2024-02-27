import React from "react";
import image from "../../../assets/Home/hero_img_01.png";

const AboutSection = () => {
  return (
    <div className="dark:bg-black bg-slate-200 dark:text-white duration-300 sm:min-h-[400px] sm:grid sm:place-items-center">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div>
            {/* Todo: Change Car */}
            <img
              data-aos="slide-right"
              data-aos-duration="1500"
              data-aos-once="false"
              className="sm:scale-105 sm:-translate-x-11 max-h-[300px] drop-shadow-xl"
              src={image}
              alt=""
            />
          </div>
          <div className="space-y-5 sm:p-16 pb-6">
            <h1
              data-aos="fade-up"
              className="text-3xl sm:text-4xl font-bold font-serif"
            >
              About Us
            </h1>
            <p data-aos="fade-up">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              eligendi iste similique nemo nesciunt.
            </p>
            <p data-aos="fade-up">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
              totam?
            </p>
            <button data-aos="fade-up" className="button-outline ">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
