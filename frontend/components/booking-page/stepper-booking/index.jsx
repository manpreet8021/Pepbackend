
'use client'

import React from "react";
import CustomerInfo from "../CustomerInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";
import { usePaymentVerifyMutation } from "@/store/slice/api/paymentApiSlice";
import { useRouter } from "next/navigation";

const Index = ({user, query, data}) => {
  const router = useRouter()
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
          try{
            const result = await paymentVerified(response);
            if(result.error) throw new Error("Payment failed")
            
            router.push(`/final-page/${result.data}`)
          } catch (error) {
            console.log(error)
          }    
        },
        modal: {
          confirm_close: true,
          ondismiss: async (reason) => {
            const {
              reason: paymentReason, field, step, code,
            } = reason && reason.error ? reason.error : {};

            if (reason === undefined) {
              throw new Error("cancelled")
            } 
            
            else if (reason === 'timeout') {
              throw new Error("timeout")
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
      title: "Final Step",
      stepNo: "2",
      stepBar: "",
      content: <OrderSubmittedInfo />,
    },
  ];

  return (
    <>
      <div className="row x-gap-40 y-gap-30 items-center">
        <React.Fragment>
          <div className="col-auto">
            <div className="d-flex items-center transition">
              <div className="active size-40 rounded-full flex-center bg-blue-1">
                <i className="icon-check text-16 text-white"></i>
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
              <div className="size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500">
                <span>2</span>
              </div>
              <div className="text-18 fw-500 ml-10">Final Step</div>
            </div>
          </div>
        </React.Fragment>
      </div>

      <div className="row">
        <CustomerInfo user={user.userInfo} query={query} data={data} createRazorPayOrder={createRazorPayOrder}/>
      </div>
    </>
  );
};

export default Index;
