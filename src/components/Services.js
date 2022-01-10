import { faMobile,faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const Services = () => {
  return (
    <div className="bg-gray-50 px-6 pt-20 pb-28 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center ">
          <h2 className="text-6xl font-bold text-gray-800">Services</h2>
          <p className="pt-2">Here's what I offer</p>
        </div>
      </div>
      <div className=" mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-16 ">
        <div className="relative">
          <div className="bg-card"></div>
          <div className="relative z-20 bg-white p-12 rounded-md shadow-md">
            <FontAwesomeIcon
              className="text-5xl text-cyan-500"
              icon={faMobile}
            />
            <h3 className="mt-3 text-2xl font-bold">Responsive website</h3>
            <p className="mt-4 ">
            My favorite part is the ability to help brands figure out who they are through design. I love how colors and font can completely transform a website into something beautiful and inspiring. Vivid imagery
             and a fresh layout can help a brand tell its story more effectively
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="bg-card"></div>
          <div className="relative z-20 bg-white p-12 rounded-md shadow-md">
            <FontAwesomeIcon
              className="text-5xl text-cyan-500"
              icon={faLayerGroup}
            />
            <h3 className="mt-3 text-2xl font-bold">Web Apps</h3>
            <p className="mt-4 ">
            As a Frontend Developer I ensure that website visitors can easily interact with the page
            I do this through the combination of design, technology and programming to code a
             website's appearance, as well as taking care of debugging.
            
            </p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Services;
