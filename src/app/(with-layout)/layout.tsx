import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import logo from "../../assets/logo.png";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
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
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className=" max-w-7xl mx-auto">
          <Header />

          <main className="min-h-screen mx-auto">
            {children}
            </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
