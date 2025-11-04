import React from 'react'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

const NavigationDrawer = () => {
  return (
    <div className="drawer drawer-end w-auto">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button">
          <Bars3Icon
            className="w-[2rem] lg:hidden h-[2rem] cursor-pointer text-primary-white"
          />
        </label>
      </div>
      <div className="drawer-side z-[10]">
        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu bg-gradient-to-r from-slate-900 to-slate-700 text-primary-white min-h-full w-full p-0 md:w-[500px]">
          <div className="container p-4 flex justify-between gap-4">
            <ul className="w-full">
              <li className="text-primary-white text-[16px] w-full">
                <Link
                  className="w-full p-4"
                  href={'/'}
                >
                  Home
                </Link>
              </li>
              <li className="text-primary-white text-[16px] w-full">
                <Link
                  className="w-full p-4"
                  href={'/customer-services'}
                >
                  Customer Services
                </Link>
              </li>
              <li className="text-primary-white text-[16px] w-full">
                <Link
                  className="w-full p-4"
                  href={'/about'}
                >
                  About Us
                </Link>
              </li>
              <div className="collapse text-primary-white text-[16px] w-full">
                <input type="checkbox" />
                <div className="collapse-title min-h-fit h-min">Others</div>
                <ul className="collapse-content p-0 pl-4">
                  <li className="text-primary-white text-[16px] w-full">
                    <Link
                      className="w-full p-4"
                      href={'/'}
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
            </ul>
            <label htmlFor="my-drawer-4" className="drawer-button pt-2">
              <XMarkIcon
                className="w-[2rem] lg:hidden h-[2rem] cursor-pointer text-primary-white"
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavigationDrawer