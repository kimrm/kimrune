import type { Metadata } from "next";
import Header from "./components/header/Header";
import { Afacad } from "next/font/google";
import "./globals.css";

const afacadSans = Afacad({
  variable: "--font-afacad-sans",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "kimrune.dev",
  description: "Webutvikler"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacadSans.variable} antialiased`}>
        <Header />
        {children}
        <footer className="pt-24 pb-8 px-8 text-center bg-[#0C1423]">
          <p>&copy; {new Date().getFullYear()} kimrune.dev</p>
        </footer>
      </body>
    </html>
  );
}
