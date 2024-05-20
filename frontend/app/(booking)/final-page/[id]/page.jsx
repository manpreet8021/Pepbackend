'use client'
import React from "react";
import CallToActions from "@/components/common/CallToActions";
import Header from "@/components/header";
import DefaultFooter from "@/components/footer/default";
import OrderSubmittedInfo from "@/components/booking-page/OrderSubmittedInfo";
import { useGetBookingDetailQuery } from "@/store/slice/api/paymentApiSlice";

const Index = ({params}) => {
	const order = params.id
  const {data, isLoading} = useGetBookingDetailQuery(order)

  return (
    <>
    	<div className="header-margin"></div>    
      	<Header />
        { isLoading ? null : 
          <>
            <section className="pt-40 layout-pb-md">
              <div className="container">
                <div className="row x-gap-40 y-gap-30 items-center">
                  <React.Fragment>
                    <div className="col-auto">
                      <div className="d-flex items-center transition">
                        <div className="size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500">
                          <span>1</span>
                        </div>
                        <div className="text-18 fw-500 ml-10">Personal Details</div>
                      </div>
                    </div>
                    <>
                      <div className="col d-none d-sm-block">
                        <div className="w-full h-1 bg-border"></div>
                      </div>
                    </>
                  </React.Fragment>

                  <React.Fragment>
                    <div className="col-auto">
                      <div className="d-flex items-center transition">
                        <div className="active size-40 rounded-full flex-center bg-blue-1">
                          <i className="icon-check text-16 text-white"></i>
                        </div>
                        <div className="text-18 fw-500 ml-10">Final Step</div>
                      </div>
                    </div>
                  </React.Fragment>
                </div>
                {/* End stepper header part */}

                <div className="row">
                  <OrderSubmittedInfo data={data}/>
                </div>
              </div>
            </section>

            <CallToActions />

            <DefaultFooter />
          </>
        }
    </>
  );
};

export default Index;
