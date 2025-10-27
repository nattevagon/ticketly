import React, { useEffect, useState } from 'react';
import Badge from "@/components/atoms/Badge";
import Breadcrumb from "@/components/atoms/Breadcrumb";
import Button from "@/components/atoms/Button";
import PostRender from "@/components/molecules/PostRender"
import { Services } from "@/service";
import { CalendarDaysIcon, ClockIcon, MapPinIcon } from "@heroicons/react/20/solid";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/scrollbar';

const DetailEvent = () => {
  const router = useRouter();
  const { asPath, query } = router;
  const { id } = query;
  const [relatedNewsData, setRelatedNewsData] = useState([])
  const [detailData, setDetailData] = useState({});
  const [isLoadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    setLoadingPage(true);
    // Services(process.env.NEXT_PUBLIC_LOCAL_SERVICE)
    //   .get(
    //     `/api/get/news/today?limit=6`
    //   )
    //   .then((res) => {
    //     setRelatedNewsData(res.data.data);
    //   })
    //   .catch(console.error)
    //   .finally(() => setLoadingPage(false));
  }, [])

  useEffect(() => {
    if (id) {
      setLoadingPage(true);
      // Services(process.env.NEXT_PUBLIC_LOCAL_SERVICE)
      //   .get("/api/get/news/permalink/" + id)
      //   .then((res) => {
      //     const result = res.data;
      //     const data = result.data;

      //     setDetailData(data)
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   })
      //   .finally(() => {
      //     setLoadingPage(false);
      //   });
    }
  }, [id])

  return (
    <div className="container py-8">
      <div className="mb-6">
        <Breadcrumb
          isHome={true}
          title={detailData?.title}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-2 w-full flex flex-col mt-6 lg:mt-0 order-1 lg:order-1">
          <div className="bg-secondary-white dark:bg-secondary-black rounded-xl">
            {/* <Image
              src="https://assets.artatix.co.id/event/68a1729e3507b-WebBannerBYF4.png"
              alt="BannerItem"
              width={1000}
              height={600}
              sizes="100vw"
              className="w-full h-auto rounded-xl"
            /> */}
            <Swiper
              className="rounded-xl"
              modules={[Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
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
              <SwiperSlide>
                <Image
                  src="https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2Fevent_6899bda46467e.jpg&w=1600&q=50"
                  alt="BannerItem"
                  width={600}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto rounded-xl"
                />
              </SwiperSlide>
            </Swiper>
            <div className="text-xl font-bold text-primary-black p-4">Buzz Youth Fest 4</div>
          </div>
          <div className="bg-secondary-white dark:bg-secondary-black p-4 flex flex-col gap-2 mt-4 text-primary-black rounded-xl">
            <div className="text-md font-bold">Description</div>
            <div className="mt-2 text-sm text-primary-gray">
              Test
            </div>
          </div>
          <div className="bg-secondary-white dark:bg-secondary-black p-4 flex flex-col gap-2 mt-4 text-primary-black rounded-xl">
            <div className="text-md font-bold">Line Up</div>
            <div className="grid grid-cols-2 mt-2 gap-4 text-sm text-primary-gray">
              <Link href="https://www.instagram.com/" className="flex items-center gap-4 shadow-sm p-2 border-[1px] border-primary-gray rounded-xl transform transition duration-300 hover:scale-[1.04] cursor-pointer">
                <Image
                  src="https://ypassets.yesplis.com/251022/assets/285be1fd-1034-4528-b6cc-cce7e6495eda.jpeg"
                  width={80}
                  height={80}
                  alt="Recommendation"
                  className="rounded-xl"
                />
                <div className="text-primary-black text-sm font-bold">Tulus</div>
              </Link>
              <Link href="https://www.instagram.com/" className="flex items-center gap-4 shadow-sm p-2 border-[1px] border-primary-gray rounded-xl transform transition duration-300 hover:scale-[1.04] cursor-pointer">
                <Image
                  src="https://ypassets.yesplis.com/251022/assets/63f2f7f0-4e51-4b8c-a6c5-d5dfa6f61e80.jpeg"
                  width={80}
                  height={80}
                  alt="Recommendation"
                  className="rounded-xl"
                />
                <div className="text-primary-black text-sm font-bold">Afgan</div>
              </Link>
               <Link href="https://www.instagram.com/" className="flex items-center gap-4 shadow-sm p-2 border-[1px] border-primary-gray rounded-xl transform transition duration-300 hover:scale-[1.04] cursor-pointer">
                <Image
                  src="https://ypassets.yesplis.com/251022/assets/63f2f7f0-4e51-4b8c-a6c5-d5dfa6f61e80.jpeg"
                  width={80}
                  height={80}
                  alt="Recommendation"
                  className="rounded-xl"
                />
                <div className="text-primary-black text-sm font-bold">Pamungkas</div>
              </Link>
               <Link href="https://www.instagram.com/" className="flex items-center gap-4 shadow-sm p-2 border-[1px] border-primary-gray rounded-xl transform transition duration-300 hover:scale-[1.04] cursor-pointer">
                <Image
                  src="https://ypassets.yesplis.com/251022/assets/4aab3a08-9944-47b7-9148-f5bd4cae1647.jpeg"
                  width={80}
                  height={80}
                  alt="Recommendation"
                  className="rounded-xl"
                />
                <div className="text-primary-black text-sm font-bold">Nadine Amizah</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 w-full order-2 lg:order-2">
          <div className="w-full bg-secondary-white dark:bg-secondary-black p-4 rounded-xl">
            <div className="flex flex-col gap-2 text-primary-black">
              <div className="flex flex-col gap-2 mt-2 text-sm text-primary-gray font-medium">
                <div className="flex items-center gap-2">
                  <div>
                    <CalendarDaysIcon className="h-[16px] w-[16px] inline-block" />
                  </div>
                  <div>25 - 26 December 2025</div>
                </div>
                <div className="flex items-center gap-2">
                  <div>
                    <ClockIcon className="h-[16px] w-[16px] inline-block" />
                  </div>
                  <div>15:00 - 23:00</div>
                </div>
                <div className="flex items-start gap-2">
                  <div>
                    <MapPinIcon className="h-[16px] w-[16px] inline-block" />
                  </div>
                  <div className="mt-[2px]">GOR SATRIA PURWOKERTO JAWA TENGAH, Kab. Banyumas, Jawa Tengah</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-secondary-white dark:bg-secondary-black p-4 rounded-xl mt-4">
            <div className="flex flex-col gap-2 text-primary-black">
              <div className="flex items-center justify-between gap-2">
                <div className="text-md text-primary-gray font-semibold">Start from</div>
                <div className="text-lg text-primary-black font-bold">IDR 150.000</div>
              </div>
            </div>
            <div className="mt-4">
              <Button
                href={`${asPath}/ticket`}
                label="Book Now"
                className="bg-slate-900 rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailEvent