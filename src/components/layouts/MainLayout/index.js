import React, { useState } from 'react'
import Footer from "@/components/molecules/Footer";
import Navigation from "@/components/molecules/Navigation";
import MobileNavbar from "@/components/molecules/MobileNavbar";

const MainLayout = ({ children }) => {
  const [isTopTeamsList, setTopTeamsList] = useState(true)

  return (
    <div className="overflow-y-auto min-h-screen">
      <Navigation
        isTopTeamsList={isTopTeamsList}
        onSetTopTeamsList={(value) => setTopTeamsList(value)}
      />
      <div className={isTopTeamsList ? "" : "pt-[58px] lg:pt-[64px]"}>
        {children}
      </div>
      <Footer />
      <MobileNavbar />
    </div>
  )
}

export default MainLayout