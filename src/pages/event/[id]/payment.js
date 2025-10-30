import React, { useEffect, useMemo, useRef, useState } from 'react';
import PaymentLayout from "@/components/layouts/PaymentLayout";
import { CalendarDaysIcon, ChevronDoubleRightIcon, ChevronRightIcon, ClockIcon, MapPinIcon, ShoppingBagIcon } from "@heroicons/react/20/solid";
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
import TimeRemaining from "@/components/molecules/TimeRemaining";

const Payment = () => {
  const router = useRouter();
  const { asPath, query } = router;
  const { id } = query;
  const [isTopSummaryOrder, setTopSummaryOrder] = useState(false);
  const paymentStepRef = useRef(null);

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

  const disabled = false;

  if (id) {
    return (
      <div className="container pb-8">
        {/* STEP NAVIGATION */}
        <div ref={paymentStepRef} className="pt-8 pb-4">
          <PaymentStep
            page={'payment'}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* LEFT: Ticket List */}
          <div className="col-span-1 lg:col-span-2 flex flex-col order-1">
            <div className="w-full flex flex-col gap-4">
              <TimeRemaining />
              <div className="bg-secondary-white dark:bg-secondary-black p-4 flex flex-col gap-4 text-primary-black rounded-xl">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center rounded-xl">
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Logo_QRIS.svg/245px-Logo_QRIS.svg.png"
                      width={72}
                      height={0}
                      alt="Recommendation"
                    />
                  </div>
                  <div className="text-xl font-bold">E-Wallet/QRIS - QRIS</div>
                </div>
                <div className="flex flex-col gap-2 text-md border-t pt-4 border-slate-300 border-dashed">
                  <div className="flex flex-col gap-2">
                    <div className="font-bold">Order ID</div>
                    <div>E440A5CF23</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="font-bold">Order Status</div>
                    <div>PENDING</div>
                  </div>
                </div>
              </div>
              <div className="bg-secondary-white dark:bg-secondary-black p-4 flex flex-col gap-2 text-primary-black rounded-xl text-center">
                <div className="font-medium text-lg">
                  Please make payment before
                </div>
                <div className="font-bold text-slate-900 text-xl">
                  30 October 2025, 15:24
                </div>
                <div className="font-normal text-md">
                  If the time limit is exceeded, the order will be automatically cancelled.
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
                <div className="flex flex-col gap-4 mt-4">
                  <Button
                    onClick={() => alert('pay now')}
                    label="Pay Now"
                    className="bg-slate-900 rounded-xl w-full"
                  />
                  <Button
                    onClick={() => alert('cancel')}
                    label="Cancel Order"
                    className="bg-red-200 rounded-xl w-full"
                    labelClassName="text-red-500"
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

Payment.getLayout = function getLayout(page) {
  return <PaymentLayout>{page}</PaymentLayout>;
};

export default Payment;