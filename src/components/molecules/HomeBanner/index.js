import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from "next/image";
import Video from "@/components/atoms/Video";
import { ClockIcon, PlayIcon, TvIcon } from "@heroicons/react/20/solid";
import { TagIcon } from "@heroicons/react/24/solid";

const HomeBanner = () => {
  return (
    <Swiper
      className="rounded-xl"
      modules={[Autoplay, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000, // Delay between slides in milliseconds
        disableOnInteraction: false, // Set to false to prevent autoplay from stopping on user interaction
      }}
      loop={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Image
          src="https://assets.artatix.co.id/event/68a1729e3507b-WebBannerBYF4.png"
          alt="BannerItem"
          width={1000}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2FLKTOLQ5OEN.png&w=1600&q=50"
          alt="BannerItem"
          width={1000}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-xl"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2Fevent_6899bda46467e.jpg&w=1600&q=50"
          alt="BannerItem"
          width={1000}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-xl"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default HomeBanner