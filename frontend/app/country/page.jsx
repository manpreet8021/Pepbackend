'use client'
import React, { useRef, useState } from "react";
import AdminWrapper from "@/components/layout/AdminWrapper";
import BookingTable from "@/components/dashboard/vendor-dashboard/booking/components/BookingTable";
import { useGetCountryQuery } from "@/store/slice/countryApiSlice";
import ActionsButton from "@/components/common/ActionButton";
import CustomModal from "@/components/modal/customModal";
import CountryForm from "@/components/form/CountryForm";

export default function page() {
  const { isLoading, data, error } = useGetCountryQuery();
  const [action, setAction] = useState("Add");
  const [column, setColumn] = useState({});

  const modalRef = useRef()

  const handleOpenModal = (act="Add", data={}) => {
    setAction(act)
    setColumn(data)
    modalRef.current.openModal()
  }

  const handleCloseModal = () => {
    modalRef.current.closeModal()
  }
  
  const columns = [{
    Header: 'Name',
    accessor: 'name'
   }, {
    Header: 'Active',
    accessor: 'active',
    Cell: ({ cell: {value} }) => {
      return value ? 'Active' : 'Inactive' 
    }
   }, {
    Header: 'Action',
    accessor: (row) => row,
    id: 'action',
    Cell: ({ cell: {value} }) => (
      <ActionsButton id={value} openModal={handleOpenModal}/>
    )
   }
  ]

  return (
    <AdminWrapper>
      {error && <div className="alert alert-danger">
        Something went wrong
      </div>}
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-auto">
          <h1 className="text-30 lh-14 fw-600">All Countries</h1>
        </div>

        <div className="col-auto">
          <button
            type="button"
            onClick={() => handleOpenModal("Add", {})}
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            Add Country <div className="icon-arrow-top-right ml-15"></div>
          </button>
        </div>
      </div>
      {/* End .row */}
      {
        !isLoading && (
          <div className="py-30 px-30 rounded-4 bg-white shadow-3">
            <BookingTable column={columns} values={data} />
          </div>
        )
      }

      <CustomModal ref={modalRef}>
        <CountryForm closeModal={handleCloseModal} title={action} data={column} />
      </CustomModal>

    </AdminWrapper>
  );
}