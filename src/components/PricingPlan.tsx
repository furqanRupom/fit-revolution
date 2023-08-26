import React from "react";
import freeImg from "../assets/water.png";
import memberImg from "../assets/gym (3).png";
import premiumImg from "../assets/gym-station.png";
import { MdOutlineVerified } from "react-icons/md";
import Image from "next/image";

const PricingPlan: React.FC = () => {
  return (
    <section className="mt-20 mb-8 ">
      <h1 className=" text-3xl  text-center lg:text-3xl py-24 xl:text-5xl font-bold ">
        Our Pricing<span className="text-rose-500"> Plans</span>
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 gap-y-[75px] lg:gap-y-0 lg:gap-10 max-w-7xl mx-auto pt-12">
        <div className="relative bg-white p-12 shadow-md rounded-3xl">
          <div className="absolute -top-[10%] rotate-12 ring ring-white  left-8 bg-white p-3 rounded-lg shadow-xl">
            <Image src={freeImg} alt="free img" />
          </div>

          <div className="pt-3">
            <h3 className="text-3xl font-bold">Basic Membership</h3>

            <div className="py-4">
              <h1 className="text-7xl font-bold relative">
                <span className="text-[20px] absolute top-0 -left-4">$</span>$19
                <span className="text-xl text-rose-500">/month</span>
              </h1>

              <div className="w-full h-[0.10rem] bg-gray-300 mt-5 mb-3"></div>

              <p className="leading-relaxed text-gray-400 text-md">
                Explore our Basic Membership tier, granting you entry to the
                gym's standard facilities and services
              </p>

              <ul className="pt-3">
                <li className="flex items-center space-x-2 pb-2">
                  <div className="text-rose-500">
                    <MdOutlineVerified />
                  </div>
                  <p>15 trainings</p>
                </li>
                <li className="flex items-center space-x-2 pb-2">
                  <div className="text-rose-500">
                    <MdOutlineVerified />
                  </div>
                  <p>Free use of showers and lockers</p>
                </li>
                <li className="flex items-center space-x-2 pb-2">
                  <div className="text-rose-500">
                    <MdOutlineVerified />
                  </div>
                  <p>Experienced & Competent Personnel</p>
                </li>
                <li className="flex items-center space-x-2 pb-2">
                  <div className="text-rose-500">
                    <MdOutlineVerified />
                  </div>
                  <p>Free parking facilities</p>
                </li>
              </ul>



              <button className="px-7 lg:px-10 py-4 font-bold  lg:text-md mt-6 uppercase text-white rounded-lg bg-gradient-to-tr from-red-500 to-rose-500 hover:bg-gradient-to-tr hover:from-rose-600 hover:to-red-500 duration-200 transition-all">
              Opt for this membership
              </button>
            </div>
          </div>
        </div>





        <div className="relative bg-white p-12 shadow-md rounded-3xl">
          <div className="absolute -top-[10%] rotate-12 ring ring-white  left-8 bg-white p-3 rounded-lg shadow-xl">
            <Image src={memberImg} alt="free img" />
          </div>
          <div className="pt-3">
            <h3 className="text-3xl font-bold">Standard Membership</h3>

            <div className="py-4">
              <h1 className="text-7xl font-bold relative">
                <span className="text-[20px] absolute top-0 -left-4">$</span>$49
                <span className="text-xl text-rose-500">/month</span>
              </h1>

              <div className="w-full h-[0.10rem] bg-gray-300 mt-5 mb-3"></div>

              <p className="leading-relaxed text-gray-400 text-md">
              Uncover the benefits of our Standard Membership package, offering entry to the gym's essential facilities and services
              </p>

              <ul className="pt-3">
                <li className="flex items-center space-x-2 pb-2">
                  <div className="text-rose-500">
                    <MdOutlineVerified />
                  </div>
                  <p>30 trainings</p>
                </li>
                <li className="flex items-center space-x-2 pb-2">
                  <div className="text-rose-500">
                    <MdOutlineVerified />
                  </div>
                  <p>Complimentary showers & lockers.</p>
                </li>
                <li className="flex items-center space-x-2 pb-2">
                  <div className="text-rose-500">
                    <MdOutlineVerified />
                  </div>
                  <p>join group fitness classes.</p>
                </li>
                <li className="flex items-center space-x-2 pb-2">
                  <div className="text-rose-500">
                    <MdOutlineVerified />
                  </div>
                  <p> Enjoy  personal training session.</p>
                </li>
              </ul>



              <button className="px-7 lg:px-10 py-4 font-bold  lg:text-md mt-6 uppercase text-white rounded-lg bg-gradient-to-tr from-red-500 to-rose-500 hover:bg-gradient-to-tr hover:from-rose-600 hover:to-red-500 duration-200 transition-all">
              Opt for this membership
              </button>
            </div>
          </div>
        </div>




        <div className="relative bg-white p-12 shadow-md rounded-3xl">
          <div className="absolute -top-[10%] rotate-12  left-8 ring ring-white  bg-white p-3 rounded-lg shadow-xl">
            <Image src={premiumImg} alt="free img" />
          </div>


          <div className="pt-3">
            <h3 className="text-3xl font-bold">Premium Membership</h3>

            <div className="py-4">
              <h1 className="text-7xl font-bold relative">
                <span className="text-[20px] absolute top-0 -left-4">$</span>$99
                <span className="text-xl text-rose-500">/month</span>
              </h1>

              <div className="w-full h-[0.10rem] bg-gray-300 mt-5 mb-3"></div>

              <p className="leading-relaxed text-gray-400 text-md">
              Elevate your membership to Premium level, gaining entry to top-notch gym facilities and personalized services
              </p>

              <ul className="pt-3">
                <li className="flex items-center space-x-2 pb-2">
                  <div className="text-rose-500">
                    <MdOutlineVerified />
                  </div>
                  <p>50 trainings</p>
                </li>
                <li className="flex items-center space-x-2 pb-2">
                  <div className="text-rose-500">
                    <MdOutlineVerified />
                  </div>
                  <p>Proficient & Dependable Crew.</p>
                </li>
                <li className="flex items-center space-x-2 pb-2">
                  <div className="text-rose-500">
                    <MdOutlineVerified />
                  </div>
                  <p>Unlimited classes and workshops</p>
                </li>
                <li className="flex items-center space-x-2 pb-2">
                  <div className="text-rose-500">
                    <MdOutlineVerified />
                  </div>
                  <p>Complimentary spa and relaxation area</p>
                </li>
              </ul>



              <button className="px-7 lg:px-10 py-4 font-bold  lg:text-md mt-6 uppercase text-white rounded-lg bg-gradient-to-tr from-red-500 to-rose-500 hover:bg-gradient-to-tr hover:from-rose-600 hover:to-red-500 duration-200 transition-all">
              Opt for this membership
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PricingPlan;
