"use client";

import { useUser } from "@/hooks/useUser";
import { Challenges } from "@/models/challenges";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const myChallengesPage = () => {
  const { user } = useUser();
  const [myChallenges, setMyChallenges] = useState([]);

  useEffect(() => {
    axios.get(`/api/myChallenges/${user?.email}`).then((res) => {
      setMyChallenges(res.data);
    });
  }, [myChallenges]);

  const handleDelete = (id: any) => {
    console.log(id);
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
            console.log(res.data);
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
          {myChallenges.map(
            ({
              challengeName,
              goals,
              price,
              progressTracking,
              rewards,
              _id,
              image,
            }) => (
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
                      <div className="text-sm opacity-50">Goals: {goals}</div>
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
  );
};

export default myChallengesPage;
