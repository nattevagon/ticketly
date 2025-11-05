import Breadcrumb from "@/components/atoms/Breadcrumb";
import Button from "@/components/atoms/Button";
import CheckboxField from "@/components/atoms/CheckboxField";
import { DropdownButton, DropdownContent, DropdownItem, DropdownMenu } from "@/components/molecules/DropdownMenu";
import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react'

const Event = () => {
  const [filter, setFilter] = useState({
    category: [
      { value: 0, label: "Music", checked: false },
      { value: 1, label: "Sport", checked: false },
      { value: 2, label: "Workshop", checked: false }
    ]
  })
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

  const handleFilter = (event, value) => {
    const name = event.target.name;
    const checked = event.target.checked;

    console.log('filter', name, value, checked)
    setFilter((prev) => ({
      ...prev,
      [name]: prev[name].map((r) =>
        r.value === value ? { ...r, checked } : r
      ),
    }));
  };

  const handleSubmitFilter = () => {
    // const roles = filter.role.filter(r => r.checked).map(r => r.value).join(",");

    // router.replace({
    //   pathname,
    //   query: {
    //     ...query,
    //     roles,
    //   },
    // });
  }

  const handleResetFilter = () => {
    // const newQuery = { ...router.query };
    // delete newQuery.roles;

    // router.replace({
    //   pathname: pathname,
    //   query: newQuery,
    // });
  }

  return (
    <div className="text-primary-black py-4 lg:py-8">
      <div className="container">
        {/* <div className="mb-6">
          <Breadcrumb
            isHome={true}
            title={"Event"}
          />
        </div> */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <DropdownMenu
              position="dropdown-bottom dropdown-start"
            >
              <DropdownButton>
                <Button
                  label="Filter"
                  className="bg-primary-white rounded-xl"
                  icon={FunnelIcon}
                  iconClassName="!text-primary-black"
                  labelClassName="!text-primary-black"
                />
              </DropdownButton>
              <DropdownContent className="bg-primary-white p-4 mt-2 min-w-[200px] text-primary-black">
                {filter && filter?.category &&
                  <div className="">
                    <p className="mb-2 font-medium">Category</p>
                    <div className="flex flex-col gap-2">
                      {filter?.category.map((item, i) => (
                        <CheckboxField
                          key={i}
                          name="category"
                          label={item.label}
                          value={item.value}
                          checked={item.checked}
                          onChange={(event) => handleFilter(event, item.value)}
                        />
                      ))}
                    </div>
                  </div>
                }
                <div className="flex items-center gap-4 justify-between mt-4">
                  <Button
                    className="w-full bg-slate-900 hover:opacity-80 rounded-xl"
                    labelClassName="w-full"
                    onClick={() => handleSubmitFilter()}
                    label="Filter"
                  />
                  <Button
                    className="w-full bg-slate-900 hover:opacity-80 rounded-xl"
                    labelClassName="w-full"
                    onClick={() => handleResetFilter()}
                    label="Reset"
                  />
                </div>
              </DropdownContent>
            </DropdownMenu>
            <DropdownMenu
              position="dropdown-bottom dropdown-start"
            >
              <DropdownButton>
                <Button
                  label="Sort"
                  className="bg-primary-white rounded-xl"
                  icon={ChevronDownIcon}
                  iconClassName="!text-primary-black"
                  labelClassName="!text-primary-black"
                />
              </DropdownButton>
              <DropdownContent className="bg-primary-white p-4 mt-2 min-w-[200px] text-primary-black gap-2">
                <DropdownItem
                  onClick={() => alert('Name A-Z')}
                  label="Name A-Z"
                />
                <DropdownItem
                  onClick={() => alert('Name Z-A')}
                  label="Name Z-A"
                />
              </DropdownContent>
            </DropdownMenu>
          </div>
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
        </div>
      </div>
    </div>
  )
}

export default Event