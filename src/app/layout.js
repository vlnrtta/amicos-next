import { Onest } from "next/font/google";
import "./globals.css";
import HeaderHome from "@/src/components/headerHome/page";
import Footer from "../components/footer/page";
import { Metadata } from "next";

const onest = Onest({ subsets: ["latin"] });

export const metadata = {
  title: "AMICOS - Asociación Mututal Intercooperativa Solidaria",
  lang:'es',
  };


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <link rel="icon" href="favicon.svg"></link> 
      <body className={onest.className}>
        <HeaderHome/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
