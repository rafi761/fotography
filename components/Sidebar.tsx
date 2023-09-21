"use client"

import { useState } from "react"
import Image from "next/image"

import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"

const Sidebar = () => {
    const [active, setActive] = useState("")

    const handleActive = (link: string) => {
        setActive(link)
    }

    return (
        <section className="flex flex-col gap-14 items-center w-56 h-screen py-20 fixed top-0 left-0 bottom-0 bg-[#7D7C7C]">
            <div className="flex flex-col items-center gap-3">
                <Image 
                    src="/assets/photographer-avatar.jpg"
                    alt="Photographer Avatar"
                    width={120}
                    height={120}
                    className="object-contain rounded-full"
                />
                <h2 className="text-xl font-semibold text-[#F1EFEF]">Dzawin Nur</h2>
            </div>

            <div className="flex flex-col justify-center gap-6">
                {sidebarLinks.map((link) => (
                    <button onClick={() => handleActive(link.title)} key={link.title} className={cn("text-[#CCC8AA] text-lg font-semibold", active === link.title ? "bg-[#CCC8AA] text-[#F1EFEF] rounded-lg px-2 py-1 transition-all" : "")}>
                        {link.title}
                    </button>
                ))}
            </div>
        </section>
    )
}

export default Sidebar