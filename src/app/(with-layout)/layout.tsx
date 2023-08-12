"use client";
import Header from "@/components/Header";
import "../globals.css";
import { Poppins, Inter, Dancing_Script, Barlow } from "next/font/google";
import Footer from "@/components/Footer";
import logo from "../../assets/logo.png";
import { Metadata } from "next";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import appwriteService from "@/appwrite/config";
import { AuthProvider } from "@/Context/authContext";
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
  const [loader, setLoader] = useState(false);

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
            <div className={pathname === "/" ? "mx-auto max-w-7xl" : ""}>
              {pathname === "/" && <Header />}

              <main className="min-h-screen mx-auto">{children}</main>

              {pathname === "/" && <Footer />}
            </div>
          </AuthProvider>
        ) : (
          <h3>Loading</h3>
        )}
      </body>
    </html>
  );
}
