'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu";
  import Link from "next/link";
  import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
  
  export const NavMenu = () => {
    const path = usePathname();
    return (
      <div className="hidden md:flex lg:flex">
        <NavigationMenu className="flex text-xl font-semibold">
          <NavigationMenuList>
            {/* AI Link */}
            <NavigationMenuItem>
              <Link href="/ai" className={`${path === '/ai' ? 'text-red-400 font-semibold': ''}`}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  AI
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
  
            {/* Item One with Submenu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white shadow-md p-4">
                <NavigationMenuList className="flex flex-col gap-2">
                  <NavigationMenuItem>
                    <Link href="/categories/sports">
                      <NavigationMenuLink>Sports</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/categories/tv-cinema">
                      <NavigationMenuLink>TV & Cinema</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/categoriesworld">
                      <NavigationMenuLink>World</NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenuContent>
            </NavigationMenuItem>
  
            {/* About Us */}
            <NavigationMenuItem>
              <Link href="/about"  className={`${path === '/about' ? 'text-red-400 font-semibold': ''}`}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
  
            {/* Contact */}
            <NavigationMenuItem>
              <Link href="/contact"  className={`${path === '/contact' ? 'text-red-400 font-semibold': ''}`}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    );
  };
  