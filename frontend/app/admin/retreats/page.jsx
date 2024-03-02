'use client'

import AdminWrapper from "@/components/layout/AdminWrapper";
import BookingTable from "@/components/dashboard/vendor-dashboard/booking/components/BookingTable";
import CustomModal from "@/components/modal/CustomModal";
import { useRef, useState } from "react";
import RetreatForm from "@/components/form/RetreatForm";

const page = () => {
    const [action, setAction] = useState("Add");
    const [column, setColumn] = useState({});

    const modalRef = useRef()

    const handleOpenModal = ({act="Add", data={}}) => {
        setAction(act)
        setColumn(data)
        modalRef.current.openModal()
    }

    const handleCloseModal = () => {
        modalRef.current.closeModal()
    }
    return (
        <AdminWrapper>
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
                <div className="col-auto">
                <h1 className="text-30 lh-14 fw-600">All Retreats</h1>
                </div>

                <div className="col-auto">
                <button
                    type="button"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                    onClick={handleOpenModal}
                >
                    Add Retreat <div className="icon-arrow-top-right ml-15"></div>
                </button>
                </div>
            </div>

            <CustomModal ref={modalRef} size='xl'>
                <RetreatForm closeModal={handleCloseModal} title={action} data={column} />
            </CustomModal>
        </AdminWrapper>
    )
}

export default page