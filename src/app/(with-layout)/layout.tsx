"use client";
import Header from "@/components/Header";
import "../globals.css";
import { Poppins, Inter, Dancing_Script, Barlow } from "next/font/google";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import appwriteService from "@/appwrite/config";
import { AuthProvider } from "@/Context/authContext";
import loading from "../../../public/gif.gif";
import Image from "next/image";
import TopHeader from "@/components/TopHeader";
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
  const [authStatus, setAuthStatus] = useState(false);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    appwriteService
      .loggedIn()
      .then(setAuthStatus)
      .finally(() => setLoader(false));
  }, []);
  return (
    <html lang="en">
      <body className={barlow.className}>


        {!loader ? (
          <AuthProvider value={{ authStatus, setAuthStatus }}>
            <div>
              {pathname === "/" ||
              pathname === "/articles" ||
              pathname === "/challenges" ? (
                <>

                <Header />
                </>
              ) : (
                ""
              )}

              <main >{children}</main>

              {pathname === "/" ||
              pathname === "/articles" ||
              pathname === "/challenges" ? (
                <Footer />
              ) : (
                ""
              )}
            </div>
          </AuthProvider>
        ) : (
          <div className="w-full h-screen  flex items-center justify-center">
            <Image src={loading} alt="loading" />
          </div>
        )}
      </body>
    </html>
  );
}
