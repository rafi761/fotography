import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import React from "react"

const poppins = Poppins({
  weight: "500",
  subsets: ["latin"]
})

const RootLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className={cn("w-full flex flex-col justify-center", poppins.className)}>
        <Navbar />

        <section className="">
          <div className="max-md:hidden">
            <Sidebar />
          </div>
          <main className="pl-56 max-md:px-6">
              {children}
          </main>
        </section>
        <Footer />
    </section>
  )
}

export default RootLayout