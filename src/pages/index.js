import React, { useEffect, useRef, useState } from 'react';
import Button from "@/components/atoms/Button";
import HomeBanner from "@/components/molecules/HomeBanner";
import HomeGallery from "@/components/molecules/HomeGallery";
import { Services } from "@/service";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CategoryTab from "@/components/molecules/CategoryTab";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const Home = () => {
  const swiperRef = useRef(null);
  const [isLoadingPage, setLoadingPage] = useState(false);
  const [topEventData, setTopEventData] = useState([{
    id: 1, title: "Sample Event 1", permalink: "sample-event-1", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2F78NTAPXB1R.png&w=640&q=25"
  }, {
    id: 2, title: "Sample Event 2", permalink: "sample-event-2", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2F6872810b6464a-headerartatixcopy2.jpg&w=1600&q=50"
  }, {
    id: 3, title: "Sample Event 3", permalink: "sample-event-3", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2Fevent_6899bda46467e.jpg&w=1600&q=50"
  }, {
    id: 4, title: "Sample Event 4", permalink: "sample-event-4", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2FHHUKVSN5C4.png&w=1600&q=50"
  }]);
  const [recommendationData, setRecommendationData] = useState([{
    id: 1, title: "Buzz Youth Fest #4", permalink: "buzz-youth-fest-4", image_url: "https://assets.artatix.co.id/event/68a1729e3507b-WebBannerBYF4.png", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }, {
    id: 2, title: "Doomsday", permalink: "doomsday-1", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2F6872810b6464a-headerartatixcopy2.jpg&w=1600&q=50", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }, {
    id: 3, title: "Panggung Raya 2025", permalink: "panggung-raya-2025", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2F78NTAPXB1R.png&w=640&q=25", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }, {
    id: 4, title: "Panggung Raya 2025", permalink: "panggung-raya-2025", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2F78NTAPXB1R.png&w=640&q=25", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }, {
    id: 5, title: "Panggung Raya 2025", permalink: "panggung-raya-2025", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2F78NTAPXB1R.png&w=640&q=25", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }]);
  const [eventData, setEventData] = useState([{
    id: 1, title: "Buzz Youth Fest #4", permalink: "buzz-youth-fest-4", image_url: "https://assets.artatix.co.id/event/68a1729e3507b-WebBannerBYF4.png", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }, {
    id: 2, title: "Doomsday", permalink: "doomsday-1", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2F6872810b6464a-headerartatixcopy2.jpg&w=1600&q=50", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }, {
    id: 3, title: "BESTIEVAL PURWOKERTO 2025", permalink: "bestieval-2025", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2FLL508P76SW.jpg&w=1600&q=50", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }, {
    id: 3, title: "Papper Kittes", permalink: "papper-kittes-2025", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2FHHUKVSN5C4.png&w=1600&q=50", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }, {
    id: 3, title: "Rock In Solo Festival 2025", permalink: "rock-solo-2025", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2Fevent_6896f7c6e7526.jpg&w=1600&q=50", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }, {
    id: 3, title: "Jomlo Festival", permalink: "jomlo-2025", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2FSH2UFIX4WV.png&w=1600&q=50", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }, {
    id: 3, title: "Home Theatre 2025", permalink: "home-theatre-2025", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2FQ28PQZ2OTT.png&w=1600&q=50", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }, {
    id: 3, title: "LIVE ARENA BEKASI", permalink: "panggung-raya-2025", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2F67ccc6f31205b-ticketavailableatrev.png&w=1600&q=50", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }, {
    id: 3, title: "SEBULANSEKALI LIVE#2 BIRU BARU - PERUNGGU", permalink: "panggung-raya-2025", image_url: "https://artatix.co.id/_next/image?url=https%3A%2F%2Fassets.artatix.co.id%2Fevent%2FNR3FDD9RML.png&w=1600&q=50", promotor_name: "Carnaval of Screams", promotor_logo: "https://assets.artatix.co.id/user/CGGXI0XDXF.png"
  }]);

  useEffect(() => {
    setLoadingPage(true);
    // Services(process.env.NEXT_PUBLIC_LOCAL_SERVICE)
    //   .get(
    //     `/api/get/news/today?limit=3`
    //   )
    //   .then((res) => {
    //     setNewsData(res.data.data);
    //   })
    //   .catch(console.error)
    //   .finally(() => setLoadingPage(false));
  }, [])

  return (
    <div className="text-primary-black dark:text-primary-white py-4 lg:py-8">
      <div className="container">
        <HomeBanner />
      </div>
      <div className="my-4 lg:my-8">
        <div className="container">
          <div className="text-lg lg:text-2xl font-bold text-slate-900">Categories</div>
          <CategoryTab className="py-2" />
        </div>
      </div>
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 my-4 lg:my-8 py-6">
        <div className="container">
          <h1 className="flex justify-between items-center">
            <div className="text-lg lg:text-2xl font-bold text-white">Top Event</div>
          </h1>
          <div className="mt-2">
            <Swiper
              className="rounded-xl"
              modules={[Autoplay, Scrollbar, A11y]}
              spaceBetween={32}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              loop={true}
              // autoplay={{
              //   delay: 2000, // Delay between slides in milliseconds
              //   disableOnInteraction: false, // Set to false to prevent autoplay from stopping on user interaction
              // }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
            >
              {topEventData.map((news) => (
                <SwiperSlide key={news.id}>
                  <Link
                    className="hover:underline rounded-xl"
                    href={'/event/' + news.permalink}
                  >
                    <Image
                      className="rounded-xl"
                      src={news.image_url}
                      width={400}
                      height={0}
                      alt="Image"
                    />
                    {/* <div className="my-2 text-lg line-clamp-1">{news.title}</div> */}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="my-4 lg:my-8">
        <div className="container">
          <h1 className="flex items-center">
            <div className="text-lg lg:text-2xl font-bold text-slate-900">Recommendation for you</div>
          </h1>
          <div className="my-2 relative">
            <div
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute top-1/2 left-[-16px] -translate-y-1/2 z-[2] p-2 bg-primary-white shadow-md rounded-full hover:bg-gray-200 cursor-pointer"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </div>
            <div
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute top-1/2 right-[-16px] -translate-y-1/2 z-[2] p-2 bg-primary-white shadow-md rounded-full hover:bg-gray-200 cursor-pointer"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </div>
            <Swiper
              className="rounded-xl !z-[0]"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              modules={[Autoplay, Scrollbar]}
              spaceBetween={32}
              loop={true}
              navigation={true}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1.4 },
                480: { slidesPerView: 1.8 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
            >
              {recommendationData.map((recommendation) => (
                <SwiperSlide key={recommendation.id}>
                  <Link
                    href={'/event/' + recommendation.permalink}
                  >
                    <div className="bg-primary-white rounded-xl transform transition duration-300 hover:scale-[1.04]">
                      <Image
                        src={recommendation.image_url}
                        width={400}
                        height={0}
                        alt="Recommendation"
                        className="w-full rounded-tl-xl rounded-tr-xl"
                      />
                      <div className="p-4">
                        <div className="text-lg font-bold line-clamp-1">{recommendation.title}</div>
                        <div className="flex items-center gap-2 border-dashed border-t-2 pt-4 mt-4">
                          <Image
                            src={recommendation.promotor_logo}
                            width={32}
                            height={32}
                            alt="promotor"
                            className="rounded-full"
                          />
                          <div className="text-[12px] line-clamp-1">{recommendation.promotor_name}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className="my-4 lg:my-8">
        <div className="container">
          <h1 className="flex justify-between items-center">
            <div className="text-lg lg:text-2xl font-bold text-slate-900">All Event</div>
            <Button
              href="/event"
              label="See More"
              className="bg-transparent hover:bg-transparent"
              labelClassName="text-slate-900 line-clamp-1 w-max"
            />
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 py-2">
            {eventData.map((event) => (
              <div key={event.id}>
                <Link
                  href={'/event/' + event.permalink}
                >
                  <div className="bg-primary-white rounded-xl transform transition duration-300 hover:scale-[1.04]">
                    <Image
                      src={event.image_url}
                      width={400}
                      height={0}
                      alt="event"
                      className="w-full rounded-tl-xl rounded-tr-xl"
                    />
                    <div className="p-4">
                      <div className="text-[16px] font-bold line-clamp-1">{event.title}</div>
                      <div className="flex items-center gap-2 border-dashed border-t-2 pt-4 mt-4">
                        <Image
                          src={event.promotor_logo}
                          width={32}
                          height={32}
                          alt="promotor"
                          className="rounded-full"
                        />
                        <div className="text-[12px] line-clamp-1">{event.promotor_name}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
         <div className="mt-4 flex items-center justify-center">
           <Button
            onClick={() => alert('Expand')}
            label="Show Others"
            className="bg-slate-900 rounded-xl hover:opacity-80"
          />
         </div>
        </div>
      </div>
    </div>
  );
};

export default Home;