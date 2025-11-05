import { Accordion, AccordionContent, AccordionHeader } from "@/components/atoms/Accordion"
import Breadcrumb from "@/components/atoms/Breadcrumb"
import Button from "@/components/atoms/Button"
import OrderCard from "@/components/molecules/OrderCard"
import React from 'react'

const Transaction = () => {
  const orders = [
    {
      id: 1,
      eventName: "We The Fest 2025",
      image_url: "https://assets.artatix.co.id/event/68a1729e3507b-WebBannerBYF4.png",
      promotor_name: "Ismaya Live",
      promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png",
      startTime: "14:00",
      endTime: "23:00",
      date: "Sat, 20 Jul 2025",
      location: "GBK Senayan, Jakarta",
      stages: [
        { time: "14:00", name: "Open Gate" },
        { time: "16:00", name: "Reality Club" },
        { time: "18:30", name: "Pamungkas" },
        { time: "21:00", name: "Lauv" },
      ],
      price: 850000,
      amenities: ["E-ticket", "VIP Access", "Free Drink", "Merch"],
      status: "Paid",
    },
    {
      id: 2,
      eventName: "Java Jazz Festival",
      image_url: "https://assets.artatix.co.id/event/68a1729e3507b-WebBannerBYF4.png",
      promotor_name: "Java Festival Production",
      promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png",
      startTime: "13:00",
      endTime: "22:30",
      date: "Sun, 16 Mar 2025",
      location: "JIExpo Kemayoran, Jakarta",
      stages: [
        { time: "13:00", name: "Open Gate" },
        { time: "15:30", name: "Raisa" },
        { time: "18:00", name: "Tulus" },
        { time: "20:30", name: "Bruno Major" },
      ],
      price: 950000,
      amenities: ["E-ticket", "Snack", "Wifi Zone"],
      status: "Pending",
    },
  ];


  return (
    <div className="container py-4 lg:py-8 min-h-screen">
      <div className="mb-4">
        <Breadcrumb
          isHome={true}
          title={"Transaction"}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-1 lg:col-span-1 w-full flex flex-col order-1 lg:order-1">
          <div className="w-full bg-primary-white p-2 rounded-xl">
            <div className="border-b border-1 p-2 flex items-center justify-between gap-2 text-primary-black">
              <div className="text-lg font-semibold">Filters</div>
              <Button
                onClick={() => alert(reset)}
                label="Reset"
                className="bg-transparent hover:bg-transparent"
                labelClassName="text-slate-900 line-clamp-1 w-max"
              />
            </div>
            <div className="flex flex-col gap-2 py-2">
              <Accordion defaultIsOpen={true}>
                <AccordionHeader>Category</AccordionHeader>
                <AccordionContent>
                  Kontent Category
                </AccordionContent>
              </Accordion>
              <Accordion defaultIsOpen={true}>
                <AccordionHeader>Date Time</AccordionHeader>
                <AccordionContent>
                  Kontent Waktu
                </AccordionContent>
              </Accordion>
              <Accordion defaultIsOpen={true}>
                <AccordionHeader>Order Status</AccordionHeader>
                <AccordionContent>
                  Kontent Status Pesanan
                </AccordionContent>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2 w-full order-2 lg:order-2 flex flex-col gap-4">
          <div className="w-full bg-primary-white p-4 rounded-xl">
            <div className="space-y-4">
              {orders.map((order) => (
                <OrderCard key={order.id} order={order} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Transaction