import React from 'react';
import { ChevronRightIcon, MapPinIcon, UsersIcon, WalletIcon } from "@heroicons/react/24/outline"
import Link from "next/link";

const ProfileLayout = ({ children, profile, page }) => {
  const menus = [
    { icon: <UsersIcon className="w-6 h-6 lg:w-4 lg:h-4" />, label: "General", page: "general", pathname: "" },
    { icon: <MapPinIcon className="w-6 h-6 lg:w-4 lg:h-4" />, label: "Location", page: "location", pathname: "location" },
    { icon: <WalletIcon className="w-6 h-6 lg:w-4 lg:h-4" />, label: "Payment History", page: "paymentHistory", pathname: "payment-history" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <div className="col-span-1 lg:col-span-1 w-full order-1 lg:order-1 space-y-4">
        <div className="flex flex-col items-center bg-gradient-to-b from-slate-900 to-slate-700 p-4 rounded-xl w-full">
          <img
            src={profile.image}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
          />
          <h2 className="mt-2 text-lg font-semibold text-primary-white">{profile.name}</h2>
          <div className="flex items-center gap-1 text-primary-white text-sm mt-1">
            <MapPinIcon className="w-4 h-4" />
            <span>{profile.location}</span>
          </div>
        </div>
        <div className="w-full bg-primary-white p-2 rounded-xl">
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-2">
            {menus.map((item, index) => (
              <Link
                href={"/profile/" + item.pathname}
                key={index}
                className={"flex items-center justify-center lg:justify-between p-4 text-sm text-primary-black font-semibold hover:bg-gray-200 transition rounded-lg cursor-pointer" + (page == item.page ? " bg-gray-200" : "")}
              >
                <div className="flex items-center gap-3 text-gray-700">
                  {item.icon}
                  <span className="hidden lg:block">{item.label}</span>
                </div>
                <ChevronRightIcon className="hidden lg:block w-4 h-4 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-2 w-full order-2 lg:order-2 flex flex-col gap-4">
        {children}
      </div>
    </div>
  )
}

export default ProfileLayout