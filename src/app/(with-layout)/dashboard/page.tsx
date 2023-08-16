"use client";
import { useAuth } from "@/Context/useAuth";
import appwriteService from "@/appwrite/config";
import { Models } from "appwrite";
import {CgNotifications} from "react-icons/cg"
import moment from "moment";
import { useEffect, useState } from "react";
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
    <section className="grid grid-cols-1 lg:grid-cols-[3fr,1fr]">
      <section className=" px-2 pt-12 lg:px-12 lg:pt-8 lg:pb-3">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-600 ">
              Hello <span className="text-rose-500">{user?.name}</span>
            </h3>
            <p className="text-gray-500 font-semibold">
              Keep Active and Ensure Your Well-being
            </p>
          </div>

          <div className="flex items-center space-x-5">
            <h3 className="text-gray-500 font-semibold">{moment().format('LL')}</h3>
            <h3 className="text-xl lg:text-3xl font-bold text-rose-500 p-1 bg-white rounded-full shadow shadow-rose-100"><CgNotifications /></h3>
          </div>
        </div>
      </section>

      <section>profile section</section>
    </section>
  );
};

export default profilePage;
