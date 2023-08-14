"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/Context/useAuth";
import React from "react";
import appwriteService from "@/appwrite/config";
import useCheckUser from "@/hooks/useCheckUser";
import { useRouter } from "next/navigation";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { authStatus } = useAuth();
  console.log(authStatus)
    if(authStatus){
        router.push("/login");
        return <></>
    }
    return children

};

export default ProtectedLayout;
