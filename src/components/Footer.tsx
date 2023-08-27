import React from "react";
import bg from "../../public/footer.png"; // Replace with your image path
import { FaLocationDot, FaMessage } from "react-icons/fa6";
import {
  FaDumbbell,
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import {
  MdKeyboardDoubleArrowRight,
  MdMailOutline,
  MdOutlineMessage,
} from "react-icons/md";
import Image from "next/image";

const Footer:React.FC = () => {
  return (
    <footer
      className=" mt-16"
      style={{
        backgroundImage: `url("https://i.ibb.co/7YL1RyR/footer.png")`,

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <section className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto  border-b-2 border-gray-200   lg:h-44">
        <div className="p-3 flex  lg:items-center lg:justify-center space-x-4 border-r-2 border-gray-200">
          <h1 className="text-2xl w-fit h-fit rounded-full text-black bg-white p-5 border">
            <FaLocationDot />
          </h1>

          <div>
            <p className="text-md uppercase font-extrabold pb-1">
              gym location
            </p>
            <p className="text-2xl font-bold">mystery Road,Amsterdam</p>
          </div>
        </div>

        <div className="p-3 flex  lg:items-center lg:justify-center  space-x-4 border-r-2 border-gray-200">
          <h1 className="text-2xl w-fit h-fit rounded-full text-black bg-white p-5 ">
            <FaMessage />
          </h1>

          <div>
            <p className="text-md uppercase font-extrabold pb-1">
              Email address
            </p>
            <p className="text-2xl font-bold">info@fitRevolution.com</p>
          </div>
        </div>

        <div className="p-3 flex  lg:items-center lg:justify-center space-x-4 ">
          <h1 className="text-2xl w-fit h-fit rounded-full text-black bg-white p-5 border">
            <FaPhone />
          </h1>

          <div>
            <p className="text-md uppercase font-extrabold pb-1">
              Phone Number
            </p>
            <p className="text-2xl font-bold">+123 456 789</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <div className="flex items-center space-x-2 text-2xl font-[500] hover:scale-105 duration-200 cursor-pointer w-fit">
            <span className="text-4xl t text-rose-400">
              <FaDumbbell />
            </span>{" "}
            <h3 className="font-semibold"> Fit revolution.</h3>
          </div>
          <p className="text-gray-800 text-sm font-[500] leading-relaxed pt-3">
            A fitness hub, alternatively referred to as a workout center or
            wellness club, is a dedicated space aimed at promoting physical
            health and activity. Such establishments generally provide a variety
            of exercise option
          </p>

          <ul className="flex space-x-2 pt-3">
            <li className="text-white bg-black p-1 hover:text-white hover:bg-rose-500 rounded-md duration-300">
              <FaFacebookF />
            </li>
            <li className="text-white bg-black p-1 hover:text-white hover:bg-rose-500 rounded-md duration-300">
              <FaInstagram />
            </li>
            <li className="text-white bg-black p-1 hover:text-white hover:bg-rose-500 rounded-md duration-300">
              <FaTwitter />
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold">Quick Links</h3>
          <div className="relative w-full h-1 bg-white mt-1">
            <div className="absolute inset-0 w-3/12 bg-gradient-to-tr rounded-full from-slate-900 to-gray-900"></div>
          </div>

          <ul className="pt-4">
            <li className="flex space-x-2 items-center pb-1 font-[500] text-md hover:text-rose-500 cursor-pointer">
              <MdKeyboardDoubleArrowRight />
              <p>About Us</p>
            </li>
            <li className="flex space-x-2 items-center pb-1 font-[500] text-md hover:text-rose-500 cursor-pointer">
              <MdKeyboardDoubleArrowRight />
              <p>Our Mission</p>
            </li>
            <li className="flex space-x-2 items-center pb-1 font-[500] text-md hover:text-rose-500 cursor-pointer">
              <MdKeyboardDoubleArrowRight />
              <p>Meet The Team</p>
            </li>
            <li className="flex space-x-2 items-center pb-1 font-[500] text-md hover:text-rose-500 cursor-pointer">
              <MdKeyboardDoubleArrowRight />
              <p>Contact Us</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-3xl font-bold">Gallery</h3>
          <div className="relative w-full h-1 bg-white mt-1">
            <div className="absolute inset-0 w-[15%] bg-gradient-to-tr rounded-full from-slate-900 to-gray-900"></div>
          </div>

          <div className="max-w-md grid grid-cols-3 gap-2 mt-4">
            <Image
              className="object-cover rounded-2xl"
              src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600"
              width={200}
              height={200}
              alt="gallery"
            />

            <Image
              className="object-cover rounded-2xl"
              src="https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600"
              width={200}
              height={200}
              alt="gallery"
            />

            <Image
              className="object-cover rounded-2xl"
              src="https://images.pexels.com/photos/917653/pexels-photo-917653.jpeg?auto=compress&cs=tinysrgb&w=600"
              width={200}
              height={200}
              alt="gallery"
            />

            <Image
              className="object-cover rounded-2xl"
              src="https://images.pexels.com/photos/1144864/pexels-photo-1144864.jpeg?auto=compress&cs=tinysrgb&w=600"
              width={200}
              height={200}
              alt="gallery"
            />

            <Image
              className="object-cover rounded-2xl"
              src="https://images.pexels.com/photos/927437/pexels-photo-927437.jpeg?auto=compress&cs=tinysrgb&w=600"
              width={200}
              height={200}
              alt="gallery"
            />

            <Image
              className="object-cover rounded-2xl"
              src="https://images.pexels.com/photos/1554824/pexels-photo-1554824.jpeg?auto=compress&cs=tinysrgb&w=600"
              width={200}
              height={200}
              alt="gallery"
            />
          </div>
        </div>

        <div className=" lg:pl-8">
          <h3 className="text-3xl font-bold">NewsLetter</h3>
          <div className="relative w-full h-1 bg-white mt-1">
            <div className="absolute inset-0 w-[15%] bg-gradient-to-tr rounded-full from-slate-900 to-gray-900"></div>
          </div>

          <div className="mt-4 ">
            <p>Get 10% off your first order! Hurry up</p>

            <div className="mt-4 flex items-center space-x-4 bg-white border-2 rounded-md">
              <div className="text-xl pl-2 text-gray-600">
                <MdMailOutline />
              </div>

              <input
                className="py-3 w-full bg-white focus:outline-none outline-none "
                type="text"
                placeholder="Your Email Address"
              />
            </div>

            <button className="px-5  py-4 font-bold  mt-2 uppercase text-white rounded-lg bg-gradient-to-tr from-red-500 to-rose-500 hover:bg-gradient-to-tr hover:from-rose-600 hover:to-red-500 duration-200 transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <p className="text-center py-6 font-[500] mt-12 bg-white">
        Copyright © 2023 FitRevolution All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
