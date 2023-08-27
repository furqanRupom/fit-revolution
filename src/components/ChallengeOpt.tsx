"use client";
import Loading from "@/app/(with-layout)/articles/loading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Connect from "./Connect";
import Link from "next/link";

const ChallengeOpt: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const { data, refetch } = useQuery({
    queryKey: ["challenges"],
    queryFn: async () => {
      const res = await axios.get("/api/challenges");
      setLoading(false);
      return res.data;
    },
  });
  return (
    <>
      <div className="h-96 relative ">
        <Image
          className="w-full blur-sm object-cover h-96 object-center pt-12"
          width={500}
          height={200}
          src="https://images.pexels.com/photos/4752861/pexels-photo-4752861.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="articleImage"
        />

        <h3 className=" text-4xl md:text-5xl  lg:text-7xl text-center uppercase absolute top-1/2 w-full h-full z-40 text-white">
          Challenges
        </h3>
      </div>

      <section>
        <div className="flex items-center space-x-2 mt-12">
          <div className="w-[35%] h-[0.10rem] bg-gray-300"></div>
          <h2 className=" flex-grow text-2xl lg:text-3xl text-gray-600 text-center">
            " Conquering Life's Challenges "
          </h2>

          <div className="w-[35%] h-[0.10rem] bg-gray-300"></div>
        </div>
        <p className="leading-relaxed max-w-2xl text-sm mx-auto font-thin text-center pt-3">
          This collection of inspiring stories explores how individuals from
          diverse backgrounds have triumphed over life's hurdles.
        </p>

        <div className="min-h-screen max-w-7xl mx-auto mt-12 mb-8">
          {!loading ? (
            <section className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10">
              {data?.map(
                ({ image, challengeName, _id, progressTracking }: any) => (
                  <div key={_id}>
                    <div className="relative group rounded-md">
                      <img
                        className=" h-80  w-full object-cover rounded-lg"
                        width={400}
                        height={400}
                        src={image}
                        alt="challenge image"
                      />
                      <div className="absolute  items-center justify-center  group-hover:bg-slate-900/50 group-hover:bg-opacity-20 text-center px-3 z-20 group-hover:flex w-full h-80 inset-0 duration-700 cursor-pointer ">
                        <div className="hidden group-hover:block">
                          <h1 className="text-white text-2xl font-bold">
                            {challengeName}
                          </h1>
                          <p className="text-gray-50 leading-relaxed text-md">
                            {progressTracking}
                          </p>
                        </div>
                      </div>

                      <h3 className="absolute group-hover:hidden duration-500 bottom-0 py-1 z-30 text-white text-2xl font-bold text-center bg-gradient-to-tr from-slate-900/25 to-gray-900/25 w-full">
                        {challengeName}
                      </h3>

                      <Link href={`/challenges/${_id}`}>
                        <button className="w-0  duration-200 group-hover:w-full py-3  bg-gray-50/25 absolute bottom-0 text-md uppercase z-30 hidden  group-hover:flex items-center space-x-3 text-white font-semibold justify-center hover:scale-105">
                          <h1>Find Out More </h1>
                          <span>
                            <FaArrowCircleRight />
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                )
              )}
            </section>
          ) : (
            <>
              <Loading />
            </>
          )}
        </div>
      </section>

      <Connect />
    </>
  );
};

export default ChallengeOpt;
