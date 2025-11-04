import React, { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import NavigationDrawer from "../MobileDrawer"
import { A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TiketlyIcon } from "@/assets/images/logos";
import Button from "@/components/atoms/Button";

function Navigation({ isTopTeamsList, onSetTopTeamsList }) {
  useEffect(() => {
    const element = document.querySelector('#topTeamsList');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          onSetTopTeamsList(false)
          console.log('Element is NOT visible in the viewport');
        } else {
          onSetTopTeamsList(true)
          console.log('Element is visible in the viewport');
        }
      });
    });

    observer.observe(element);
  }, [])

  return (
    <div className="w-full">
      <div id="topTeamsList" className="bg-slate-700 w-full">
        <div className="container">
          <div className="hidden lg:flex text-primary-white py-2 text-[12px] items-center justify-center gap-4">
            <Link
              href={'/about'}
            >
              About Us
            </Link>
            <Link
              href={'/customer-services'}
            >
              Customer Services
            </Link>

            <Link
              href={'/faq'}
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
      <div className={"bg-gradient-to-r from-slate-900 to-slate-700 w-full h-[64px] flex items-center justify-center z-[8]" + (isTopTeamsList ? '' : ' fixed top-0')}>
        <div className="container flex items-center justify-between">
          <div className="w-[138px] h-[auto]">
            <Link href="/">
              <Image
                className="w-[138px] h-auto"
                src={TiketlyIcon.src}
                width={138}
                height={0}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden lg:flex items-center w-full justify-end">
            <div className="flex items-center justify-between gap-2">
              <Button
                className="bg-slate-600 rounded-xl"
                href={`/login`}
                label="Login"
              />
              <Button
                className="border-[1px] border-slate-400 rounded-xl"
                href={`/register`}
                label="Sign Up"
              />
            </div>
          </div>
          <NavigationDrawer />
        </div>
      </div>
    </div>
  )
}

export default Navigation