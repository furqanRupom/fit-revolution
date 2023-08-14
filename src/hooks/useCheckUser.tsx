"use client";
import appwriteService from "@/appwrite/config";
import { useState, useEffect } from "react";

 const useCheckUser = () => {
  const [currentUser, setCurrentUser] = useState(false);
  useEffect(() => {
    appwriteService
      .loggedIn()
      .then((user) => setCurrentUser(user))
      .catch((error) => {
        throw new Error(error.message);
      });
  }, []);
  return {currentUser}
};

export default  useCheckUser
