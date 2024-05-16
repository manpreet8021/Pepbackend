
'use client'

import React, { useState } from "react";
import CustomerInfo from "../CustomerInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";
import { usePaymentVerifyMutation } from "@/store/slice/api/paymentApiSlice";

const Index = ({user, query, data}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [paymentVerified] = usePaymentVerifyMutation()

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

  const createRazorPayOrder = async(value) => {
    try{
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      
      if (!res) {
        throw new Error("Razor pay is unable to initalize")
      }

      const { amount, id: order_id, currency } = value.data;

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
      content: <CustomerInfo user={user.userInfo} query={query} data={data} createRazorPayOrder={createRazorPayOrder}/>,
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
    </>
  );
};

export default Index;
