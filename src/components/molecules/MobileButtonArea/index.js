import React, { useEffect, useRef, useState } from "react";

const MobileButtonArea = ({ children, className }) => {
  const sentinelRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -60px 0px", // sedikit buffer bawah
      }
    );

    const sentinel = sentinelRef.current;
    if (sentinel) observer.observe(sentinel);

    return () => {
      if (sentinel) observer.unobserve(sentinel);
    };
  }, []);

  return (
    <div>
      <div
        className={`${className} fixed bottom-0 left-0 right-0 z-20 border-t transition-all duration-300 ease-in-out lg:hidden lg:static lg:shadow-none lg:border-none lg:rounded-xl lg:mt-4 ${isVisible ? "opacity-0 pointer-events-none translate-y-full" : "opacity-100 pointer-events-auto translate-y-0"} `}
      >
        {children}
      </div>
      <div
        ref={sentinelRef}
        className={`rounded-xl lg:static lg:shadow-none lg:border-none ${className} `}
      >
        {children}
      </div>
    </div>
  );
};

export default MobileButtonArea;
