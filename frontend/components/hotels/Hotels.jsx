
'use client'

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { hotelsData } from "../../data/hotels";
import isTextMatched from "../../utils/isTextMatched";
import { useGetRecommendedRetreatQuery } from "@/store/slice/api/retreatApiSlice";
import { useUpdateUserFavoriteMutation } from "@/store/slice/api/bookingApiSlice";

const Hotels = () => {
  const {data} = useGetRecommendedRetreatQuery()
  const [updateUserFavorite] = useUpdateUserFavoriteMutation()

  return (
    <>
      <Swiper
        spaceBetween={30}
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".js-hotels-next",
          prevEl: ".js-hotels-prev",
        }}
        pagination={{
          el: ".js-hotels-pag",
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {data && data.slice(0, 8).map((item) => (
          <SwiperSlide key={item?._id}>
            <Link
              href={`/retreat/${item?._id}`}
              className="hotelsCard -type-1 hover-inside-slider"
              data-aos="fade"
              data-aos-delay={200}
            >
              <div className="hotelsCard__image">
                <div className="cardImage ratio ratio-1:1">
                  <div className="cardImage__content">
                    <div className="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
                      <Swiper
                        className="mySwiper"
                        modules={[Pagination, Navigation]}
                        pagination={{
                          clickable: true,
                        }}
                        navigation={true}
                      >
                        {/* below is the map to make multiple image scrollable */}
                        {/*item?.thumbnail?.map((slide, i) => (*/}
                          <SwiperSlide key={item._id}>
                            <Image
                              width={300}
                              height={300}
                              className="rounded-4 col-12 js-lazy"
                              src={item?.thumbnail}
                              alt="image"
                            />
                          </SwiperSlide>
                        {/* ))} */}
                      </Swiper>
                    </div>
                  </div>
                </div>
                {/* End .cardImage */}

                <div className="cardImage__wishlist">
                  <button id={item?._id} className={`button -blue-1 bg-white size-30 rounded-full shadow-2 ${item.fav && 'favorite'}`}
                    onClick={async(e) => {
                      e.preventDefault(); 
                      const {data} = await updateUserFavorite({id: item?._id});
                      
                      if(data) {
                        const element = document.getElementById(item._id);
                        if (data.newInsert) {
                          element.classList.add('favorite')
                        } else {
                          element.classList.remove('favorite')
                        }
                      }
                  }}>
                    <i className="icon-heart text-12" />
                  </button>
                </div>

                <div className="cardImage__leftBadge">
                  <div
                    className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${
                      isTextMatched(item?.tag, "breakfast included")
                        ? "bg-dark-1 text-white"
                        : ""
                    } ${
                      isTextMatched(item?.tag, "best seller")
                        ? "bg-blue-1 text-white"
                        : ""
                    } 
                    ${
                      isTextMatched(item?.tag, "-25% today")
                        ? "bg-brown-1 text-white"
                        : ""
                    } 
                     ${
                       isTextMatched(item?.tag, "top rated")
                         ? "bg-yellow-1 text-dark-1"
                         : ""
                     }`}
                  >
                    {item?.tag}
                  </div>
                </div>
              </div>
              <div className="hotelsCard__content mt-10">
                <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                  <span>{item?.title}</span>
                </h4>
                <p className="text-light-1 lh-14 text-14 mt-5">
                  {item?.city}, {item?.country}
                </p>
                <div className="d-flex items-center mt-20">
                  <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                    4.7
                  </div>
                  <div className="text-14 text-dark-1 fw-500 ml-10">
                    Exceptional
                  </div>
                  <div className="text-14 text-light-1 ml-10">
                    290 reviews
                  </div>
                </div>
                <div className="mt-5">
                  <div className="fw-500">
                    Starting from{" "}
                    <span className="text-blue-1">INR <span>&#8377;</span>{item?.price}</span>
                  </div>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="d-flex x-gap-15 items-center justify-center sm:justify-start pt-40 sm:pt-20">
        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-left-hover js-hotels-prev">
            <i className="icon icon-arrow-left" />
          </button>
        </div>
        {/* End .prev */}

        <div className="col-auto">
          <div className="pagination -dots text-border js-hotels-pag" />
        </div>
        {/* End .pagination */}

        <div className="col-auto">
          <button className="d-flex items-center text-24 arrow-right-hover js-hotels-next">
            <i className="icon icon-arrow-right" />
          </button>
        </div>
        {/* End .next */}
      </div>
      {/* End navigation and pagination */}
    </>
  );
};

export default Hotels;
