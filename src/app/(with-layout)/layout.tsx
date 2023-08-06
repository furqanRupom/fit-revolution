"use client";
import Header from "@/components/Header";
import "../globals.css";
import { Poppins, Inter, Dancing_Script, Barlow } from "next/font/google";
import Footer from "@/components/Footer";
import logo from "../../assets/logo.png";
import { Metadata } from "next";
import { usePathname} from "next/navigation";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Fit revolution app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html lang="en">
      <body className={barlow.className}>
        <div className={pathname === "/" ? "mx-auto max-w-7xl" : ""}>
          {pathname === "/" && <Header />}

          <main className="min-h-screen mx-auto">{children}</main>

          {pathname === "/" && <Footer />}
        </div>
      </body>
    </html>
  );
}
