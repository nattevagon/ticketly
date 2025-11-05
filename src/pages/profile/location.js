import React from 'react';
import { MapPinIcon } from "@heroicons/react/24/outline";
import ProfileLayout from "@/components/layouts/ProfileLayout";
import Breadcrumb from "@/components/atoms/Breadcrumb";

const Location = () => {
  const profile = {
    name: "Natte Vagon",
    role: "Frontend Engineer",
    username: "xiofikhasan",
    email: "nattevagon@example.com",
    phone: "+62 896-6634-2843",
    location: "Sleman, Yogyakarta Special Region",
    image:
      "https://nattevagon.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpersonal-photo.48d40ed4.jpg&w=1920&q=75",
  };

  return (
    <div className="container py-4 lg:py-8 min-h-screen">
      <div className="mb-4">
        <Breadcrumb
          isHome={true}
          title={"Location"}
        />
      </div>
      <ProfileLayout profile={profile} page="location">
        <div className="w-full bg-primary-white p-4 rounded-xl space-y-4">
          <div className="text-lg font-semibold text-primary-black border-b border-1 pb-2">Location</div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <MapPinIcon className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium text-gray-800">{profile.location}</p>
              </div>
            </div>
          </div>
        </div>
      </ProfileLayout>
    </div>
  )
}

export default Location