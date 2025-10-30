import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import NavigationDrawer from "../MobileDrawer"
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TicketlyIcon } from "@/assets/images/logos";
import Button from "@/components/atoms/Button";

function PaymentNavigation() {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 w-full h-[64px] flex items-center justify-center z-[2] fixed top-0">
        <div className="container flex items-center justify-between">
          <div className="w-[138px] h-[auto]">
            <Link href="/">
              <Image
                className="w-[138px] h-auto"
                src={TicketlyIcon.src}
                width={138}
                height={0}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="flex items-center w-full justify-end">
            <div className="flex items-center justify-between gap-2 px-4 py-2">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentNavigation