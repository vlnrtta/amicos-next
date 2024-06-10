import { Onest } from "next/font/google";
import "./globals.css";
import HeaderHome from "@/src/components/headerHome/page";
import Footer from "../components/footer/page";

const onest = Onest({ subsets: ["latin"] });

export const metadata = {
  title: "AMICOS - Asociación Mututal Intercooperativa Solidaria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={onest.className}>
        <HeaderHome/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
