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
import { Button } from "./ui/button"
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
                <MenubarTrigger className="md:hidden lg:hidden " >
                    <Button onClick={toggleMobileOpen} className=" bg-black text-white w-full h-full " >
                        {
                          isMobileMenuOpen ?  (<IoMenu   />) : (<IoClose />)
                       }
                    </Button>
                </MenubarTrigger>
                <MenubarContent className="md:hidden lg:hidden">
                <MenubarItem>
                <Link href='/'>News</Link>
                </MenubarItem>
                <MenubarItem>
                <Link href='/'>Categories</Link>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                <Link href='/'>About US</Link>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                <Link href='/'>Contact</Link>
                </MenubarItem>
                </MenubarContent>
            </MenubarMenu> 
        </Menubar>

    </div>
  )
}
