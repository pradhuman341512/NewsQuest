import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./Navbar/navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "./context/themeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Next NewsQuest",
  description: "Explore News Application and grow up your knowladge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
            <Navbar/>
            <main className="min-h-screen "> {children}</main>
            <Footer/>
        </ThemeProvider>
      
        
      </body>
    </html>
  );
}
