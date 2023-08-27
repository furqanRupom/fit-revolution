"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaBath, FaClock } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { useAuth } from "@/Context/useAuth";
import Link from "next/link";
import Loading from "@/app/(with-layout)/articles/loading";

const ChallengeDetails: React.FC = ({ id }: any) => {
  const { authStatus } = useAuth();
  const [loading, setLoading] = useState(true);
  const { refetch, data } = useQuery({
    queryKey: ["id"],
    queryFn: async () => {
      const res = await axios.get(`/api/challenges/${id}`);
      setLoading(false);

      return res?.data;
    },
  });

  // const {challengeName,goals,description,rewards,image,duration} = data
  return (
    <section>

        {
            !loading ?  <section
            style={{
              backgroundImage: `url(${data?.image})`,
              backgroundSize: "cover",
            }}
            className="min-h-screen relative bg-center"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-tl from-slate-900/75 via-slate-900/50 "></div>

            <div className="z-50">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto py-20 relative"
              >
                <div>
                  <h3 className=" text-xl md:2xl lg:text-3xl  lg:text-5xl font-[500] bg-gradient-to-tr from-rose-500 to-red-500 bg-clip-text text-transparent uppercase text-center pt-12">
                    {data?.challengeName}
                  </h3>

                  <h4 className=" text-lg md:text-2xl font-[500] text-white text-center uppercase py-1">
                    <span className="text-rose-500">Your Goal is </span>
                    {data?.goals}
                  </h4>
                  <p className="text-md py-3 leading-relaxed font-semibold text-center text-gray-300">
                    {data?.description}
                  </p>

                  <div className="grid grid-cols-2 w-full text-white h-full mt-5 rounded-lg">
                    <div className="flex items-center justify-center p-6 text-center border border-gray-400 border-b-0  backdrop-blur-sm hover:backdrop-blur-md rounded-tl-lg">
                      <div>
                        <h2 className="w-full text-4xl text-red-500">
                          <FaClock className="mx-auto" />
                        </h2>

                        <h2 className="text-xl md:2xl lg:text-3xl font-bold uppercase py-2">
                          Duration
                        </h2>
                        <h3 className="text-xl font-[500] ">{data?.duration}</h3>
                      </div>
                    </div>

                    <div className="backdrop-blur-sm hover:backdrop-blur-md ">
                      <div className="flex items-center justify-center p-6 rounded-tr-lg text-center border border-gray-400 border-b-0">
                        <div>
                          <h2 className="w-full text-4xl text-red-500">
                            <GiPodiumWinner className="mx-auto" />
                          </h2>

                          <h2 className="text-xl md:2xl lg:text-3xl font-bold uppercase py-2">
                            Rewards
                          </h2>
                          <h3 className=" font-[500] ">{data?.rewards}</h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full ">
                    {authStatus ? (
                      <div>
                        <button className="text-lg md:text-2xl font-bold w-full bg-gradient-to-t from-red-500 to-rose-500 text-white uppercase py-3 rounded-b-lg hover:bg-gradient-to-t hover:from-red-600 hover:to-rose-600">
                          {data?.price} -{" "}
                          {data?.price == "free" ? " " : " Grab yours!"}
                        </button>
                      </div>
                    ) : (
                      <Link href="/login">
                        <button className="text-lg md:text-2xl font-bold w-full bg-gradient-to-t from-red-500 to-rose-500 text-white uppercase py-3 rounded-b-lg hover:bg-gradient-to-t hover:from-red-600 hover:to-rose-600">
                          Sign up to grab challenges!
                        </button>
                      </Link>
                    )}
                  </div>

                  <Link href="/challenges">
                    <button className="text-red-400 flex items-center space-x-3 w-full text-center justify-center pt-5 hover:text-rose-500 duration-200">
                      <p>Back to previous page </p>
                      <p className="pt-1">
                        <FaArrowRight />
                      </p>
                    </button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section> : <Loading />
        }

    </section>
  );
};

export default ChallengeDetails;
