import React from "react";
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
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
  import Link from "next/link";

  


const NavMenu = () => {
    return (
        <div className="justify-center flex mt-10 bg-zinc-50">
            <div className="bg-zinc-50 mr-64 h-10">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </div>
            <div className="bg-zinc-50 ml-4">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="bg-zinc-50">
                            <Link href="#" className="bg-zinc-50 font-semibold font-sans-Roboto hover:font-bold"><p className="bg-zinc-50">Dashboard</p></Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="bg-zinc-50 ml-4">
            <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="bg-zinc-50">
                            <Link href="#" className="bg-zinc-50 font-semibold font-sans-Roboto hover:font-bold"><p className="bg-zinc-50">Vendas</p></Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="bg-zinc-50 ml-4">
            <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="bg-zinc-50">
                            <Link href="#" className="bg-zinc-50 font-semibold font-sans-Roboto hover:font-bold"><p className="bg-zinc-50">Produtos</p></Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="bg-zinc-50 ml-4">
            <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem className="bg-zinc-50">
                            <Link href="#" className="bg-zinc-50 font-semibold font-sans-Roboto hover:font-bold"><p className="bg-zinc-50">Sair</p></Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>


    )
}


export default NavMenu