"use client";
import { useAuth } from "@/Context/useAuth";
import appwriteService from "@/appwrite/config";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const logOutPage = () => {
  const router = useRouter();
  const { setAuthStatus } = useAuth();
  useEffect(() => {
    appwriteService.logOut().then(() => {
      setAuthStatus(false);
       router.push("/login");
    });
  }, []);
  return <></>;
};

export default logOutPage;
