import { TiketlyIcon } from "@/assets/images/logos"
import Image from "next/image"
import Link from "next/link"
import React from 'react'

const Footer = () => {
  return (
    <div id="basicFooter" className="container bg-gradient-to-r from-slate-900 to-slate-700 w-full max-w-none pb-[92px] lg:pb-0">
      <div className="flex items-center justify-center px-4 py-8">
        <Image
          className="invert brightness-0 w-[100px] lg:w-[160px]"
          src={TiketlyIcon.src}
          width={160}
          height={160}
          alt="LeagueLogo"
        />
      </div>
      <div className="flex flex-col items-center justify-center border-t border-slate-600 p-4 space-y-2">
        <div className="text-sm">
          © 2025 Tiketly.
        </div>
        <div>
          <div className="text-xs">
            Created By <Link className="font-bold" href="https://www.linkedin.com/in/nattevagon">Natte Vagon</Link> & Image Assets by <Link className="font-bold" href="https://artatix.co.id/">Artatix</Link>.
          </div>
          <div className="text-xs">
            Just for <Link className="font-semibold" href="https://nattevagon.netlify.app/">my portfolio </Link>not for real web, peace guys.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer