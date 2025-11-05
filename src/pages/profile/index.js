import { Accordion, AccordionContent, AccordionHeader } from "@/components/atoms/Accordion"
import Breadcrumb from "@/components/atoms/Breadcrumb"
import Button from "@/components/atoms/Button"
import ProfileLayout from "@/components/layouts/ProfileLayout"
import OrderCard from "@/components/molecules/OrderCard"
import { ChevronRightIcon, EnvelopeIcon, MapPinIcon, PhoneIcon, UserIcon, UsersIcon, WalletIcon } from "@heroicons/react/24/outline"
import { CalendarDateRangeIcon } from "@heroicons/react/24/solid"
import React from 'react'

const Profile = () => {
  const profile = {
    name: "Natte Vagon",
    role: "Frontend Engineer",
    username: "nattevagon",
    email: "nattevagon@example.com",
    phone: "+62 896-6634-2843",
    location: "Sleman, Yogyakarta Special Region",
    birthday: "17 August 1999",
    image:
      "https://nattevagon.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpersonal-photo.48d40ed4.jpg&w=1920&q=75",
  };

  return (
    <div className="container py-4 lg:py-8 min-h-screen">
      <div className="mb-4">
        <Breadcrumb
          isHome={true}
          title={"Profile"}
        />
      </div>
      <ProfileLayout profile={profile} page="general">
        <div className="w-full bg-primary-white p-4 rounded-xl space-y-4">
          <div className="text-lg font-semibold text-primary-black border-b border-1 pb-2">General</div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <UserIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Username</p>
                <p className="font-medium text-gray-800">{profile.username}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <EnvelopeIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-800">{profile.email}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-medium text-gray-800">{profile.phone}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CalendarDateRangeIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Birthday</p>
                <p className="font-medium text-gray-800">{profile.birthday}</p>
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </div>
  )
}

export default Profile