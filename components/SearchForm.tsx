"use client"

import { useState, useEffect } from "react"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import Image from "next/image"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

import { formUrlQuery } from "@/sanity/utils"

const SearchForm = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = ""

      if(search){
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: search
        })
      }else{
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"]
        })
      }

      router.push(newUrl, {scroll: false})
    }, 300)
    return () => clearTimeout(delayDebounceFn)
  }, [search])
  return (
    <form className="flex items-center px-6 py-10 max-w-5xl mx-auto relative ">
        <label className="absolute left-10">
            <Search className="w-8 h-8 text-white"/>
        </label>
        <Input className="bg-[#7D7C7C] !ring-0 !ring-offset-0 h-16 px-14 text-white placeholder:text-white text-lg rounded-2xl" placeholder="Search.." value={search} onChange={(e) => setSearch(e.target.value)}/>
    </form>
  )
}

export default SearchForm