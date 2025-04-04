'use client'
import { Logo } from "@/components/logo";
import { Switch } from "@/components/ui/switch";
import { NavMenu } from "@/app/Navbar/navmenu";
import { Button } from "@/components/ui/button";
import { MenuBox } from "@/components/menubar";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const Navbar = () => {
  const pathname = usePathname();
  const { isDarkMode, toggleTheme }: any = useContext(ThemeContext);

  return (
    <header
      className={`flex ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} 
      items-center justify-between w-screen h-auto px-16 shadow-md py-4`}
    >
      <Logo />
      <NavMenu />

      {/* Dark Mode & Login Button */}
      <div  className="gap-4 hidden md:flex lg:flex">
        <span  className="flex items-center justify-center gap-4 text-xl font-semibold">
          Light Mode <Switch onClick={toggleTheme}/>
        </span>
        <Button variant="default" className="px-6">Login</Button>
         
      </div>

      <MenuBox />
    </header>
  );
};

