import { Instagram, Facebook, Twitter, Rocket } from 'lucide-react';

import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 w-full pl-60 pr-5 py-10 bg-[#7D7C7C] max-md:px-6">
        <div className="flex justify-between max-md:justify-start max-md:flex-wrap max-md:gap-6  w-full">
            <div className="flex flex-col gap-1">
                <h1 className="text-[#F1EFEF] max-md:text-lg text-2xl font-semibold">Photography <span className="text-[#CCC8AA] italic underline decoration-2">enthusiastic</span></h1>
                <p className="text-[#F1EFEF] text-sm font-normal italic">Capture beautiful moment in your life</p>
            </div>

            <div className="flex flex-col gap-1">
                {footerLinks[0].firstLinks?.map((link) => (
                    <p key={link} className="text-[#F1EFEF]">{link}</p>
                ))}        
            </div>
            <div className="flex flex-col gap-1">
                {footerLinks[2].thirdLinks?.map((link) => (
                    <p key={link} className="text-[#F1EFEF]">{link}</p>
                ))}        
            </div>
            <div className="flex flex-col gap-1">
                {footerLinks[3].fourthLinks?.map((link) => (
                    <p key={link} className="text-[#F1EFEF]">{link}</p>
                ))}        
            </div>
        </div>

        <div className="w-10/12 mx-auto h-1 bg-[#F1EFEF] rounded-xl" />

        <div className='flex flex-col items-center gap-3 mt-8'>
            <div className='flex gap-5'>
                <Instagram className='w-8 h-8 text-white'/>
                <Facebook className='w-8 h-8 text-white'/>
                <Twitter className='w-8 h-8 text-white'/>
                <Rocket className='w-8 h-8 text-white'/>
            </div>
            <p className='text-[#F1EFEF] text-center]'>©Copyright. All right reserved</p>
        </div>
    </footer>
  )
}

export default Footer