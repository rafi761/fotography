"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { formUrlQuery } from "@/sanity/utils"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CategoryProps{
    category: string[]
}

const Category = ({category}: CategoryProps) => {
    const [active, setActive] = useState("")
    const searchParams = useSearchParams()
    const router = useRouter()
    const handleActive = (link: string) => {
        let newUrl = ""

        if(active === link){
            setActive("")

            newUrl = formUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["category"],
                value: null
            })
        }else{
            setActive(link)

            newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "category",
                value: link
            })
        }

        router.push(newUrl, {scroll: false})
    }
    return (
        <section className="flex items-center justify-between max-lg: px-8 lg:px-28 py-6 max-w-5xl mx-auto">
            {category.map((item) => (
                <Button onClick={() => handleActive(item)} key={item} className={cn("border-0 bg-transparent text-[#7D7C7C] text-lg font-normal hover:bg-[#7D7C7C] hover:text-[#F1EFEF]", active === item ? "bg-[#7D7C7C] text-[#F1EFEF]": "")}>
                    {item}
                </Button>
            ))}
        </section>
    )
}

export default Category