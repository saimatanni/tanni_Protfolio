import React from "react";
import work1 from "../images/work1.jpg";
import work2 from "../images/work2.jpg";
import work3 from "../images/work3.jpg";
import work4 from "../images/work4.jpg";
const Work = () => {
  return (
    <div>
      <section class="py-20 px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center">
            <h1 class="text-6xl font-bold text-gray-800">Work</h1>
            <p class="pt-2">The best of my works</p>
          </div>
          <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">
            <div className="shadow-md rounded-md lg:col-span-2">
              <img className="h-80 w-full object-cover" src={work1} />
              <div class="p-8">
                <h3 class="font-bold text-2xl">Work Title</h3>
                <p class="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat sequi minima vero sunt perferendis.
                </p>
                <a
                  href="#"
                  class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                >
                  View More
                </a>
              </div>
            </div>

         

            <div className="shadow-md rounded-md">
              <img className="h-80 w-full object-cover" src={work2} />
              <div class="p-8">
                <h3 class="font-bold text-2xl">Work Title</h3>
                <p class="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat sequi minima vero sunt perferendis.
                </p>
                <a
                  href="#"
                  class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                >
                  View More
                </a>
              </div>
            </div>

            <div className="shadow-md rounded-md">
              <img className="h-80 w-full object-cover" src={work3} />
              <div class="p-8">
                <h3 class="font-bold text-2xl">Work Title</h3>
                <p class="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat sequi minima vero sunt perferendis.
                </p>
                <a
                  href="#"
                  class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                >
                  View More
                </a>
              </div>
            </div>

            <div className="shadow-md rounded-md lg:col-span-2">
              <img className="h-80 w-full object-cover" src={work4} />
              <div class="p-8">
                <h3 class="font-bold text-2xl">Work Title</h3>
                <p class="pt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat sequi minima vero sunt perferendis.
                </p>
                <a
                  href="#"
                  class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
