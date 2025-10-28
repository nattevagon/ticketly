import React, { useMemo, useState } from 'react';
import PaymentLayout from "@/components/layouts/PaymentLayout";
import { CalendarDaysIcon, ChevronRightIcon, ClockIcon, MapPinIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/scrollbar';
import Image from "next/image";
import Button from "@/components/atoms/Button";
import PaymentStep from "@/components/molecules/PaymentStep";
import TextField from "@/components/atoms/TextField";

const OrderDetail = () => {
  const [orderDetailData, setOrderDetailData] = useState({});
  const [fieldValid, setFieldValid] = useState({
    status: false,
    name: '',
    message: ''
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;

    setOrderDetailData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setFieldValid(() => ({
      status: false,
      name: '',
      message: ''
    }));
  }

  return (
    <div className="container py-8">
      {/* STEP NAVIGATION */}
      <PaymentStep
        page={'order'}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        {/* LEFT: Ticket List */}
        <div className="col-span-1 lg:col-span-2 flex flex-col mt-6 lg:mt-0 order-1">
          <div className="w-full flex flex-col gap-4">
            <div className="bg-secondary-white dark:bg-secondary-black p-4 flex flex-col gap-2 text-primary-black rounded-xl">
              <div className="text-lg font-bold">Order Detail</div>
              <div className="mt-2 text-sm text-primary-gray">
                <div className="flex flex-col gap-4">
                  <div>
                    <TextField
                      type="text"
                      label="Full Name"
                      placeholder="Type a Name"
                      name="name"
                      onChange={handleChangeForm}
                      value={orderDetailData?.name || ""}
                      className="w-full bg-transparent p-2"
                      fieldValid={fieldValid}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <TextField
                      type="select"
                      label="ID Type"
                      placeholder="Select a ID Type"
                      name="id_type"
                      onChange={handleChangeForm}
                      value={orderDetailData?.id_type || ""}
                      className="w-full bg-transparent p-2"
                      options={[
                        { id: 0, name: "KTP" },
                        { id: 1, name: "SIM A" },
                        { id: 1, name: "SIM C" },
                        { id: 1, name: "Passport" }
                      ]}
                      fieldValid={fieldValid}
                    />
                    <TextField
                      type="number"
                      label="ID Number"
                      placeholder="Type a ID Number"
                      name="id_number"
                      onChange={handleChangeForm}
                      value={orderDetailData?.id_number || ""}
                      className="w-full bg-transparent p-2"
                      fieldValid={fieldValid}
                    />
                  </div>
                  <div>
                    <TextField
                      type="email"
                      label="Email"
                      placeholder="Type a Email"
                      name="email"
                      onChange={handleChangeForm}
                      value={orderDetailData?.email || ""}
                      className="w-full bg-transparent p-2"
                      fieldValid={fieldValid}
                    />
                  </div>
                  <div>
                    <TextField
                      type="number"
                      label="WhatsApp Number"
                      placeholder="Type a WhatsApp Number"
                      name="phone_number"
                      onChange={handleChangeForm}
                      value={orderDetailData?.phone_number || ""}
                      className="w-full bg-transparent p-2"
                      fieldValid={fieldValid}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondary-white dark:bg-secondary-black p-4 flex flex-col gap-2 text-primary-black rounded-xl">
              <div className="text-lg font-bold">Ticket - 1 (Regular : Festival)</div>
              {/* <div className="bg-slate-200 text-lg font-bold p-4 flex items-center justify-center rounded-xl">Regular : Festival</div> */}
              <div className="mt-2 text-sm text-primary-gray">
                <div className="flex flex-col gap-4">
                  <div>
                    <TextField
                      type="text"
                      label="Full Name"
                      placeholder="Type a Name"
                      name="name"
                      onChange={handleChangeForm}
                      value={orderDetailData?.name || ""}
                      className="w-full bg-transparent p-2"
                      fieldValid={fieldValid}
                    />
                  </div>
                  <div className="flex items-center gap-4">
                    <TextField
                      type="select"
                      label="ID Type"
                      placeholder="Select a ID Type"
                      name="id_type"
                      onChange={handleChangeForm}
                      value={orderDetailData?.id_type || ""}
                      className="w-full bg-transparent p-2"
                      options={[
                        { id: 0, name: "KTP" },
                        { id: 1, name: "SIM A" },
                        { id: 1, name: "SIM C" },
                        { id: 1, name: "Passport" }
                      ]}
                      fieldValid={fieldValid}
                    />
                    <TextField
                      type="number"
                      label="ID Number"
                      placeholder="Type a ID Number"
                      name="id_number"
                      onChange={handleChangeForm}
                      value={orderDetailData?.id_number || ""}
                      className="w-full bg-transparent p-2"
                      fieldValid={fieldValid}
                    />
                  </div>
                  <div>
                    <TextField
                      type="email"
                      label="Email"
                      placeholder="Type a Email"
                      name="email"
                      onChange={handleChangeForm}
                      value={orderDetailData?.email || ""}
                      className="w-full bg-transparent p-2"
                      fieldValid={fieldValid}
                    />
                  </div>
                  <div>
                    <TextField
                      type="number"
                      label="WhatsApp Number"
                      placeholder="Type a WhatsApp Number"
                      name="phone_number"
                      onChange={handleChangeForm}
                      value={orderDetailData?.phone_number || ""}
                      className="w-full bg-transparent p-2"
                      fieldValid={fieldValid}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT: Order Detail */}
        <div className="col-span-1 order-2">
          <div className="w-full flex flex-col gap-4">
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
              <div className="flex flex-col gap-2 text-primary-black font-medium p-4">
                <div className="text-lg font-bold">
                  Buzz Youth Fest 4
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div>
                    <CalendarDaysIcon className="h-[16px] w-[16px] inline-block" />
                  </div>
                  <div>25 - 26 December 2025</div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div>
                    <ClockIcon className="h-[16px] w-[16px] inline-block" />
                  </div>
                  <div>15:00 - 23:00</div>
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <div>
                    <MapPinIcon className="h-[16px] w-[16px] inline-block" />
                  </div>
                  <div className="mt-[2px]">GOR SATRIA PURWOKERTO JAWA TENGAH, Kab. Banyumas, Jawa Tengah</div>
                </div>
              </div>
            </div>
            <div className="bg-secondary-white dark:bg-secondary-black p-4 rounded-xl">
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
          </div>
        </div>
      </div>
    </div>
  );
};

OrderDetail.getLayout = function getLayout(page) {
  return <PaymentLayout>{page}</PaymentLayout>;
};

export default OrderDetail