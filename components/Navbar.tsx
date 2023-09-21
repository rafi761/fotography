"use client"

import Sidebar from "./Sidebar"

import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
  return (
    <nav className="flex z-50 max-md:justify-between justify-end items-center w-full max-md:px-6 px-16 h-16 bg-[#7D7C7C]">
        <Sheet>
            <SheetTrigger asChild><Menu className="w-10 h-10 text-[#F1EFEF] md:hidden" /></SheetTrigger>
            <SheetContent side="left" className="w-56 h-screen">
                <Sidebar />
            </SheetContent>
        </Sheet>

        <h1 className="text-[#F1EFEF] max-md:text-lg text-2xl font-semibold">Photography <span className="text-[#CCC8AA] italic underline decoration-2">enthusiastic</span></h1>
    </nav>
  )
}

export default Navbar