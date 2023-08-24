"use client";

import useChallenge from "@/hooks/useChallenge";
import { useUser } from "@/hooks/useUser";
import { Challenges } from "@/models/challenges";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { isArray } from "chart.js/dist/helpers/helpers.core";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const myChallengesPage = () => {
 const {refetch,data} = useChallenge();


  const handleDelete = (id: any) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#fb7185",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`/api/challenges?id=${id}`)
          .then((res) => {
            refetch();
            Swal.fire(
              "Deleted!",
              "Your Challenge has been deleted.",
              "success"
            );
          })
          .catch((error) => console.log(error.message));
      }
    });
  };

  return (
    <>
      {data?.length > 0 && (
        <section className="overflow-x-auto w-full">
          <div className=" lg:mt-12 px-4">
            <h1 className="text-4xl font-semibold text-center my-16 text-rose-500">
              My Challenges
            </h1>
          </div>
          <table className="table max-w-7xl mx-auto">
            <thead>
              <tr>
                <th>Challenge Name</th>
                <th>Progress Tracking </th>
                <th>Rewards</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data?.map(
                ({
                  challengeName,
                  goals,
                  price,
                  progressTracking,
                  rewards,
                  _id,
                  image,
                }: any) => (
                  <tr key={_id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <Image
                              width={200}
                              height={200}
                              src={image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{challengeName}</div>
                          <div className="text-sm opacity-50">
                            Goals: {goals}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{progressTracking}</td>
                    <td>{rewards}</td>
                    <td>{price}</td>
                    <th className="grid grid-cols-2 gap-2">
                      <button className="btn btn-sm text-rose-400 text-md">
                        <Link href={`/dashboard/updateChallenge/${_id}`}>
                          <FaEdit />
                        </Link>
                      </button>

                      <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-sm  text-rose-400 text-lg"
                      >
                        <MdDelete />
                      </button>
                    </th>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </section>
      )}

      {data?.length == 0 && (
     <section className="w-full h-screen flex items-center justify-center ">
     <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-xl">
       <h3 className="text-4xl mb-4 font-bold text-center text-rose-500">
         Embark on a Journey of Discovery
       </h3>
       <p className="text-lg text-center text-gray-600">
         Uncover personal growth and achievement through exciting challenges.
       </p>
       <button className="mt-8 bg-rose-500 hover:bg-rose-600 text-white rounded-lg text-lg font-semibold px-8 py-3 transition duration-300 block mx-auto">
         <Link href="/dashboard/addChallenges">Start Your Adventure</Link>
       </button>
     </div>
   </section>

      )}
    </>
  );
};

export default myChallengesPage;
