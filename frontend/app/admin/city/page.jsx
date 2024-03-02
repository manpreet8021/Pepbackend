'use client'

import React, { useRef, useState } from "react";
import AdminWrapper from "@/components/layout/AdminWrapper";
import BookingTable from "@/components/dashboard/vendor-dashboard/booking/components/BookingTable";

import ActionsButton from "@/components/common/ActionButton";
import CustomModal from "@/components/modal/CustomModal";
import CityForm from "@/components/form/CityForm";
import { useSelector } from "react-redux";
import { useGetCityQuery } from "@/store/slice/api/cityApiSlice";

export default function page() {
  const { isLoading, error } = useGetCityQuery();
  const [action, setAction] = useState("Add");
  const [column, setColumn] = useState({});

  const cityData = useSelector(state => state.city)

  const modalRef = useRef()

  const handleOpenModal = ({act="Add", data={}}) => {
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
   },
   {
    Header: 'Country',
    accessor: 'country.name'
   },
   {
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
      <ActionsButton value={value} openModal={handleOpenModal}/>
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
          <h1 className="text-30 lh-14 fw-600">All City</h1>
        </div>

        <div className="col-auto">
          <button
            type="button"
            onClick={() => handleOpenModal("Add", {})}
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            Add City <div className="icon-arrow-top-right ml-15"></div>
          </button>
        </div>
      </div>
      {/* End .row */}
      {
        !isLoading && cityData.data && (
          <div className="py-30 px-30 rounded-4 bg-white shadow-3">
            <BookingTable column={columns} values={cityData.data} />
          </div>
        )
      }

      <CustomModal ref={modalRef}>
        <CityForm closeModal={handleCloseModal} title={action} data={column} />
      </CustomModal>

    </AdminWrapper>
  );
}