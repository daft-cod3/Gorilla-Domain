import { Geist, Geist_Mono } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Kenyan Driving Study Platform",
  description: "Interactive study platform for Kenyan driving school students. Learn vehicle parts, traffic rules, and driving theory with quizzes and simulations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=" antialiased flex flex-col min-h-screen"
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="flex-grow">

          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
