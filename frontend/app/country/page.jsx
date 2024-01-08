'use client'
import React from "react";
import AdminWrapper from "@/components/layout/AdminWrapper";
import BookingTable from "@/components/dashboard/vendor-dashboard/booking/components/BookingTable";
import Link from 'next/link'
import { useGetCountryQuery } from "@/store/slice/countryApiSlice";

export default function page() {
  const { isLoading, data, error } = useGetCountryQuery();
  return (
    <AdminWrapper>
      {error && <div className="alert alert-danger">
        Something went wrong
      </div>}
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">All Countries</h1>
          {/* <div className="text-15 text-light-1">
            Lorem ipsum dolor sit amet, consectetur.
          </div> */}
        </div>
        {/* End .col-auto */}

        <div className="col-auto">
          <Link
            href="/country/add"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            Add Country <div className="icon-arrow-top-right ml-15"></div>
          </Link>
        </div>
      </div>
      {/* End .row */}

      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <BookingTable />
        {/* End tabs */}
      </div>
    </AdminWrapper>
  );
}