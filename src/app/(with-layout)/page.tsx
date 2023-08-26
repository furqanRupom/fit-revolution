"use client";
import appwriteService from "@/appwrite/config";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import PricingPlan from "@/components/PricingPlan";
import Progress from "@/components/Progress";
import Raise from "@/components/Raise";
import Service from "@/components/Service";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <section className="mx-auto">
      <Hero />
      <section className="px-4 max-w-7xl mx-auto">
        <Progress />
        <Raise />
      </section>

      <Instructor/>


      <section className="px-4 max-w-7xl mx-auto">
        <Service />
        <PricingPlan />
      </section>

    </section>
  );
}
