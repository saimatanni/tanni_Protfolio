import React from "react";
import work1 from "../images/work1.png";
import work2 from "../images/crud.png";
import work3 from "../images/work3.png";
import work4 from "../images/work4.png";
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
                <h3 class="font-bold text-2xl">Hello Girls</h3>
                <p class="pt-3">
                  This is an E-commerce website, Here you can see girls all kind of dress, and order your desire dress.
                </p>
                <a
                  href="https://github.com/saimatanni/React_E_Commerce"
                  class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                >
                  View More
                </a>
              </div>
            </div>

         

            <div className="shadow-md rounded-md">
              <img className="h-80 w-full object-cover" src={work3} />
              <div class="p-8">
                <h3 class="font-bold text-2xl">Tanni's Shop</h3>
                <p class="pt-3">
                  Hrere You can see all kinds of nessery products like bag, jewellery, dress, hats and their description.
                </p>
                <a
                  href="https://github.com/saimatanni/tanni-s-shop-redux-Store-"
                  class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                >
                  View More
                </a>
              </div>
            </div>

            <div className="shadow-md rounded-md">
              <img className="h-80 w-full object-cover" src={work2} />
              <div class="p-8">
                <h3 class="font-bold text-2xl">Task Assign</h3>
                <p class="pt-3">
                  Here actually I done crud_operation. You assign , edit, delete and make as complete the task
                </p>
                <a
                  href="https://github.com/saimatanni/crud_operation"
                  class="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-md shadow-md text-sm font-bold text-white"
                >
                  View More
                </a>
              </div>
            </div>

            <div className="shadow-md rounded-md lg:col-span-2">
              <img className="h-80 w-full object-cover" src={work4} />
              <div class="p-8">
                <h3 class="font-bold text-2xl">Food APP</h3>
                <p class="pt-3">
                  You order food, increase quantity and add to cart. 
                </p>
                <a
                  href="https://github.com/saimatanni/food_order_app"
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
