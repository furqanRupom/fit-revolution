import React from "react";
import { FaDumbbell } from "react-icons/fa";
import Image from "next/image";
import bg from "../../public/bodybuilder.jpg";
import logo from "../assets/body-building.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { IoIosArrowRoundForward } from "react-icons/io";
import {motion} from "framer-motion"

const Hero: React.FC = () => {
  return (
    // <section className="h-screen relative flex items-center overflow-hidden">
    //   <div className="absolute inset-0 z-0">
    //     <Image className="pt-14" src={bg} alt="background" fill objectFit="cover" quality={100} />
    //     <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    //   </div>

    //   <div className="z-10 mx-auto text-center text-white">
    //     <div className="flex items-center flex-col mb-6">
    //       <Image className="pl-5" src={logo} alt="body-builder" width={100} height={100} />
    //       <h3 className="pl-5 text-lg font-semibold">Fitness Revolution</h3>
    //     </div>
    //     <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
    //       Start your  training <span className="text-rose-500"> today</span>
    //     </h1>
    //   </div>

    //   <div className="absolute bottom-[20%] left-[50%] transform -translate-x-1/2 m-8">
    //     <button className="flex items-center justify-center  px-4 sm:px-8 md:px-12 py-3 md:py-4 text-lg md:text-xl bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
    //       <FaDumbbell className="mr-2 text-xl" />
    //       Join Now
    //       <IoIosArrowRoundForward className="ml-2 text-xl" />
    //     </button>
    //   </div>
    // </section>

    <section className="">

    <Carousel
      showArrows={true}
      showIndicators={false}
      showThumbs={false}
      dynamicHeight={false}
      autoPlay={true}
      infiniteLoop={true}
      className=" pt-24 md:pt-0  md:min-h-screen flex items-center justify-center overflow-hidden "
    >
      <div>
        <img
          className="object-cover "
          src="https://images.pexels.com/photos/4162548/pexels-photo-4162548.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="Image 1"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="z-10 absolute inset-0 flex justify-start text-white bg-gradient-to-tr from-slate-900/75 via-slate-900/50"
        >
          <div className="max-w-5xl pl-16 pt-12 sm:pt-20 md:pt-44 lg:pl-24  lg:pt-64">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-red-500"></div>
              <h2 className="text-lg  sm:text-3xl font-bold text-white uppercase pb-2">
                Welcome to our company
              </h2>
            </div>
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-[500] text-left text-white">
              <h1>The Best</h1>
              <h2 className="py-1">
                {" "}
                <span className="bg-gradient-to-tr from-red-500 to-rose-500 text-transparent bg-clip-text">
                  Fitness
                </span>{" "}
                Studio
              </h2>
              <h3> in Town</h3>
              <button className="px-8 py-2 md:px-10 md:py-4 rounded shadow-md bg-gradient-to-tr from-red-500 to-rose-500 text-white  text-base md:text-lg mt-6 font-bold uppercase hover:bg-gradient-to-tr hover:from-red-600 hover:to-rose-600 duration-200">
                Join Us
              </button>
            </div>
          </div>
        </motion.div>
      </div>
      <div>
        <img
          className="object-cover"
          src="https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
          alt="Image 2"
        />
        <motion.div initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} className="z-10 absolute inset-0 flex  justify-start text-white bg-gradient-to-tr from-slate-900/75 via-slate-900/50 ">
          <div className="max-w-5xl pl-16 pt-12 sm:pt-20 md:pt-44 lg:pl-24  lg:pt-64">

            <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-red-500"></div>
            <h2 className="text-lg  sm:text-2xl font-bold text-white uppercase pb-2">Welcome to our company</h2>
            </div>
            <div className="text-2xl sm:text-4xl md:text-5xl lg:text-8xl font-[500] text-left  text-white">
              <h1>The Best</h1>
              <h2 className="py-1"> <span className="bg-gradient-to-tr from-red-500 to-rose-500  text-transparent bg-clip-text">Fitness</span> Studio</h2>
              <h3> in Town</h3>

              <button className="px-8 py-2 md:px-10 md:py-4 rounded shadow-md bg-gradient-to-tr from-red-500 to-rose-500 text-white  text-base md:text-lg mt-6 font-bold uppercase hover:bg-gradient-to-tr hover:from-red-600 hover:to-rose-600 duration-200">
                  Join Us
          </button>

            </div>




          </div>
        </motion.div>
      </div>
      <div>
        <img
          className="object-cover"
          src="https://images.pexels.com/photos/1552245/pexels-photo-1552245.jpeg?auto=compress&cs=tinysrgb&w=1200"
          alt="Image 3"
        />
        <motion.div initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }} className="z-10 absolute inset-0 flex  justify-start text-white bg-gradient-to-tr from-slate-900/75 via-slate-900/50 ">
          <div className="max-w-5xl pl-16 pt-12 sm:pt-20 md:pt-44 lg:pl-24  lg:pt-64">

            <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-red-500"></div>
            <h2 className="text-lg  sm:text-2xl font-bold text-white uppercase pb-2">Welcome to our company</h2>
            </div>
            <div className="text-2xl  sm:text-4xl md:text-5xl lg:text-8xl font-[500] text-left  text-white">
              <h1>The Best</h1>
              <h2 className="py-1"> <span className="bg-gradient-to-tr from-red-500 to-rose-500  text-transparent bg-clip-text">Fitness</span> Studio</h2>
              <h3> in Town</h3>

              <button className="px-8 py-2 sm:px-10 sm:py-4 rounded shadow-md bg-gradient-to-tr from-red-500 to-rose-500 text-white  text-base sm:text-lg mt-6 font-bold uppercase hover:bg-gradient-to-tr hover:from-red-600 hover:to-rose-600 duration-200">
                  Join Us
          </button>

            </div>




          </div>
        </motion.div>
      </div>
    </Carousel>

    </section>
  );
};

export default Hero;
