"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/common/Header/page";
import UseThemeHook from "../../Hooks/UseThemeHook";
import { useRouter } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
  const router = useRouter()
  const { currentTheme } = UseThemeHook()
  const _THEME_CONDITION = window.location.pathname.includes("/register") ? "bg-white" : `bg-[${currentTheme?.background}]`
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  ${_THEME_CONDITION}   `}
      >
        {!window.location.pathname.includes("/register") &&
          < Header />
        }
        {children}
      </body>
    </html >
  );
}
