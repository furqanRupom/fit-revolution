"use client";
import { useState, useEffect } from "react";
import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import "../css/TopHeader.css";

const TopHeader = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <motion.section
        className={`bg-white translate-y-0 hidden lg:block border-b-2 border-gray-200 transition duration-1000 ${
          isSticky ? "fixed top-0 shadow-md" : ""
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: -20,
          transition: { duration: 0.3, ease: "easeInOut", delay: 5 },
        }}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-center items-center max-w-4xl text-sm pl-24">
          <div className="flex items-center space-x-10 mb-2 sm:mb-0 ">
            <div className="flex items-center space-x-2 text-gray-700">
              <FaPhone className="text-lg" />
              <p className="text-sm font-medium">+123 456 789</p>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <FaEnvelope className="text-lg" />
              <p className="text-sm font-medium">
                info@fitrevolution.com
              </p>
            </div>
            <p className="text-gray-700">Mon - Sat: 8.00 am - 7.00 pm</p>

            <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 transition-all duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-500 transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
          </div>


        </div>
      </motion.section>
    </>
  );
};

export default TopHeader;
