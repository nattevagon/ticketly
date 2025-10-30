import React, { useEffect, useMemo, useRef, useState } from 'react';
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
import { useRouter } from "next/router";
import Toggle from "@/components/atoms/Toggle";
import dynamic from "next/dynamic";

const OrderDetail = () => {
  const router = useRouter();
  const { asPath, query } = router;
  const { id } = query;
  const eventDetailPath = asPath.split("/order")[0];
  const [isTopSummaryOrder, setTopSummaryOrder] = useState(false);
  const paymentStepRef = useRef(null);
  const [orderDetailData, setOrderDetailData] = useState({});
  const [ticketDetailData, setTicketDetailData] = useState([]);
  const [checkedMatchOrder, setCheckedMatchOrder] = useState({});
  const [fieldValid, setFieldValid] = useState({
    status: false,
    name: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setTopSummaryOrder(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: "-64px 0px 0px 0px",
      }
    );

    if (paymentStepRef.current) {
      observer.observe(paymentStepRef.current);
    }

    return () => {
      if (paymentStepRef.current) observer.unobserve(paymentStepRef.current);
    };
  }, []);

  const handleChangeForm = (event, key) => {
    const { name, value } = event.target;

    if (key === 'orderDetail') {
      setOrderDetailData((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setTicketDetailData((prev) => {
        const index = prev.findIndex((t) => t.key === key);

        if (index === -1) {
          // belum ada → tambahkan object baru
          return [
            ...prev,
            {
              key: key,
              [name]: value,
            },
          ];
        }

        // sudah ada → update value field tertentu
        const updated = [...prev];
        updated[index] = { ...updated[index], [name]: value };
        return updated;
      });
    }

    setFieldValid(() => ({
      status: false,
      name: '',
      message: ''
    }));
  }

  const getFieldValue = (ticketKey, fieldName) => {
    const ticket = ticketDetailData.find((t) => t.key === ticketKey);
    return ticket ? ticket[fieldName] || "" : "";
  };

  const handleChangeToggleOrderMatch = (event) => {
    const { name, checked } = event.target;

    setCheckedMatchOrder((prev) => ({
      ...prev,
      [name]: checked,
    }));

    setTicketDetailData((prev) => {
      // jika toggle aktif
      if (checked) {
        // cari index data dengan key yang sama
        const existingIndex = prev.findIndex((item) => item.key === name);

        if (existingIndex !== -1) {
          // replace data lama
          const updated = [...prev];
          updated[existingIndex] = { key: name, ...orderDetailData };
          return updated;
        } else {
          // tambah data baru
          return [...prev, { key: name, ...orderDetailData }];
        }
      } else {
        // jika toggle dimatikan (opsional: hapus data yang sesuai)
        return prev.filter((item) => item.key !== name);
      }
    });
  };

  console.log('data => ', orderDetailData)
  console.log('data ticket => ', ticketDetailData)
  console.log('checked => ', checkedMatchOrder)

  if (id) {
    return (
      <div className="container pb-8">
        {/* STEP NAVIGATION */}
        <div ref={paymentStepRef} className="pt-8 pb-4">
          <PaymentStep
            page={'order'}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* LEFT: Ticket List */}
          <div className="col-span-1 lg:col-span-2 flex flex-col order-1">
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
                        onChange={(event) => handleChangeForm(event, 'orderDetail')}
                        value={orderDetailData?.name || ""}
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
                        onChange={(event) => handleChangeForm(event, 'orderDetail')}
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
                        onChange={(event) => handleChangeForm(event, 'orderDetail')}
                        value={orderDetailData?.phone_number || ""}
                        className="w-full bg-transparent p-2"
                        fieldValid={fieldValid}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary-white dark:bg-secondary-black p-4 flex flex-col gap-2 text-primary-black rounded-xl">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-lg font-bold">Ticket - 1 (Regular : Festival)</div>
                  <Toggle
                    name="ticketDetail1"
                    title="Match with order details"
                    checked={checkedMatchOrder?.ticketDetail1 || false}
                    onChange={(event) => handleChangeToggleOrderMatch(event)}
                    disabled={!(orderDetailData?.name ?? false)}
                  />
                </div>
                <div className="mt-2 text-sm text-primary-gray">
                  <div className="flex flex-col gap-4">
                    <div>
                      <TextField
                        type="text"
                        label="Full Name"
                        placeholder="Type a Name"
                        name="name"
                        onChange={(event) => handleChangeForm(event, 'ticketDetail1')}
                        value={getFieldValue("ticketDetail1", "name") || ""}
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
                        onChange={(event) => handleChangeForm(event, 'ticketDetail1')}
                        value={getFieldValue("ticketDetail1", "id_type") || ""}
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
                        onChange={(event) => handleChangeForm(event, 'ticketDetail1')}
                        value={getFieldValue("ticketDetail1", "id_number") || ""}
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
                        onChange={(event) => handleChangeForm(event, 'ticketDetail1')}
                        value={getFieldValue("ticketDetail1", "email") || ""}
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
                        onChange={(event) => handleChangeForm(event, 'ticketDetail1')}
                        value={getFieldValue("ticketDetail1", "phone_number") || ""}
                        className="w-full bg-transparent p-2"
                        fieldValid={fieldValid}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary-white dark:bg-secondary-black p-4 flex flex-col gap-2 text-primary-black rounded-xl">
                <div className="flex items-center justify-between gap-4">
                  <div className="text-lg font-bold">Ticket - 2 (VIP : Festival)</div>
                  <Toggle
                    name="ticketDetail2"
                    title="Match with order details"
                    checked={checkedMatchOrder?.ticketDetail2 || false}
                    onChange={(event) => handleChangeToggleOrderMatch(event)}
                    disabled={!(orderDetailData?.name ?? false)}
                  />
                </div>
                <div className="mt-2 text-sm text-primary-gray">
                  <div className="flex flex-col gap-4">
                    <div>
                      <TextField
                        type="text"
                        label="Full Name"
                        placeholder="Type a Name"
                        name="name"
                        onChange={(event) => handleChangeForm(event, 'ticketDetail2')}
                        value={getFieldValue("ticketDetail2", "name") || ""}
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
                        onChange={(event) => handleChangeForm(event, 'ticketDetail2')}
                        value={getFieldValue("ticketDetail2", "id_type") || ""}
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
                        onChange={(event) => handleChangeForm(event, 'ticketDetail2')}
                        value={getFieldValue("ticketDetail2", "id_number") || ""}
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
                        onChange={(event) => handleChangeForm(event, 'ticketDetail2')}
                        value={getFieldValue("ticketDetail2", "email") || ""}
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
                        onChange={(event) => handleChangeForm(event, 'ticketDetail2')}
                        value={getFieldValue("ticketDetail2", "phone_number") || ""}
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
            <div className={"w-full flex flex-col gap-4" + (isTopSummaryOrder ? ' lg:sticky lg:top-[80px]' : '')}>
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
                      Payment Total
                    </div>
                    <div className="text-lg text-primary-black font-bold">
                      IDR 1.050.000
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button
                    href={`/event/${id}/method`}
                    label="Book Now"
                    className="bg-slate-900 rounded-xl w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

OrderDetail.getLayout = function getLayout(page) {
  return <PaymentLayout>{page}</PaymentLayout>;
};

export default OrderDetail;