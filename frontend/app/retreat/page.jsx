'use client'
import CallToActions from "@/components/common/CallToActions";
import Header from "@/components/header";
import DefaultFooter from "@/components/footer/default";
import TopHeaderFilter from "@/components/hotel-list/hotel-list-v2/TopHeaderFilter";
import HotelProperties from "@/components/hotel-list/hotel-list-v2/HotelProperties";
import Sidebar from "@/components/hotel-list/hotel-list-v2/Sidebar";
import { useEffect, useState } from "react";
import { useGetRetreatByParameterMutation } from "@/store/slice/api/retreatApiSlice";
import InfiniteScroll from "react-infinite-scroll-component";

const search = () => {
  const [getRetreatByParameter] = useGetRetreatByParameterMutation()
  const [retreat, setRetreat] = useState([])
  const [hasMore, setHasMore] = useState(true)

  const loadMoreRetreat = async() => {
    try{
      const result = await getRetreatByParameter({limit: 8, skip: retreat.length})
      if(result.error) throw new Error("Failed Fetching retreat")
      setRetreat([...retreat, ...result.data])
      if(result.length < 6) setHasMore(false)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadMoreRetreat()
  },[])

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
              {/* <TopHeaderFilter numberOfRetreat={retreat.length}/> */}
              {/* <div className="mt-30"></div> */}
              {/* End mt--30 */}
              <InfiniteScroll
                dataLength={retreat.length}
                next={loadMoreRetreat}
                hasMore={hasMore}
                style={{overflow: 'hidden'}}
                >
                <HotelProperties retreat={retreat}/>
              </InfiniteScroll>
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
