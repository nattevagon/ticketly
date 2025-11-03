import { TiketlyIcon } from "@/assets/images/logos"
import Image from "next/image"
import React from 'react'

const Footer = () => {
  return (
    <div id="basicFooter" className="container bg-gradient-to-r from-slate-900 to-slate-700 w-full max-w-none">
      <div className="flex items-center justify-center px-4 py-8">
        <Image
          className="invert brightness-0 w-[100px] lg:w-[160px]"
          src={TiketlyIcon.src}
          width={160}
          height={160}
          alt="LeagueLogo"
        />
      </div>
      <div className="flex items-center justify-center border-t border-slate-600 text-sm p-4">
        © 2025 Tiketly. Created By Natte Vagon
      </div>
    </div>
  )
}

export default Footer