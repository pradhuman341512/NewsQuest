'use client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
            <NavigationMenuLink
              href="/ai"
              className={`${path === '/ai' ? 'text-red-400 font-semibold' : ''} ${navigationMenuTriggerStyle()}`}
            >
              AI
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Categories with Submenu */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white shadow-md p-4">
              <NavigationMenuList className="flex flex-col gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink href="/categories/sports">Sports</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/categories/tv-cinema">TV & Cinema</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink href="/categories/world">World</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* About Us */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/about"
              className={`${path === '/about' ? 'text-red-400 font-semibold' : ''} ${navigationMenuTriggerStyle()}`}
            >
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Contact */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="/contact"
              className={`${path === '/contact' ? 'text-red-400 font-semibold' : ''} ${navigationMenuTriggerStyle()}`}
            >
              Contact
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
