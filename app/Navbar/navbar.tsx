import { Logo } from "@/components/logo"
import { Switch } from "@/components/ui/switch"
import { NavMenu } from "@/app/Navbar/navmenu"
import { Button } from "@/components/ui/button"
import { MenuBox } from "@/components/menubar"

export const Navbar = () => {
  return (
    <header className=" flex item-center justify-between w-screen h-auto px-16 shadow-md py-4 bg-white text-black" >
        <Logo/>
        <NavMenu/>
        <div className="  gap-4   hidden md:flex lg:flex">
            <span className=" flex items-center justify-center gap-4 text-xl font-semibold">
                Dark Mode <Switch />
            <Button variant="outline" className="bg-blue-700 text-white  hover:bg-white hover:text-black text-xl font-semibold p-3 items-center justify-center">LogIn</Button>

            </span>
        </div>

        <MenuBox/>
    </header>


  )
}
