
'use client'

import React, { useState } from "react";
import CustomerInfo from "../CustomerInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";
import { useCreateOrderMutation, usePaymentVerifyMutation } from "@/store/slice/api/paymentApiSlice";
import { useSelector } from "react-redux";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [createOrder, {isLoading, isError}] = useCreateOrderMutation()
  const [paymentVerified] = usePaymentVerifyMutation()
  const user = useSelector(state => state.auth)

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
      content: <CustomerInfo user={user.userInfo}/>,
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
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      
      if (!res) {
        throw new Error("Razor pay is unable to initalize")
      }

      const response = await createOrder({retreat: '661cf65d849e8c01075f645c'})

      if(response.error) {
        throw new Error("Unable to get retreat")
      }

      const { amount, id: order_id, currency } = response.data;

      const options = {
        key: "rzp_test_NC7HqdpPDJRgJY",
        amount: amount.toString(),
        currency: currency,
        name: "Soumya Corp.",
        description: "Test Transaction",
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
