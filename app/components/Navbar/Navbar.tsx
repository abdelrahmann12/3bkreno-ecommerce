import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { CircleAlertIcon , Heart , ShoppingCart } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import abkrenoLogo from "../../../public/3bkreno_logo-removebg-preview.png"

// ========================================================

import  "../Navbar/Navbar.css"
import Image from "next/image";


export default function Navbar() {
  return (
    <div className=" px-2 py-2 flex items-cente justify-around bg-blue-500">
      <div className="logo">
        <Image width={80} alt="abkreno logo" src={abkrenoLogo}></Image>
      </div>
      <NavigationMenu>
  <NavigationMenuList className=" gap-6">
    <NavigationMenuItem>
      <NavigationMenuTrigger>الصفحه الرئيسيه</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger>المنتجات</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger>الاصناف</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>

    <NavigationMenuItem>
      <NavigationMenuTrigger>سله المشتريات</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink>Link</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>

  </NavigationMenuList>
</NavigationMenu>

<div className="icons flex items-center gap-7">
  <ShoppingCart />
  <Heart />
  <div className="login">
  <Button>تسجيل الدخول</Button>
</div>

</div>

      <Sheet>
        <SheetTrigger className="md:hidden text-2xl">☰</SheetTrigger>

        <SheetContent side="right">
          <nav className="flex flex-col gap-4">
            <a href="/d">Home</a>
            <a href="/about">About</a>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
