import Image from "next/image";
import icons1 from "../assets/icons/treadmill.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";

const Service = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="h-screen mt-48 mb-24 ">
      <h1 className=" text-2xl  text-center lg:text-3xl py-12 xl:text-5xl font-bold ">
        Services we<span className="text-rose-500"> Provide</span>
      </h1>

      <Slider {...settings} className="">
        <div className="px-4">
          <div className="   hover:shadow-lg   bg-gray-50 rounded-2xl hover:scale-105 duration-300 p-6 group hover:bg-white">
            <div className="p-5 bg-white rounded-lg shadow w-fit">
              <Image src={icons1} alt="icons1" />
            </div>

            <h3 className="text-3xl font-bold py-3">We provide treadmills</h3>
            <p className="leading-relaxed text-gray-600 text-lg py-4">
              We offer a variety of treadmills to cater to your fitness goals.
              Enhance your workouts with our diverse range of treadmill options
            </p>

            <div className="flex items-center space-x-2">
              <div className="p-3 group-hover:bg-rose-500 group-hover:text-white duration-200 rounded-full w-fit bg-white text-rose-500">
                <FaArrowLeft />
              </div>
              <button className="text-lg font-bold relative group uppercase">
                Read More
                <div className="absolute w-1 h-[0.15rem] bottom-0 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="px-4">
        <div className="   hover:shadow-lg   bg-gray-50 rounded-2xl hover:scale-105 duration-300 p-6 group hover:bg-white">
            <div className="p-5 bg-white rounded-lg shadow w-fit">
              <Image src={icons1} alt="icons1" />
            </div>

            <h3 className="text-3xl font-bold py-3">We provide treadmills</h3>
            <p className="leading-relaxed text-gray-600 text-lg py-4">
              We offer a variety of treadmills to cater to your fitness goals.
              Enhance your workouts with our diverse range of treadmill options
            </p>

            <div className="flex items-center space-x-2">
              <div className="p-3 group-hover:bg-rose-500 group-hover:text-white duration-200 rounded-full w-fit bg-white text-rose-500">
                <FaArrowLeft />
              </div>
              <button className="text-lg font-bold relative group uppercase">
                Read More
                <div className="absolute w-1 h-[0.15rem] bottom-0 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="px-4">
        <div className="   hover:shadow-lg   bg-gray-50 rounded-2xl hover:scale-105 duration-300 p-6 group hover:bg-white">
            <div className="p-5 bg-white rounded-lg shadow w-fit">
              <Image src={icons1} alt="icons1" />
            </div>

            <h3 className="text-3xl font-bold py-3">We provide treadmills</h3>
            <p className="leading-relaxed text-gray-600 text-lg py-4">
              We offer a variety of treadmills to cater to your fitness goals.
              Enhance your workouts with our diverse range of treadmill options
            </p>

            <div className="flex items-center space-x-2">
              <div className="p-3 group-hover:bg-rose-500 group-hover:text-white duration-200 rounded-full w-fit bg-white text-rose-500">
                <FaArrowLeft />
              </div>
              <button className="text-lg font-bold relative group uppercase">
                Read More
                <div className="absolute w-1 h-[0.15rem] bottom-0 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
              </button>
            </div>
          </div>
        </div>

        <div className="px-4">
        <div className="   hover:shadow-lg   bg-gray-50 rounded-2xl hover:scale-105 duration-300 p-6 group hover:bg-white">
            <div className="p-5 bg-white rounded-lg shadow w-fit">
              <Image src={icons1} alt="icons1" />
            </div>

            <h3 className="text-3xl font-bold py-3">We provide treadmills</h3>
            <p className="leading-relaxed text-gray-600 text-lg py-4">
              We offer a variety of treadmills to cater to your fitness goals.
              Enhance your workouts with our diverse range of treadmill options
            </p>

            <div className="flex items-center space-x-2">
              <div className="p-3 group-hover:bg-rose-500 group-hover:text-white duration-200 rounded-full w-fit bg-white text-rose-500">
                <FaArrowLeft />
              </div>
              <button className="text-lg font-bold relative group uppercase">
                Read More
                <div className="absolute w-1 h-[0.15rem] bottom-0 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
              </button>
            </div>
          </div>
        </div>
        <div>
        <div className="   hover:shadow-lg   bg-gray-50 rounded-2xl hover:scale-105 duration-300 p-6 group hover:bg-white">
            <div className="p-5 bg-white rounded-lg shadow w-fit">
              <Image src={icons1} alt="icons1" />
            </div>

            <h3 className="text-3xl font-bold py-3">We provide treadmills</h3>
            <p className="leading-relaxed text-gray-600 text-lg py-4">
              We offer a variety of treadmills to cater to your fitness goals.
              Enhance your workouts with our diverse range of treadmill options
            </p>

            <div className="flex items-center space-x-2">
              <div className="p-3 group-hover:bg-rose-500 group-hover:text-white duration-200 rounded-full w-fit bg-white text-rose-500">
                <FaArrowLeft />
              </div>
              <button className="text-lg font-bold relative group uppercase">
                Read More
                <div className="absolute w-1 h-[0.15rem] bottom-0 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </Slider>

      <section className="grid grid-cols-3 gap-10 items-center"></section>
    </section>
  );
};

export default Service;
