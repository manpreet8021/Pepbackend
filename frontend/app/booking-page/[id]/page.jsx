'use client'
import CallToActions from "@/components/common/CallToActions";
import Header from "@/components/header";
import DefaultFooter from "@/components/footer/default";
import StepperBooking from "@/components/booking-page/stepper-booking";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useGetRetreatDetailForBookingMutation } from "@/store/slice/api/retreatApiSlice";
import Loading from "@/components/loader/Loding";

// export const metadata = {
//   title: "Hotel Booking Page || GoTrip - Travel & Tour React NextJS Template",
//   description: "GoTrip - Travel & Tour React NextJS Template",
// };

const index = ({params}) => {
  const [getRetreatDetailForBooking, {isLoading, data}] = useGetRetreatDetailForBookingMutation()
  
  const user = useSelector(state => state.auth)
  const [query, setQuery] = useState(null)
  const router = useRouter()
  const retreatId = params.id;
  const localData = JSON.parse(localStorage.getItem(retreatId))

  useEffect(() => {
    try {
      if(!localData || !localData.inDate || !localData.outDate || !localData.adult) {
        throw new Error("Push to retreat")
      } else {
        getRetreatDetailForBooking({
          data: {
            retreatId: retreatId,
            roomId: localData?.roomId,
            inDate: localData.inDate,
            outDate: localData.outDate,
            adult: localData.adult,
            children: localData.children
          }
        })
      }
    } catch (error) {
      router.push(`/retreat/${retreatId}`)
    }
  }, [])

  useEffect(() => {
    setQuery(`/${retreatId}`)
  }, [user])

  return (
    <>
      <div className="header-margin"></div>    
      <Header />
      {
        isLoading ? <Loading /> : 
        <>
          <section className="pt-40 layout-pb-md">
            <div className="container">
              <StepperBooking user={user} query={query} data={data} />
            </div>
          </section>

          <CallToActions />

          <DefaultFooter />
        </>
      }
    </>
  );
};

export default index;
