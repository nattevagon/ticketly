import { ChevronRightIcon } from "@heroicons/react/20/solid"
import React from 'react'

const PaymentStep = ({ page }) => {
  return (
    <div className="flex items-center justify-center gap-2 lg:gap-4 text-[12px] md:text-[16px] pb-2 lg:pb-4 overflow-x-auto whitespace-nowrap">
      <div className="flex items-center gap-2">
        <div className={"bg-slate-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold" + ((page === 'ticket' || page === 'order' || (page === 'ticket' || page === 'order' || page === 'method' || page === 'payment') || page === 'payment') ? ' bg-slate-800' : '')}>
          1
        </div>
        <div className={"font-medium text-primary-gray" + ((page === 'ticket' || page === 'order' || page === 'method' || page === 'payment') ? ' text-primary-black' : '') + (page === 'ticket' ? '' : ' hidden lg:block')}>Choose Category</div>
      </div>
      <ChevronRightIcon className="w-6 h-6 text-gray-500" />
      <div className="flex items-center gap-2">
        <div className={"bg-slate-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold" + ((page === 'order' || page === 'method' || page === 'payment') ? ' bg-slate-800' : '')}>
          2
        </div>
        <div className={"font-medium text-primary-gray" + ((page === 'order' || page === 'method' || page === 'payment') ? ' text-primary-black' : '') + (page === 'order' ? '' : ' hidden lg:block')}>Order Detail</div>
      </div>
      <ChevronRightIcon className="w-6 h-6 text-gray-500" />
      <div className="flex items-center gap-2">
        <div className={"bg-slate-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold" + ((page === 'method' || page === 'payment') ? ' bg-slate-800' : '')}>
          3
        </div>
        <div className={"font-medium text-primary-gray" + ((page === 'method' || page === 'payment') ? ' text-primary-black' : '') + (page === 'method' ? '' : ' hidden lg:block')}>Payment Method</div>
      </div>
      <ChevronRightIcon className="w-6 h-6 text-gray-500" />
      <div className="flex items-center gap-2">
        <div className={"bg-slate-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-semibold" + (page === 'payment' ? ' bg-slate-800' : '')}>
          4
        </div>
        <div className={"font-medium text-primary-gray" + (page === 'payment' ? ' text-primary-black' : '') + (page === 'payment' ? '' : ' hidden lg:block')}>Payment</div>
      </div>
    </div>
  )
}

export default PaymentStep