import moment from "moment/moment";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const BookingInfo = ({data}) => {
  return (
    <div className="col-xl-10">
      <div className="row y-gap-30">
        {data?.map((item, index) => (
          <div className="col-12" key={index}>
            <div className="border-top-light pt-30">
              <div className="row x-gap-20 y-gap-20">
                <div className="col-md-auto">
                  <div className="cardImage ratio ratio-1:1 w-250 md:w-1/1 rounded-4">
                    <div className="cardImage__content">
                      <div className="cardImage-slider rounded-4 custom_inside-slider">
                        <Swiper
                          className="mySwiper"
                          modules={[Pagination, Navigation]}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                        >
                          <SwiperSlide>
                            <Image
                              width={250}
                              height={250}
                              className="rounded-4 col-12 js-lazy"
                              src={item.retreat.thumbnail.location}
                              alt="image"
                            />
                          </SwiperSlide>
                        </Swiper>
                      </div>
                    </div>
                    {/* End image */}
                  </div>
                </div>
                {/* End .col */}

                <div className="col-md">
                  <h3 className="text-18 lh-16 fw-500">
                    {item.retreat.title}
                  </h3>
                  <div className="row x-gap-10 y-gap-10 items-center pt-10">
                    <div className="col-auto">
                      <p className="text-14">Booking number: {item.bookingNumber}</p>
                    </div>
                  </div>

                  <div className="text-14 lh-15 mt-20">
                    <div className="fw-500">Start Date - End Date</div>
                    <div className="text-light-1">{moment(item.startDate).format('DD/MM/YYYY')} - {moment(item.endDate).format('DD/MM/YYYY')}</div>
                  </div>

                  {item.request && (
                    <div className="text-14 lh-15 mt-20">
                      <div className="fw-500">Special Request</div>
                      <div className="text-light-1">{item.request}</div>
                    </div>
                  )}
                  
                </div>

                {/* End .col-md */}

                <div className="col-md-auto text-right md:text-left">
                  <div className="row x-gap-10 y-gap-10 justify-end items-center md:justify-start">
                    <div className="col-auto">
                      <div className="text-14 lh-14 fw-500">Exceptional</div>
                      <div className="text-14 lh-14 text-light-1">
                        3,014 reviews
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="flex-center text-white fw-600 text-14 size-40 rounded-4 bg-blue-1">
                        4.4
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="text-14 text-light-1 mt-50 md:mt-20">
                      Duration {item.retreat.retreatDuration} nights
                    </div>
                    <div className="text-22 lh-12 fw-600 mt-5">
                      INR <span>&#8377;</span>{item?.price}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-auto">
                    <Link
                      href={`/invoice/${item.bookingNumber}`}
                      className="button -md -dark-1 bg-blue-1 text-white mt-24"
                    >
                      Invoice {" "}
                    </Link>
                    </div>
                    <div className="col-auto">
                    <Link
                      href={`/retreat/${item._id}`}
                      className="button -md -dark-1 bg-red-1 text-white mt-24"
                    >
                      Cancel booking{" "}
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingInfo;
