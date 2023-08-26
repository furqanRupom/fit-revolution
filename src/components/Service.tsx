import Image from "next/image";
import icons1 from "../assets/icons/treadmill.png";
import icons2 from "../assets/icons/muscle.png";
import icons3 from "../assets/icons/fitness (1).png";
import icons4 from "../assets/icons/kettlebell.png";
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
    <section className=" mt-44 mb-16 ">
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
            <p className="leading-relaxed text-gray-600 py-2  lg:text-lg lg:py-4">
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
              <Image src={icons2} alt="icons2" />
            </div>

            <h3 className=" text-3xl font-bold py-3">Muscle Building </h3>
            <p className="leading-relaxed text-gray-600 py-2  lg:text-lg lg:py-4">
            Transform your physique with targeted exercises designed to build lean muscle and enhance definition for a powerful look.
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
              <Image height={64} src={icons3} alt="icons1" />
            </div>

            <h3 className="text-3xl font-bold py-3"> Fitness Fusion</h3>
            <p className="leading-relaxed text-gray-600 py-2  lg:text-lg lg:py-4">
            Experience high-energy workouts combining cardio, strength, and kettlebell training to elevate your fitness levels.
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
              <Image height={64} src={icons4} alt="icons4" />
            </div>

            <h3 className="text-3xl font-bold py-3">Kettlebell Core Ignite</h3>
            <p className="leading-relaxed text-gray-600 py-2  lg:text-lg lg:py-4">
            Learn proper techniques and unlock the potential of kettlebell workouts, boosting strength, stability.
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


    </section>
  );
};

export default Service;
