"use client";
import { useState, useEffect } from "react";
import { useAuth } from "@/Context/useAuth";
import React from "react";
import appwriteService from "@/appwrite/config";
import useCheckUser from "@/hooks/useCheckUser";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import loading from "../../../public/gif.gif";
import { AuthProvider } from "@/Context/authContext";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
    const {authStatus} = useAuth()
  if (!authStatus) {
    router.push("/login");
    return <></>;
  }
  return (
    <section className="grid  lg:grid-cols-[0fr,4fr] min-h-screen">
      <div className={open ? "fixed bg-rose-500 lg:static z-50" : "hidden lg:block"}>
        <div>
          <Sidebar />
        </div>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="flex  items-end justify-end px-4 pt-3 lg:hidden text-2xl cursor-pointer text-rose-400 h-fit"
      >
        <FaBars />
      </button>
      <div>{children}</div>
    </section>
  );
};

export default ProtectedLayout;
