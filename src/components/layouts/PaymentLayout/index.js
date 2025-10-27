import PaymentNavigation from "@/components/molecules/PaymentNavigation"
import React from 'react'

const PaymentLayout = ({ children }) => {
  return (
    <div className="overflow-y-auto h-screen">
      <PaymentNavigation />
      <div className="pt-[58px] lg:pt-[64px]">
        {children}
      </div>
    </div>
  )
}

export default PaymentLayout