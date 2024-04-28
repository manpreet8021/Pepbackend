import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const AvailableRooms = ({ hotels }) => {

  return (
    <>
      {
        hotels.length && hotels.map((hotel, index) => (
          <div className="border-light rounded-4 px-30 py-30 sm:px-20 sm:py-20 m-1" key={index}>
            <div className="row y-gap-20">
              <div className="col-12">
                <h3 className="text-18 fw-500 mb-15">{hotel.name}</h3>
                <div className="roomGrid">
                  <div className="roomGrid__header">
                    <div>Room Type</div>
                    <div>Description</div>
                    <div>Capacity</div>
                    <div>Price per person</div>
                    <div />
                  </div>

                  <div className="roomGrid__grid">
                    <div>
                      <div className="ratio ratio-1:1">
                        <Swiper
                          className="mySwiper"
                          modules={[Pagination, Navigation]}
                          pagination={{
                            clickable: true,
                          }}
                          navigation={true}
                          style={{position: 'absolute'}}
                        >
                          {hotel?.images?.map((slide, i) => (
                            <SwiperSlide key={i}>
                              <Image
                                width={250}
                                height={250}
                                className="img-ratio rounded-4"
                                src={slide}
                                alt="image"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                      {/* End image */}
                      <div className="y-gap-5 mt-20">
                        {hotel.roomHighlight.map((highlight, i) => (
                          <div className="d-flex items-center" key={i}>
                            <i className={`${highlight.icon} text-20 mr-10`} />
                            <div className="text-15">{highlight.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="y-gap-30">
                      <div className="roomGrid__content">
                        <div>
                          <div className="text-15">
                            <p style={{whiteSpace: 'pre-line'}}>{hotel?.description}</p>
                          </div>
                        </div>

                        <div>
                          <div className="d-flex items-center text-light-1">
                            {hotel.allowedGuest}
                            <div className="icon-man text-24" />
                          </div>
                        </div>

                        <div>
                          <div className="text-18 lh-15 fw-500">
                            INR<span>&#8377;</span> {hotel?.price}
                          </div>
                          <div className="text-14 lh-18 text-light-1">
                            Includes taxes and charges
                          </div>
                        </div>

                        {/* <div>
                          <div className="dropdown js-dropdown js-price-1-active">
                            <select className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14">
                              
                            </select>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    {/* End price features */}

                    <div>
                      <a
                        href="#"
                        className="button h-50 px-24 -dark-1 bg-blue-1 text-white mt-10"
                      >
                        Reserve <div className="icon-arrow-top-right ml-15" />
                      </a>
                      <div className="text-15 fw-500 mt-30">
                        You&lsquo;ll be taken to the next step
                      </div>
                      <ul className="list-disc y-gap-4 pt-5">
                        <li className="text-14">Confirmation is immediate</li>
                        <li className="text-14">No registration required</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </>
  );
};

export default AvailableRooms;
