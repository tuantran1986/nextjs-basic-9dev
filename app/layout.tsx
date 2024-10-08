import type { Metadata } from "next";
import { Inter } from "next/font/google";

// import CSS
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TuanTran | HomePage",
  description: "Đây là trang tuantran hoc NEXTJS BASIC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <p className="tuanTranCssGlobal" >TUANTRAN - NEXT JS</p>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
