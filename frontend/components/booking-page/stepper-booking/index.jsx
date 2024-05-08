
'use client'

import React, { useState } from "react";
import CustomerInfo from "../CustomerInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";
import { useCreateOrderMutation, usePaymentVerifyMutation } from "@/store/slice/api/paymentApiSlice";

const Index = ({user, query, data}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [createOrder, {isLoading, isError}] = useCreateOrderMutation()
  const [paymentVerified] = usePaymentVerifyMutation()
  const localData = JSON.parse(localStorage.getItem(data?.retreat?._id))

  function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => {
          resolve(true);
        };
        script.onerror = () => {
          resolve(false);
        };
        document.body.appendChild(script);
    });
  }

  const steps = [
    {
      title: "Personal Details",
      stepNo: "1",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: <CustomerInfo user={user.userInfo} query={query} data={data} />,
    },
    {
      title: "Final Step",
      stepNo: "2",
      stepBar: "",
      content: <OrderSubmittedInfo />,
    },
  ];

  const renderStep = () => {
    const { content } = steps[currentStep];
    return <>{content}</>;
  };

  const createRazorPayOrder = async() => {
    try{
      if(!localData || !localData.inDate || !localData.outDate || !localData.adult) {
        throw new Error("Push to retreat")
      }
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      
      if (!res) {
        throw new Error("Razor pay is unable to initalize")
      }

      const response = await createOrder({
        retreatId: data?.retreat?._id,
        roomId: localData?.roomId,
        inDate: localData.inDate,
        outDate: localData.outDate,
        adult: localData.adult,
        children: localData.children
      })

      if(response.error) {
        throw new Error("Unable to get retreat")
      }

      const { amount, id: order_id, currency } = response.data;

      const options = {
        key: "rzp_test_NC7HqdpPDJRgJY",
        amount: amount.toString(),
        currency: currency,
        name: "Soulcation",
        description: "Retreat Booking",
        order_id: order_id,
        handler: async function (response) {
            const result = await paymentVerified(response);
            if(result.error) throw new Error("Payment failed")
            setCurrentStep(1)
        },
        modal: {
          confirm_close: true,
          ondismiss: async (reason) => {
            const {
              reason: paymentReason, field, step, code,
            } = reason && reason.error ? reason.error : {};

            if (reason === undefined) {
              setCurrentStep(0)
            } 
            
            else if (reason === 'timeout') {
              setCurrentStep(0)
            } 
            
            else {
              //payment failed
              setCurrentStep(0)
              console.log(paymentReason, field, step, code)
            }
          },
        },
        theme: {
          color: "#3554d1",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch(e) {

    }
  };

  return (
    <>
      <div className="row x-gap-40 y-gap-30 items-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="col-auto">
              <div
                className="d-flex items-center transition"
              >
                <div
                  className={
                    currentStep === index
                      ? "active size-40 rounded-full flex-center bg-blue-1"
                      : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                  }
                >
                  {currentStep === index ? (
                    <>
                      <i className="icon-check text-16 text-white"></i>
                    </>
                  ) : (
                    <>
                      <span>{step.stepNo}</span>
                    </>
                  )}
                </div>

                <div className="text-18 fw-500 ml-10"> {step.title}</div>
              </div>
            </div>
            {/* End .col */}

            {step.stepBar}
          </React.Fragment>
        ))}
      </div>
      {/* End stepper header part */}

      <div className="row">{renderStep()}</div>
      {/* End main content */}

      <div className="row x-gap-20 y-gap-20 pt-20">
        <div className="col-auto">
          <button
            className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
            disabled={currentStep === steps.length - 1 || !user.userInfo}
            onClick={createRazorPayOrder}
          >
            Pay <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End next btn */}
      </div>
      {/* End stepper button */}
    </>
  );
};

export default Index;
