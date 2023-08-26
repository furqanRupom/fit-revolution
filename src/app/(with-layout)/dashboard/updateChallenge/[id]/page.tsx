"use client";

import { useUser } from "@/hooks/useUser";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
const updateChallengePage: React.FC = ({ params }: any) => {
  const router = useRouter();
  const { id } = params;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { user } = useUser();

  const [challenge, getChallenge] = useState({});
  useEffect(() => {
    axios.get(`/api/challenges/${id}`).then((res) => getChallenge(res.data));
  }, []);

  const {
    challengeName,
    goals,
    image,
    description,
    progressTracking,
    duration,
    rewards,
    price,
  }: any = challenge;

  const onSubmit = (data: any) => {
    // Handle form submission, e.g., send data to the server

    try {
      const {
        challengeName,
        goals,
        image,
        description,
        progressTracking,
        duration,
        rewards,
        price,
      } = data;
      const updateData = {
        challengeName,
        goals,
        image,
        description,
        progressTracking,
        duration,
        rewards,
        price,
      };

      axios.put(`/api/challenges/${id}`, updateData);
      toast.success("Challenge Successfully updated");
      reset();
      router.push(`/dashboard/myChallenges`);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="overflow-hidden flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-5xl my-20">
        <h1 className="text-4xl font-semibold text-center mb-6 text-rose-500">
          Update Challenge
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 lg:grid-cols-2 w-full "
        >
          <div>
            <div className="w-full">
              <label
                htmlFor="challengeName"
                className="block font-medium mb-1 text-gray-700 "
              >
                Challenge Name
              </label>
              <input
                {...register("challengeName", {
                  required: "Challenge name is required",
                })}
                type="text"
                id="challengeName"
                defaultValue={challengeName}
                className="w-9/12 px-3 py-2 rounded-2xl focus:ring-rose-500 focus:outline-none ring ring-rose-200 my-2"
              />
            </div>
            <div>
              <label
                htmlFor="goals"
                className="block font-medium mb-1 text-gray-700"
              >
                Goals
              </label>

              <input
                {...register("goals", { required: "Goals are required" })}
                type="text"
                id="challengeName"
                defaultValue={goals}
                className="w-9/12 px-3 py-2 rounded-2xl focus:ring-rose-500 focus:outline-none ring ring-rose-200 my-2"
              />
            </div>
            <div>
              <label
                htmlFor="image"
                className="block font-medium mb-1 text-gray-700"
              >
                challenge Image URL
              </label>

              <input
                {...register("image", { required: "Image are required" })}
                type="text"
                defaultValue={image}
                className="w-9/12 px-3 py-2 rounded-2xl focus:ring-rose-500 focus:outline-none ring ring-rose-200 my-2"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block font-medium mb-1 text-gray-700"
              >
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                id="description"
                defaultValue={description}
                rows={5}
                className="w-9/12 px-3 py-2 rounded-2xl focus:ring-rose-500 focus:outline-none ring ring-rose-200 my-2"
              />
            </div>
          </div>

          <div>
            <div>
              <label
                htmlFor="progressTracking"
                className="block font-medium mb-1 text-gray-700"
              >
                Progress Tracking
              </label>
              <input
                {...register("progressTracking", {
                  required: "Progress tracking details are required",
                })}
                type="text"
                id="progressTracking"
                defaultValue={progressTracking}
                className="w-9/12 px-3 py-2 rounded-2xl focus:ring-rose-500 focus:outline-none ring ring-rose-200 my-2"
              />
            </div>
            <div>
              <label
                htmlFor="duration"
                className="block font-medium mb-1 text-gray-700"
              >
                Duration
              </label>
              <input
                {...register("duration", { required: "Duration is required" })}
                type="text"
                id="duration"
                defaultValue={duration}
                className="w-9/12 px-3 py-2 rounded-2xl focus:ring-rose-500 focus:outline-none ring ring-rose-200 my-2"
              />
            </div>
            <div>
              <label
                htmlFor="rewards"
                className="block font-medium mb-1 text-gray-700"
              >
                Rewards
              </label>
              <input
                {...register("rewards", { required: "Rewards are required" })}
                type="text"
                id="rewards"
                defaultValue={rewards}
                className="w-9/12 px-3 py-2 rounded-2xl focus:ring-rose-500 focus:outline-none ring ring-rose-200 my-2"
              />
            </div>
            <div>
              <label
                htmlFor="Prices"
                className="block font-medium mb-1 text-gray-700"
              >
                Price
              </label>
              <input
                {...register("price", { required: "price are required" })}
                type="text"
                defaultValue={price}
                className="w-9/12 px-3 py-2 rounded-2xl focus:ring-rose-500 focus:outline-none ring ring-rose-200 my-2"
              />
            </div>
          </div>

          <div className="w-[100%] my-3">
            <button
              type="submit"
              className=" bg-rose-500 text-white rounded-lg hover:bg-rose-600 duration-150 py-3 text-2xl font-semibold w-full"
            >
              Update Challenge
            </button>
          </div>
        </form>
      </div>
      <div className="absolute top-0 right-0 -z-10 overflow-hidden">
        <div className="w-36 h-36 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 mix-blend-multiply opacity-50 transform rotate-45"></div>
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 mix-blend-multiply opacity-50 transform rotate-45 -mt-8 ml-16"></div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default updateChallengePage;
