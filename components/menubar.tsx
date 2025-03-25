"use client"
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"

import Link from "next/link"
import { useState } from "react"
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
export const MenuBox = () => {

    const [isMobileMenuOpen, setIsMobileOpen] = useState(false);
    const toggleMobileOpen = ()=>{
        setIsMobileOpen(!isMobileMenuOpen);
    }

  return (
    <div className=" flex lg:hidden md:hidden text-xl font-semibold" >
        <Menubar className="md:hidden lg:hidden bg-black">
            <MenubarMenu>
                <MenubarTrigger className="md:hidden lg:hidden  text-white hover:text-white font-bold"  onClick={toggleMobileOpen}>
                        {
                          isMobileMenuOpen ? (<IoClose className="text-white"/>):  (<IoMenu />) 
                       }
                </MenubarTrigger>
                <MenubarContent className="md:hidden lg:hidden">
                <MenubarItem>
                <Link href='/ai'>Ai</Link>
                </MenubarItem>
                <MenubarItem>
                <Link href='/catogories'>Categories</Link>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                <Link href='/about'>About US</Link>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                <Link href='/contact'>Contact</Link>
                </MenubarItem>
                </MenubarContent>
            </MenubarMenu> 
        </Menubar>

    </div>
  )
}
