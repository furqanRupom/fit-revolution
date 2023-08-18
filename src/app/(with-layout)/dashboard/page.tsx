"use client";
import { useAuth } from "@/Context/useAuth";
import appwriteService from "@/appwrite/config";
import { Models } from "appwrite";
import { CgNotifications } from "react-icons/cg";
import { FaWalking, FaDumbbell, FaRunning } from "react-icons/fa";
import { LuGlassWater } from "react-icons/lu";
import { IoBicycle } from "react-icons/io5";
import moment from "moment";
import profile from "@/assets/profile.jpg";
import { useEffect, useState } from "react";
import Charts from "@/components/Chart";
import Image from "next/image";
const profilePage = () => {
  const [user, setUser] = useState<Models.User<Models.Preferences> | null>(
    null
  );

  useEffect(() => {
    (async () => {
      const currentUser = await appwriteService.getCurrentUser();
      if (currentUser) {
        setUser(currentUser);
      }
    })();
  }, []);
  console.log(user);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[3fr,1fr] min-h-screen  lg:px-0">
      <section className=" px-2 pt-12 lg:px-12 lg:pt-8 lg:pb-3">
        {/*  first section */}

        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-600 ">
              Hello <span className="text-rose-500">{user?.name}</span>
            </h3>
            <p className="text-gray-500 font-semibold">
              Keep Active and Ensure Your Well-being
            </p>
          </div>

          <div className="flex items-center space-x-5">
            <h3 className="text-gray-500 font-semibold">
              {moment().format("LL")}
            </h3>
            <h3 className="text-xl lg:text-3xl font-bold text-rose-500 p-1 bg-white rounded-full shadow shadow-rose-100">
              <CgNotifications />
            </h3>
          </div>
        </div>

        {/* 2nd section */}

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[2fr,1fr]">
          <div className="shadow p-3 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-600 ">
              Regular Activities
            </h3>

            <Charts />
          </div>

          <aside className="flex  lg:flex-col items-center  justify-evenly mt-3">
            <div className="bg-white shadow rounded-2xl py-4 px-3 ">
              <div className=" text-xl lg:text-3xl text-rose-500 font-semibold flex  items-center space-x-3">
                <FaWalking />
                <h4>Daily Walking</h4>
              </div>
              <p className="text-xl text-gray-500">0 Steps</p>
            </div>
            <div className="bg-white shadow rounded-2xl py-4 px-3">
              <div className="text-xl lg:text-3xl text-rose-500 font-semibold flex  items-center space-x-3">
                <LuGlassWater />
                <h4>Water Watch</h4>
              </div>
              <p className="text-xl text-gray-500">0 Total Glass</p>
            </div>
          </aside>
        </div>

        {/* last section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8 ">
          <div className="shadow-md rounded-2xl p-3">
            <div className="text-5xl p-2 shadow bg-rose-500/25  rounded-lg w-fit mx-auto text-rose-500">
              <IoBicycle />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 py-1 text-center">
              Cycle Hero
            </h3>
            <p className="text-xl text-gray-500 text-center">10km/week</p>

            <div className="mt-4">
              <div className="flex justify-between text-rose-500 text-xl py-3">
                <h3>Progress</h3>
                <h3>75%</h3>
              </div>
              <div className="relative w-full h-2 rounded-lg bg-gray-50">
                <div className="absolute w-3/4  bg-rose-500 h-2 rounded-lg"></div>
              </div>

              <h3 className="pt-2 text-gray-600">Target: 50km</h3>
            </div>
          </div>

          <div className="shadow-md rounded-2xl p-3">
            <div className="text-5xl p-2 shadow bg-rose-500/25  rounded-lg w-fit mx-auto text-rose-500">
              <FaRunning />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 py-1 text-center">
              Daily Running
            </h3>
            <p className="text-xl text-gray-500 text-center">5km/week</p>

            <div className="mt-4">
              <div className="flex justify-between text-rose-500 text-xl py-3">
                <h3>Progress</h3>
                <h3>50%</h3>
              </div>
              <div className="relative w-full h-2 rounded-lg bg-gray-50">
                <div className="absolute w-6/12  bg-rose-500 h-2 rounded-lg"></div>
              </div>

              <h3 className="pt-2 text-gray-600">Target: 7km</h3>
            </div>
          </div>

          <div className="shadow-md rounded-2xl p-3">
            <div className="text-5xl p-2 shadow bg-rose-500/25  rounded-lg w-fit mx-auto text-rose-500">
              <FaDumbbell />
            </div>
            <h3 className="text-2xl font-semibold text-gray-600 py-1 text-center">
              Daily Push Up
            </h3>
            <p className="text-xl text-gray-500 text-center">10/week</p>

            <div className="mt-4">
              <div className="flex justify-between text-rose-500 text-xl py-3">
                <h3>Progress</h3>
                <h3>25%</h3>
              </div>
              <div className="relative w-full h-2 rounded-lg bg-gray-50">
                <div className="absolute w-3/12  bg-rose-500 h-2 rounded-lg"></div>
              </div>

              <h3 className="pt-2 text-gray-600">Target: 30</h3>
            </div>
          </div>
        </div>
      </section>

      {/* profile section */}

      <section className="shadow-md py-6 px-3 mr-2">
        {/* first section */}
        {/* TODO : We have a work to make some data dynamic */}

        <div className="flex flex-col items-center justify-center space-y-1 ">
          <Image
            className="w-20 h-20 object-cover rounded-full ring ring-rose-50"
            src={profile}
            alt="profileImage"
          />
          <h3 className="text-2xl font-bold ">{user?.name}</h3>
          <p>Student</p>
        </div>

        {/*  second section */}

        <div className="flex items-center justify-between space-x-4  mt-5">
          <div className="flex-1 text-center">
            <h3 className="font-bold text-center">Height</h3>
            <p className="font-semibold px-5 text-lg mt-2 py-1 bg-rose-500 text-white rounded-md">
              160 cm
            </p>
          </div>
          <div className="flex-1 text-center">
            <h3 className="font-bold text-center">Weight</h3>
            <p className="font-semibold px-5 text-lg mt-2 py-1 bg-rose-500 text-white rounded-md">
              55 kg
            </p>
          </div>
          <div className="flex-1 text-center">
            <h3 className="font-bold text-center">Age</h3>
            <p className="font-semibold px-5 text-lg mt-2 py-1 bg-rose-500 text-white rounded-md">
              20
            </p>
          </div>
        </div>

        {/* third section */}

        <div className="mt-6">
          <h3 className="text-xl font-bold py-3">Ongoing Objectives</h3>

          <div className="flex flex-col space-y-2">
            <div className="flex justify-between text-rose-500  py-3">
              <h3>Sleep</h3>
              <h3>
                100<span className="text-gray-600">/300hours</span>
              </h3>
            </div>
            <div className="relative w-full h-1 rounded-lg bg-gray-50">
              <div className="absolute w-3/12  bg-rose-500 h-1 rounded-lg"></div>
            </div>
            <div className="flex justify-between text-rose-500  py-3">
              <h3>Running</h3>
              <h3>
                20<span className="text-gray-600">/100km</span>
              </h3>
            </div>
            <div className="relative w-full h-1 rounded-lg bg-gray-50">
              <div className="absolute w-3/12  bg-rose-500 h-1 rounded-lg"></div>
            </div>
            <div className="flex justify-between text-rose-500  py-3">
              <h3>Lose Weights</h3>
              <h3>
                4<span className="text-gray-600">/6kilos</span>
              </h3>
            </div>
            <div className="relative w-full h-1 rounded-lg bg-gray-50">
              <div className="absolute w-3/12  bg-rose-500 h-1 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* last section */}

        <div className="mt-5">
          <h1 className="font-bold text-lg pt-5 pb-3">Upcoming Challenges</h1>

          <div className="flex flex-col space-y-3">
            <div className="border-l-8 border-rose-500 rounded-lg shadow my-3 flex justify-between items-center px-3">
              <div>
                <h1 className="font-bold  py-1">Gymnastic</h1>
                <p>18/8/2023 | 4:00pm</p>
              </div>

              <div>
                <input type="checkbox" checked className=" accent-rose-500" />
              </div>
            </div>
            <div className="border-l-8 border-rose-500 rounded-lg shadow my-3 flex justify-between items-center px-3">
              <div>
                <h1 className="font-bold  py-1">Running</h1>
                <p>19/8/2023 | 4:00pm</p>
              </div>

              <div>
                <input type="checkbox"  className=" accent-rose-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default profilePage;
