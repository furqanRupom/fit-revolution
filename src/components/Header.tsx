"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  FaClock,
  FaDumbbell,
  FaLocationArrow,
  FaMailchimp,
  FaPhone,
  FaPhoneAlt,
  FaSearch,
} from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { HiArrowCircleRight, HiArrowsExpand } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import Image from "next/image";
import { useAuth } from "@/Context/useAuth";
import TopHeader from "./TopHeader";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);
  const { authStatus } = useAuth();

  return (
    <header className="bg-white z-50">
      <TopHeader />
      <header className="px-7 py-8   bg-white  fixed w-full mx-auto z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 text-2xl font-[500] hover:scale-105 duration-200 cursor-pointer">
            <span className="text-4xl t text-rose-400">
              <FaDumbbell />
            </span>{" "}
            <h3 className="font-semibold"> Fit revolution.</h3>
          </div>

          {/* for mobile devices */}

          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden cursor-pointer"
          >
            <span className="text-3xl hover:text-rose-400 ">
              <HiBars3CenterLeft />
            </span>
          </div>

          {/* mobile menu */}

          <div
            className={
              open
                ? "lg:hidden absolute   duration-500 top-0 bg-white left-0 h-full min-h-screen z-50 px-5"
                : "-translate-x-[1000px] lg:hidden absolute "
            }
          >
            <div>
              <div className="flex items-center space-x-2 text-2xl font-[500] hover:scale-105 duration-200 cursor-pointer pt-8 pb-6">
                <span className="text-4xl text-rose-400">
                  <FaDumbbell />
                </span>{" "}
                <h3> Fit revolution.</h3>
              </div>
              <ul className="flex flex-col space-y-5 font-semibold uppercase">
                <li className="hover:text-rose-400 relative group active:text-rose-400">
                  <Link  href="/">Home</Link>
                  <div className="absolute w-1 h-[0.15rem] -bottom-1 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
                </li>
                <li className="hover:text-rose-400 relative group">
                  <Link href="/challenges"> Challenges</Link>
                  <div className="absolute w-1 h-[0.15rem] -bottom-1 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
                </li>
                <li className="hover:text-rose-400 relative group">
                  <Link href="/articles"> Articles</Link>
                  <div className="absolute w-1 h-[0.15rem] -bottom-1 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
                </li>

                {authStatus ? (
                  <>
                    <li className="hover:text-rose-400 relative group">
                      <Link className="hover:text-rose-400 " href="/dashboard">
                        Dashboard
                      </Link>
                      <div className="absolute w-1 h-[0.15rem] -bottom-1 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
                    </li>
                    <li className="hover:text-rose-400 relative group">
                      <Link className="hover:text-rose-400 " href="/logout">
                        Logout
                      </Link>
                      <div className="absolute w-1 h-[0.15rem] -bottom-1 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
                    </li>
                  </>
                ) : (
                  <li className="hover:text-rose-400 relative group">
                    <Link href="/login">Login</Link>
                    <div className="absolute w-1 h-[0.15rem] -bottom-1 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="hidden lg:block">
            <ul className="flex  space-x-8 font-semibold uppercase  items-center">
              <li className="hover:text-rose-400 relative group">
                <Link href="/">Home</Link>
                <div className="absolute w-1 h-[0.15rem] -bottom-1 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
              </li>
              <li className="hover:text-rose-400 relative group">
                <Link href="/challenges"> Challenges</Link>
                <div className="absolute w-1 h-[0.15rem] -bottom-1 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
              </li>
              <li className="hover:text-rose-400 relative group">
                <Link href="/articles"> Articles</Link>
                <div className="absolute w-1 h-[0.15rem] -bottom-1 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
              </li>
              {authStatus ? (
                <>
                  <li className="hover:text-rose-400 relative group ">
                    <Link href="/dashboard">Dashboard</Link>
                    <div className="absolute w-1 h-[0.15rem] -bottom-1 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
                  </li>
                  <li className="hover:text-rose-400 relative group ">
                    <Link href="/logout">Logout</Link>
                    <div className="absolute w-1 h-[0.15rem] -bottom-1 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
                  </li>
                </>
              ) : (
                <li className="hover:text-rose-400 relative group ">
                  <Link href="/login">Login</Link>
                  <div className="absolute w-1 h-[0.15rem] -bottom-1 bg-white group-hover:bg-red-500 group-hover:w-full duration-500"></div>
                </li>
              )}
            </ul>
          </div>

          <div className="hidden lg:flex items-center space-x-3 ">
            <div className="text-xl cursor-pointer text-rose-400">
              <FaSearch />
            </div>
            <div
              onClick={() => setDisplay(true)}
              className="text-2xl cursor-pointer hover:text-rose-400"
            >
              <HiArrowsExpand />
            </div>
          </div>

          <div
            className={
              display
                ? " top-0  duration-500 right-0 h-full overflow-auto fixed bg-white drop-shadow-lg hidden lg:block p-12 z-20"
                : "-translate-y-[1600px]  absolute top-0 overflow-x-hidden right-0"
            }
          >
            <div className="w-full ">
              <div
                onClick={() => setDisplay(false)}
                className="absolute right-5 text-2xl text-rose-400 cursor-pointer top-5"
              >
                <AiFillCloseCircle />
              </div>

              <div className="flex items-center space-x-2 text-3xl font-[500] hover:scale-105 duration-200 cursor-pointer pt-2 pb-4">
                <span className="text-5xl text-rose-400">
                  <FaDumbbell />
                </span>{" "}
                <h3>Fit revolution.</h3>
              </div>

              <h3 className="text-2xl font-semibold py-5">Gallery</h3>
              <div className="grid grid-cols-2 pb-8">
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1582910184841-2135ce4421bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpdG5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    width={200}
                    height={200}
                    alt="logo"
                  />
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                    width={200}
                    height={200}
                    alt="logo"
                  />
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    width={200}
                    height={150}
                    alt="logo"
                  />
                </div>
                <div>
                  <Image
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                    width={200}
                    height={200}
                    alt="logo"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-semibold py-5">Contact</h3>

              <div className="pb-4">
                <div>
                  <div className="flex items-center space-x-3">
                    <h3 className="text-rose-400 text-2xl">
                      <FaLocationDot />
                    </h3>
                    <p className="text-gray-600">910 mystery Road, Amsterdam</p>
                  </div>
                </div>
                <div className="pt-4 pl-1">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-rose-400 text-xl">
                      <FaPhoneAlt />
                    </h3>
                    <p className="text-gray-600">+0 123 456 789</p>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-rose-400 text-2xl">
                      <FaMailchimp />
                    </h3>
                    <p className="text-gray-600">fitRevolution@gmail.com</p>
                  </div>
                </div>
                <div className="pt-4">
                  <div className="flex items-center space-x-3">
                    <h3 className="text-rose-400 text-xl">
                      <FaClock />
                    </h3>
                    <p className="text-gray-600">07.00AM - 23.00PM</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <ul className="flex items-center space-x-5 text-2xl text-rose-400">
                  <li>
                    <Link href="/">
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaLinkedin />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <FaInstagram />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </header>
  );
};

export default Header;
