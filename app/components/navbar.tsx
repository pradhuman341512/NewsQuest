import { Logo } from "@/components/logo"
import { Switch } from "@/components/ui/switch"
import { NavMenu } from "@/components/navmenu"
import { Button } from "@/components/ui/button"
import { MenuBox } from "@/components/menubar"

export const Navbar = () => {
  return (
    <header className=" flex item-center justify-between w-screen h-auto shadow-md p-6 bg-white text-black" >
        <Logo/>
        <NavMenu/>
        <div className="  gap-4   hidden md:flex lg:flex">
            <span className=" flex items-center justify-center gap-4 text-xl font-semibold">
                Dark Mode <Switch />
            <Button variant="outline">Button</Button>

            </span>
        </div>

        <MenuBox/>
    </header>


  )
}
