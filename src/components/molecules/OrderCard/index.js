import React from "react";
import { MapPinIcon, ClockIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionHeader } from "@/components/atoms/Accordion";
import Button from "@/components/atoms/Button";

export default function OrderCard({ order }) {
  return (
    <div className="border rounded-xl hover:shadow-md transition-all">
      {/* Header */}
      <div className="">
        <Accordion>
          <AccordionHeader>
            <h3 className="text-lg font-bold text-slate-900">{order.eventName}</h3>
            <div className="flex items-center gap-2 mt-2 text-gray-600">
              <Image
                src={order.promotor_logo}
                width={28}
                height={28}
                alt="promotor"
                className="rounded-full"
              />
              <div className="text-sm line-clamp-1">{order.promotor_name}</div>
            </div>
          </AccordionHeader>
          <AccordionContent>
            <Image
              src={order.image_url}
              width={400}
              height={0}
              alt="Order"
              className="w-full rounded-xl"
            />
          </AccordionContent>
        </Accordion>
      </div>

      {/* Timeline */}
      {/* <div className="relative">
        <div className="absolute top-0 left-3 bottom-0 w-0.5 bg-gray-200"></div>
        <div className="flex flex-col gap-3">
          {order.stages.map((stage, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-1"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">{stage.time}</p>
                <p className="text-gray-500 text-sm">{stage.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Footer */}
      <div className="flex flex-col justify-start md:flex-row md:items-center md:justify-between gap-4 p-4 border-t border-gray-200">
        <div className="text-gray-600 space-y-2">
          <div className="flex items-center gap-2 text-md font-medium">
            <MapPinIcon className="w-4 h-4" />
            {order.location}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <ClockIcon className="w-4 h-4" />
            {order.date}
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 md:flex-col md:justify-end">
          <span
            className={`text-sm font-medium px-3 py-1 rounded-full ${order.status === "Paid"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
              }`}
          >
            {order.status}
          </span>
          <p className="font-semibold text-slate-900">
            Rp{order.price.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Amenities */}
      {/* <div className="flex flex-wrap gap-2 px-4 pb-4">
        {order.amenities.map((item, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700 flex items-center gap-1"
          >
            <CheckCircleIcon className="w-3.5 h-3.5 text-blue-500" />
            {item}
          </span>
        ))}
      </div> */}

      {order.status === "Pending" && (
        <div className="w-full md:max-w-[340px] p-4 pt-0 justify-self-end">
          <div className="flex items-center justify-between md:justify-end gap-4">
            <Button
              onClick={() => alert('cancel')}
              label="Cancel Order"
              className="bg-red-200 rounded-xl w-full"
              labelClassName="text-red-500"
            />
            <Button
              href={'/event/doomsday-1/payment'}
              label="Pay Now"
              className="bg-slate-900 rounded-xl w-[-webkit-fill-available]"
            />
          </div>
        </div>
      )}
    </div>
  );
}
