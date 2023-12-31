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
import {
  QueryClient,
  QueryClientProvider,
  useQueryClient,
} from "@tanstack/react-query";
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [authStatus, setAuthStatus] = useState(false);
  const [loader, setLoader] = useState(true);
  const queryClient = new QueryClient();

  useEffect(() => {
    appwriteService
      .loggedIn()
      .then(setAuthStatus)
      .finally(() => setLoader(false));
  }, []);

  return (
    <html lang="en">
      <body className={barlow.className}>
        <QueryClientProvider client={queryClient}>
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

                <main>{children}</main>

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
        </QueryClientProvider>
      </body>
    </html>
  );
}
