import React from "react";
import intro from "../images/tanni5.jpeg";
import background from "../images/background.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGrinTears,
  faHeadset,
  faHeart,
  faHome,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

const Introduction = () => {
  return (
    <>
      <div className="absolute w-full min-h-screen">
        <div>
          <img
            className="absolute z-0 top-0 w-full h-1/2 bg-cover bg-bottom  px-12 text-white text-center"
            src={background}
          />
        </div>
      </div>
      <section className="relative flex justify-center items-center h-auto z-10 min-h-screen">
        <div className="relative max-w-4xl">
          <div class="bg-card"></div>

          <div className="relative md:flex space-x-12 z-20 max-w-4xl bg-white p-12  rounded-md shadow-md">
            <div className="py-4 flex flex-col space-y-6 justify-between">
              <div>
                <p className="text-lg">Hello, I am</p>
                <h1 className=" pt-1  text-5xl font-bold text-gray-800">
                  Shaima tanni
                </h1>
              </div>

              <p className=" text-xl leading-relaxed">
                Frontend web developer who crafts beautiful websites that help
                your business grow online.{" "}
              </p>
              <div className="inline-flex space-x-5 text-gray-600 text-xl">
                <FontAwesomeIcon icon={faHome} />
                <FontAwesomeIcon icon={faLaptopCode} />
                <FontAwesomeIcon icon={faHeart} />
                <FontAwesomeIcon icon={faHeadset} />
              </div>
            </div>
            <img
              className="flex-shrink-0 w-80 rounded-full border-8 border-white shadow-md "
              src={intro}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
