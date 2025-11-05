import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from "@heroicons/react/24/outline";
import ProfileLayout from "@/components/layouts/ProfileLayout";
import Breadcrumb from "@/components/atoms/Breadcrumb";

const PaymentHistory = () => {
  const profile = {
    name: "Natte Vagon",
    role: "Frontend Engineer",
    username: "xiofikhasan",
    email: "nattevagon@example.com",
    phone: "+62 896-6634-2843",
    location: "Sleman, Yogyakarta Special Region",
    image:
      "https://nattevagon.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpersonal-photo.48d40ed4.jpg&w=1920&q=75",
  };

  const paymentHistory = [
    {
      id: "txn_001",
      title: "Transaction Ismaya Live 2025",
      amount: 1430340,
      date: "2025-07-12T14:32:00Z",
      status: "Paid",
    },
    {
      id: "txn_002",
      title: "Transaction Java Jazz Festival 2025",
      amount: 950000,
      date: "2025-06-30T10:15:00Z",
      status: "Paid",
    },
    {
      id: "txn_003",
      title: "Transaction We The Fest 2025",
      amount: 1250000,
      date: "2025-05-20T18:45:00Z",
      status: "Paid",
    },
    {
      id: "txn_004",
      title: "Transaction Bandung Music Night",
      amount: 420000,
      date: "2025-04-18T20:00:00Z",
      status: "Pending",
    },
    {
      id: "txn_005",
      title: "Transaction IndieFest 2025",
      amount: 310000,
      date: "2025-03-10T12:00:00Z",
      status: "Refunded",
    },
    {
      id: "txn_006",
      title: "Transaction Summer Beats 2025",
      amount: 760000,
      date: "2025-02-28T16:20:00Z",
      status: "Paid",
    },
    {
      id: "txn_007",
      title: "Transaction Night Market Concert",
      amount: 185000,
      date: "2025-01-15T19:10:00Z",
      status: "Paid",
    },
    {
      id: "txn_008",
      title: "Transaction Rooftop Sessions",
      amount: 540000,
      date: "2024-12-05T21:00:00Z",
      status: "Paid",
    },
    {
      id: "txn_009",
      title: "Transaction Acoustic Live 2024",
      amount: 220000,
      date: "2024-11-22T17:30:00Z",
      status: "Pending",
    },
    {
      id: "txn_010",
      title: "Transaction Holiday Gala 2024",
      amount: 1995000,
      date: "2024-10-31T20:30:00Z",
      status: "Paid",
    },
  ];

  const formatRupiah = (value) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(value);
  }

  return (
    <div className="container py-4 lg:py-8 min-h-screen">
      <div className="mb-4">
        <Breadcrumb
          isHome={true}
          title={"Payment History"}
        />
      </div>
      <ProfileLayout profile={profile} page="paymentHistory" title="Payment History" isChild={true}>
        <div className="w-full bg-primary-white p-4 rounded-xl space-y-4">
          <div className="text-lg font-semibold text-primary-black border-b border-1 pb-2">Payment History</div>
          <div className="space-y-4">
            {paymentHistory.map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-4 rounded-lg shadow-sm">
                <div>
                  <p className="text-sm text-gray-500">{tx.title}</p>
                  <p className="font-medium text-gray-800">{formatRupiah(tx.amount)}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(tx.date).toLocaleString("id-ID", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: false
                    })}
                  </p>
                </div>
                <div className="text-right">
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full 
                ${tx.status === "Paid" ? "bg-green-100 text-green-700" : ""}
                ${tx.status === "Pending" ? "bg-yellow-100 text-yellow-700" : ""}
                ${tx.status === "Refunded" ? "bg-red-100 text-red-700" : ""}`}
                  >
                    {tx.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ProfileLayout>
    </div>
  )
}

export default PaymentHistory