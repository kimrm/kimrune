import type { Metadata } from "next";
import Header from "./components/header/Header";
import ModalContainer from "./components/modalContainer/ModalContainer";
import { Afacad } from "next/font/google";
import { Pacifico } from "next/font/google";
import "./globals.css";

const afacadSans = Afacad({
  variable: "--font-afacad-sans",
  subsets: ["latin"]
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Kodello",
  description: "Webutvikler"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${afacadSans.variable} ${pacifico.variable} antialiased`}
      >
        <Header />
        {children}
        <footer className="pt-24 pb-8 px-8 text-center bg-[#0C1423]">
          <p>&copy; {new Date().getFullYear()} kodello - K-R Møller</p>
        </footer>
        <ModalContainer />
      </body>
    </html>
  );
}
