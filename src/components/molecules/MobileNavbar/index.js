import { HomeIcon, MapIcon, TicketIcon, UserIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const MobileNavbar = () => {
  const router = useRouter();
  const pathname = router.asPath; // ← gunakan asPath agar tetap mencakup URL dinamis
  const isEventDetail = pathname.startsWith("/event/") && pathname !== "/event";

  const handleActivePage = (href) => {
    if (!pathname) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const navItems = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/event", label: "Event", icon: MapIcon },
    { href: "/transaction", label: "Transaction", icon: TicketIcon },
    { href: "/profile", label: "Profile", icon: UserIcon },
  ];

  if (!isEventDetail) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 block md:hidden p-3 rounded-full bg-slate-700 shadow-lg shadow-primary/25 transition-all">
        <div className="flex items-center justify-between">
          {navItems.map((item) => {
            const isActive = handleActivePage(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${isActive ? "bg-white text-slate-700" : "text-white"
                  }`}
              >
                <Icon
                  className={`h-6 w-6 ${isActive ? "text-slate-700" : "text-white"
                    }`}
                />
                {isActive && (
                  <span className="text-[16px/18px] font-semibold">{item.label}</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    )
  };
};

export default MobileNavbar;