"use client";
import { useState, useEffect } from "react";
import { Models } from "appwrite";
import appwriteService from "@/appwrite/config";

export const useUser = () => {
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

  return { user };
};
