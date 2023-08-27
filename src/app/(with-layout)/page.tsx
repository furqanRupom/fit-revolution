import HomeCompo from "@/components/homeCompo/HomeCompo";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'fitRevolution | Home',
  description: 'This is our home page',
}

export default function Home() {
  return (
    <section className="mx-auto">
      <HomeCompo />

    </section>
  );
}
