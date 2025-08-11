"use client"
// import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navLinks = [
  {name:"Regiter",href:"/register"},
  {name:"Login",href:"/login"},
  {name:"Forget Password",href:"/forget-password"},
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {navLinks.map((link)=>{
          const isActive = pathName.startsWith(link.href)
          return (
            <>
            <p> <Link href={link.href} key={link.name} className={isActive?"font-bold text-red m-4":"text-blue m-4"}> {link.name} </Link> </p>
            </>
          )
        })}
     
        {children}
      
      </body>
    </html>
  );
}
