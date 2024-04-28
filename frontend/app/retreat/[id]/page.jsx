'use client'

import "photoswipe/dist/photoswipe.css";
import { hotelsData } from "@/data/hotels";
import Header from "@/components/header";
import Overview from "@/components/hotel-single/Overview";
import PopularFacilities from "@/components/hotel-single/PopularFacilities";
import PropertyHighlights from "@/components/hotel-single/PropertyHighlights";
import RatingTag from "@/components/hotel-single/RatingTag";
import StickyHeader from "@/components/hotel-single/StickyHeader";
import TopBreadCrumb from "@/components/hotel-single/TopBreadCrumb";
import SidebarRight from "@/components/hotel-single/SidebarRight";
import AvailableRooms from "@/components/hotel-single/AvailableRooms";
import ReviewProgress from "@/components/hotel-single/guest-reviews/ReviewProgress";
import DetailsReview from "@/components/hotel-single/guest-reviews/DetailsReview";
import ReplyForm from "@/components/hotel-single/ReplyForm";
import ReplyFormReview from "@/components/hotel-single/ReplyFormReview";
import Facilities from "@/components/hotel-single/Facilities";
import Image from "next/image";
import Surroundings from "@/components/hotel-single/Surroundings";
import HelpfulFacts from "@/components/hotel-single/HelpfulFacts";
import Faq from "@/components/faq/Faq";
import Hotels2 from "@/components/hotels/Hotels2";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import GalleryOne from "@/components/hotel-single/GalleryOne";
import Loading from '@/components/loader/Loding'
import { useGetRetreatDetailByIdQuery } from "@/store/slice/api/retreatApiSlice";

const HotelSingleV1Dynamic = ({ params }) => {
  const id = params.id;
  const hotel = hotelsData.find((item) => item.id == id) || hotelsData[0];
  const {data, isLoading} = useGetRetreatDetailByIdQuery(id)

  return (
    <>
      <div className="header-margin"></div>
      <Header />
      {
        isLoading ? <Loading /> : 
          data ?
          <>
          
            <TopBreadCrumb title={data.title}/>
            
            <StickyHeader price={data.price} retreatId={data._id} roomId={data.roomId} />
            
            <GalleryOne detail={data} />

            <section className="pt-30">
              <div className="container">
                <div className="row y-gap-30">
                  <div className="col-xl-8">
                    <div className="row y-gap-40">
                      <div className="col-12">
                        <h3 className="text-22 fw-500">Property highlights</h3>
                        <PropertyHighlights highlight={data?.retreatHighlights}/>
                      </div>
                      {/* End .col-12 Property highlights */}

                      <div id="overview" className="col-12">
                        <Overview detail={data?.overview}/>
                      </div>
                      {/* End .col-12  Overview */}

                      <div className="col-12">
                        <h3 className="text-22 fw-500 pt-40 border-top-light">
                          Description
                        </h3>
                        <div className="row y-gap-10 pt-20">
                          <p className={`text-dark-1 text-15 mt-20`} style={{whiteSpace: 'pre-line'}}>
                            {data?.description}
                          </p>
                        </div>
                      </div>
                      {/* End .col-12 Most Popular Facilities */}

                      <div className="col-12">
                        <RatingTag />
                      </div>
                      {/* End .col-12 This property is in high demand! */}
                    </div>
                    {/* End .row */}
                  </div>
                  {/* End .col-xl-8 */}

                  <div className="col-xl-4">
                    <SidebarRight detail={data} />
                  </div>
                  {/* End .col-xl-4 */}
                </div>
                {/* End .row */}
              </div>
              {/* End container */}
            </section>

            {
              data.rooms.length ?
                <section id="rooms" className="pt-30">
                  <div className="container">
                    <div className="row pb-20">
                      <div className="col-auto">
                        <h3 className="text-22 fw-500">Available Rooms</h3>
                      </div>
                    </div>
                    {/* End .row */}
                    <AvailableRooms hotels={data.rooms} />
                  </div>
                  {/* End .container */}
                </section> 
              : null
            }
            

            <section className="pt-40" id="reviews">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h3 className="text-22 fw-500">Guest reviews</h3>
                  </div>
                </div>

                <ReviewProgress />

                <div className="pt-40">
                  <DetailsReview />
                </div>

                <div className="row pt-30">
                  <div className="col-auto">
                    <a href="#" className="button -md -outline-blue-1 text-blue-1">
                      Show all 116 reviews{" "}
                      <div className="icon-arrow-top-right ml-15"></div>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-40">
              <div className="container">
                <div className="row">
                  <div className="col-xl-8 col-lg-10">
                    <div className="row">
                      <div className="col-auto">
                        <h3 className="text-22 fw-500">Leave a Reply</h3>
                        <p className="text-15 text-dark-1 mt-5">
                          Your email address will not be published.
                        </p>
                      </div>
                    </div>
                    {/* End .row */}

                    <ReplyFormReview />
                    {/* End ReplyFormReview */}

                    <ReplyForm />
                  </div>
                </div>
              </div>
            </section>

            {/* <section className="mt-40" id="facilities">
              <div className="container">
                <div className="row x-gap-40 y-gap-40">
                  <div className="col-12">
                    <h3 className="text-22 fw-500">Facilities of this Hotel</h3>
                    <div className="row x-gap-40 y-gap-40 pt-20">
                      <Facilities />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-40">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="px-24 py-20 rounded-4 bg-light-2">
                      <div className="row x-gap-20 y-gap-20 items-center">
                        <div className="col-auto">
                          <div className="flex-center size-60 rounded-full bg-white">
                            <Image
                              width={30}
                              height={30}
                              src="/img/icons/health.svg"
                              alt="icon"
                            />
                          </div>
                        </div>
                        <div className="col-auto">
                          <h4 className="text-18 lh-15 fw-500">
                            Extra health &amp; safety measures
                          </h4>
                          <div className="text-15 lh-15">
                            This property has taken extra health and hygiene measures
                            to ensure that your safety is their priority
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="pt-40">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h3 className="text-22 fw-500">Hotel surroundings</h3>
                  </div>
                </div>

                <div className="row x-gap-50 y-gap-30 pt-20">
                  <Surroundings />
                </div>
              </div>
            </section>

            <section className="pt-40">
              <div className="container">
                <div className="pt-40 border-top-light">
                  <div className="row">
                    <div className="col-12">
                      <h3 className="text-22 fw-500">Some helpful facts</h3>
                    </div>
                  </div>

                  <div className="row x-gap-50 y-gap-30 pt-20">
                    <HelpfulFacts />
                  </div>
                </div>
              </div>
            </section> */}

            {/* <section id="faq" className="pt-40 layout-pb-md">
              <div className="container">
                <div className="pt-40 border-top-light">
                  <div className="row y-gap-20">
                    <div className="col-lg-4">
                      <h2 className="text-22 fw-500">
                        FAQs about
                        <br /> The Crown Hotel
                      </h2>
                    </div>

                    <div className="col-lg-8">
                      <div className="accordion -simple row y-gap-20 js-accordion">
                        <Faq />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}

            <section className="layout-pt-md layout-pb-lg">
              <div className="container">
                <div className="row justify-center text-center">
                  <div className="col-auto">
                    <div className="sectionTitle -md">
                      <h2 className="sectionTitle__title">
                        Popular properties similar to This property
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="pt-40 sm:pt-20 item_gap-x30">
                  <Hotels2 />
                </div>
              </div>
            </section>

            <CallToActions />

            {/* <DefaultFooter /> */}
          </>
          : null
      }
      
    </>
  );
};

export default HotelSingleV1Dynamic;