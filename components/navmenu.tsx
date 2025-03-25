import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import Link from "next/link"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
export const NavMenu = () => {
  return (
    <div className=" hidden md:flex lg:flex">
    <NavigationMenu className="flex text-xl font-semibold">
        <NavigationMenuList>
            <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                AI
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
                <NavigationMenuLink>Sports</NavigationMenuLink>
                <NavigationMenuLink>TV & Chinema</NavigationMenuLink>
                <NavigationMenuLink>World</NavigationMenuLink>
                <NavigationMenuLink>Arts</NavigationMenuLink>
                <NavigationMenuLink>Health</NavigationMenuLink>
                <NavigationMenuLink>Politics</NavigationMenuLink>
                <NavigationMenuLink>Science</NavigationMenuLink>
                <NavigationMenuLink>Educations</NavigationMenuLink>

                

            </NavigationMenuContent>
            
            
            </NavigationMenuItem>

            <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About US
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Contact
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
</div>
  )
}
