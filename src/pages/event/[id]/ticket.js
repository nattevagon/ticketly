import React, { useMemo, useState } from 'react';
import PaymentLayout from "@/components/layouts/PaymentLayout";
import { ChevronRightIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Image from "next/image";
import Button from "@/components/atoms/Button";

const tickets = [
  {
    id: 1,
    title: "COUPLE TICKET",
    description: "Grab it for 2 person!!",
    price: 190000,
    status: "On Sale",
    type: "Bundle",
    max: 6,
  },
  {
    id: 2,
    title: "PRESALE : HARDER 2",
    description: "Grab it fast!!",
    price: 100000,
    status: "On Sale",
    max: 6,
  },
  {
    id: 3,
    title: "EARLYBIRD",
    price: 70000,
    status: "Sold Out",
  },
];

const Ticket = () => {
  const [quantities, setQuantities] = useState([]); // bentuk: [{ id, qty }]

  const handleAdd = (id) => {
    setQuantities((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (exists) {
        return prev.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { id, qty: 1 }];
      }
    });
  };

  const handleRemove = (id) => {
    setQuantities((prev) => {
      const exists = prev.find((item) => item.id === id);
      if (!exists) return prev;
      if (exists.qty === 1) {
        return prev.filter((item) => item.id !== id);
      }
      return prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      );
    });
  };

  const getQty = (id) => {
    const found = quantities.find((item) => item.id === id);
    return found ? found.qty : 0;
  };

  // 🧮 Hitung total otomatis
  const orderDetails = useMemo(() => {
    const selected = tickets.filter((t) =>
      quantities.some((q) => q.id === t.id && q.qty > 0)
    );

    const subtotal = selected.reduce((sum, t) => {
      const qty = quantities.find((q) => q.id === t.id)?.qty || 0;
      return sum + t.price * qty;
    }, 0);

    const totalTickets = quantities.reduce((sum, q) => sum + q.qty, 0);

    return { selected, subtotal, totalTickets };
  }, [quantities]);

  return (
    <div className="container py-8">
      {/* STEP NAVIGATION */}
      <div className="flex items-center justify-center gap-4 pb-4">
        <div className="flex items-center gap-2 text-[16px]">
          <div className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold">
            1
          </div>
          <div className="font-medium text-primary-black">Choose Category</div>
        </div>
        <ChevronRightIcon className="w-6 h-6 text-gray-500" />
        <div className="flex items-center gap-2 text-[16px]">
          <div className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold">
            2
          </div>
          <div className="font-medium text-primary-black">Order Detail</div>
        </div>
        <ChevronRightIcon className="w-6 h-6 text-gray-500" />
        <div className="flex items-center gap-2 text-[16px]">
          <div className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold">
            3
          </div>
          <div className="font-medium text-primary-black">Payment Method</div>
        </div>
        <ChevronRightIcon className="w-6 h-6 text-gray-500" />
        <div className="flex items-center gap-2 text-[16px]">
          <div className="bg-slate-800 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold">
            4
          </div>
          <div className="font-medium text-primary-black">Payment</div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        {/* LEFT: Ticket List */}
        <div className="col-span-1 lg:col-span-2 flex flex-col mt-6 lg:mt-0 order-1">
          <div className="bg-secondary-white dark:bg-secondary-black rounded-xl">
            <Swiper
              className="rounded-xl"
              modules={[Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <Image
                  src="https://assets.artatix.co.id/event/68a1729e3507b-WebBannerBYF4.png"
                  alt="BannerItem"
                  width={600}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto rounded-xl"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2FLKTOLQ5OEN.png&w=1600&q=50"
                  alt="BannerItem"
                  width={600}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto rounded-xl"
                />
              </SwiperSlide>
            </Swiper>
            <div className="text-xl font-bold text-primary-black p-4">
              Buzz Youth Fest 4
            </div>
          </div>
          {/* Ticket List */}
          <div className="bg-secondary-white dark:bg-secondary-black p-4 flex flex-col gap-2 mt-4 text-primary-black rounded-xl">
            <div className="text-md font-bold">Category</div>
            <div className="mt-2 text-sm text-primary-gray">
              <div className="flex flex-col gap-4">
                {tickets.map((ticket) => {
                  const qty = getQty(ticket.id);
                  const isSoldOut = ticket.status === "Sold Out";

                  return (
                    <div
                      key={ticket.id}
                      className={`border rounded-xl p-4 transition-all ${isSoldOut
                        ? "opacity-60 bg-gray-50"
                        : "hover:shadow-md hover:border-slate-300"
                        }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3
                            className={`font-semibold ${isSoldOut ? "text-gray-400" : "text-gray-800"
                              }`}
                          >
                            {ticket.title}
                          </h3>
                          {ticket.description && (
                            <p className="text-sm text-gray-500">
                              {ticket.description}
                            </p>
                          )}
                          {ticket.type && (
                            <span className="inline-flex items-center mt-2 text-xs text-blue-600 border border-blue-200 bg-blue-50 px-2 py-1 rounded-md">
                              📦 {ticket.type}
                            </span>
                          )}
                        </div>
                        <span
                          className={`text-xs font-medium px-2 py-1 rounded-md ${isSoldOut
                            ? "text-red-500 bg-red-50 border border-red-200"
                            : "text-blue-600 bg-blue-50 border border-blue-200"
                            }`}
                        >
                          {ticket.status}
                        </span>
                      </div>
                      <div className="border-t my-3"></div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800">
                          Rp{ticket.price.toLocaleString("id-ID")}
                        </span>

                        {isSoldOut ? (
                          <button
                            disabled
                            className="px-4 py-1.5 text-sm rounded-md border border-gray-300 text-gray-400"
                          >
                            Sold Out
                          </button>
                        ) : qty > 0 ? (
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => handleRemove(ticket.id)}
                              className="w-8 h-8 rounded-full bg-slate-700 text-primary-white flex items-center justify-center font-bold hover:bg-slate-800"
                            >
                              –
                            </button>
                            <span className="font-semibold w-4 text-center">
                              {qty}
                            </span>
                            <button
                              onClick={() => handleAdd(ticket.id)}
                              className="w-8 h-8 rounded-full bg-slate-700 text-primary-white flex items-center justify-center font-bold hover:bg-slate-800"
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleAdd(ticket.id)}
                            className="bg-slate-700 hover:bg-slate-800 text-white text-sm px-4 py-2 rounded-md"
                          >
                            Choose Ticket
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT: Order Detail */}
        <div className="col-span-1 order-2">
          {orderDetails.selected.length === 0 ? (
            <div className="w-full bg-secondary-white dark:bg-secondary-black p-4 rounded-xl">
              <div className="flex flex-col gap-2 text-primary-black">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-md text-primary-gray font-semibold">
                    Start from
                  </div>
                  <div className="text-lg text-primary-black font-bold">
                    IDR 150.000
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button
                  label="Book Now"
                  className="bg-slate-900 rounded-lg w-full"
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="w-full bg-secondary-white dark:bg-secondary-black p-4 rounded-xl">
                <div className="flex flex-col gap-2 text-primary-black">
                  <div className="flex items-center gap-2">
                    <ShoppingBagIcon className="h-[20px] w-[20px] inline-block" />
                    <div className="text-lg font-bold">Detail Order</div>
                  </div>

                  <div className="flex flex-col gap-2 mt-2 text-sm text-primary-gray">
                    {orderDetails.selected.map((t) => {
                      const qty = quantities.find((q) => q.id === t.id)?.qty || 0;
                      return (
                        <div key={t.id} className="flex justify-between mb-1">
                          <div>
                            <p className="font-medium text-gray-700">{t.title}</p>
                            <p className="text-sm text-gray-500">
                              x{qty}{" "}
                              <span className="text-gray-400">
                                (Rp{t.price.toLocaleString("id-ID")})
                              </span>
                            </p>
                          </div>
                          <p className="font-semibold">
                            Rp{(t.price * qty).toLocaleString("id-ID")}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="w-full bg-secondary-white dark:bg-secondary-black p-4 rounded-xl mt-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-md text-primary-gray font-semibold">
                    Total ({orderDetails.totalTickets} Ticket)
                  </div>
                  <div className="text-lg text-primary-black font-bold">
                    Rp{orderDetails.subtotal.toLocaleString("id-ID")}
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    label="Beli Sekarang"
                    className="bg-slate-900 rounded-lg w-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Ticket.getLayout = function getLayout(page) {
  return <PaymentLayout>{page}</PaymentLayout>;
};

export default Ticket;
