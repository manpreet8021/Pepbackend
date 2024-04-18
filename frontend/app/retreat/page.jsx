'use client'
import CallToActions from "@/components/common/CallToActions";
import Header from "@/components/header";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/hotel-list/hotel-list-v2/TopHeaderFilter";
import HotelProperties from "@/components/hotel-list/hotel-list-v2/HotelProperties";
import Pagination from "@/components/hotel-list/common/Pagination";
import Sidebar from "@/components/hotel-list/hotel-list-v2/Sidebar";
import { useEffect, useState } from "react";
import { useGetRetreatByParameterMutation } from "@/store/slice/api/retreatApiSlice";
import { useInView } from 'react-intersection-observer'

const search = () => {
  const [offset, setOffset] = useState(4)
  const [retreat, setRetreat] = useState([])
  const { ref, inView } = useInView()

  const [getRetreatByParameter] = useGetRetreatByParameterMutation()

  const loadMoreUsers = async() => {
    const result = await getRetreatByParameter({limit: offset, skip: offset-4})
    console.log(result)
    setOffset(offset+4)
  }

  useEffect(() => {
    if (inView) {
      loadMoreUsers()
    }
  }, [inView])

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-xl-3">
              <aside className="sidebar y-gap-40 xl:d-none">
                <Sidebar />
              </aside>
              {/* End sidebar for desktop */}

              <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="listingSidebar"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasLabel">
                    Filter Hotels
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                {/* End offcanvas header */}

                <div className="offcanvas-body">
                  <aside className="sidebar y-gap-40  xl:d-block">
                    <Sidebar />
                  </aside>
                </div>
                {/* End offcanvas body */}
              </div>
              {/* End mobile menu sidebar */}
            </div>
            {/* End col */}

            <div className="col-xl-9 ">
              <TopHeaderFilter />
              <div className="mt-30"></div>
              {/* End mt--30 */}
              <div className="row y-gap-30">
                <HotelProperties />
                <div ref={ref}>
                  Loading...
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col for right content */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
    </>
  );
};

export default search;
