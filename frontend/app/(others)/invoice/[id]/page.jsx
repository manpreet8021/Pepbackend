'use client'

import dynamic from "next/dynamic";
import InvoiceComponent from "@/components/invoice/Invoice";
import { useGetInvoiceDetailForBookingQuery } from "@/store/slice/api/bookingApiSlice";

const Invoice = ({params}) => {
  const id = params.id
  const {data, isLoading} = useGetInvoiceDetailForBookingQuery(id)
  return (
    <>
      {
        data && <InvoiceComponent data={data}/>
      }
    </>
  );
};

export default dynamic(() => Promise.resolve(Invoice), { ssr: false });
