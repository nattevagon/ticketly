import React, { useState } from 'react';
import { Grid, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { MusicalNoteIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import { Books, Camping, CircusTent, Loudspeaker, MusicalNotes, PlayingBasketball, TokyoTower, VideoGame } from "@/assets/images/icons";

const CategoryTab = ({ className }) => {
  const categories = [
    { name: "Music", icon: MusicalNotes, pathname: "music" },
    { name: "Sport", icon: PlayingBasketball, pathname: "sport" },
    { name: "E-Sport", icon: VideoGame, pathname: "e-sport" },
    { name: "Tourism", icon: TokyoTower, pathname: "podcast" },
    { name: "Workshop", icon: Loudspeaker, pathname: "workshop" },
    { name: "Festival", icon: CircusTent, pathname: "festival" },
    { name: "Course", icon: Books, pathname: "course" }
  ];

  return (
    <div className={"w-full mx-auto" + (className ? " " + className : "")}>
      <Swiper
        spaceBetween={16}
        slidesPerView={"auto"}
        className="flex items-center"
      >
        {categories.map((category) => (
          <SwiperSlide
            key={category.name}
            className="!w-auto"
          >
            <Link
              href={`/event?category=${category.pathname}`}
              className="flex flex-col items-center justify-center px-4 py-2 lg:px-6 lg:py-4 rounded-2xl transition-all bg-gray-100 text-slate-900 hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 hover:text-primary-white"
            >
              <div
                className="text-2xl lg:text-3xl mb-1"
              >
                <Image src={category.icon.src} width={40} height={0} />
              </div>
              <span className="text-sm lg:text-lg font-semibold">{category.name}</span>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CategoryTab