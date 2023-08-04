import React from "react";
import { FaDumbbell } from 'react-icons/fa';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Image from "next/image";
import bg from "../../public/bodybuilder.jpg";
import logo from '../assets/body-building.png';

const Hero = () => {
  return (
    <section className="h-screen relative flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image className="pt-14" src={bg} alt="background" fill objectFit="cover" quality={100} />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className="z-10 mx-auto text-center text-white">
        <div className="flex items-center flex-col mb-6">
          <Image className="pl-5" src={logo} alt="body-builder" width={100} height={100} />
          <h3 className="pl-5 text-lg font-semibold">Fitness Revolution</h3>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Start your  training <span className="text-rose-500"> today</span>
        </h1>
      </div>

      <div className="absolute bottom-[20%] left-[50%] transform -translate-x-1/2 m-8">
        <button className="flex items-center justify-center  px-4 sm:px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
          <FaDumbbell className="mr-2 text-xl" />
          Join Now
          <IoIosArrowRoundForward className="ml-2 text-xl" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
