const OrderSubmittedInfo = ({data}) => {
  return (
    <>
      {
        data && 
        <div className="col-xl-8 col-lg-8">
          <div className="order-completed-wrapper">
            <div className="d-flex flex-column items-center mt-40 lg:md-40 sm:mt-24">
              <div className="size-80 flex-center rounded-full bg-dark-3">
                <i className={`${data?.status === 'success' ? 'icon-check': 'icon-close'} text-30 text-white`} />
              </div>
              <div className="text-30 lh-1 fw-600 mt-20">
                {data.detail?.status === 'success'? `${data.name}, your booking was submitted successfully!` : `${data.name}, your booking was failed to submit!`}
              </div>
              <div className="text-15 text-light-1 mt-10">
                Booking details has been sent to: {data.email}
              </div>
            </div>
            {/* End header */}

            <div className="border-type-1 rounded-8 px-50 py-35 mt-40">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="text-15 lh-12">Order Number</div>
                  <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                    {data?.bookingNumber}
                  </div>
                </div>
                {/* End .col */}
                <div className="col-lg-3 col-md-6">
                  <div className="text-15 lh-12">Title</div>
                  <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                    {data?.retreat?.title}
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="text-15 lh-12">Total</div>
                  <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                    <span>&#8377;</span>{data?.price}
                  </div>
                </div>
                {/* End .col */}
                <div className="col-lg-3 col-md-6">
                  <div className="text-15 lh-12">Payment Method</div>
                  <div className="text-15 lh-12 fw-500 text-blue-1 mt-10">
                    {data?.method}
                  </div>
                </div>
                {/* End .col */}
              </div>
            </div>
            {/* order price info */}

            <div className="border-light rounded-8 px-50 py-40 mt-40">
              <h4 className="text-20 fw-500 mb-30">Your Information</h4>
              <div className="row y-gap-10">
                <div className="col-12">
                  <div className="d-flex justify-between ">
                    <div className="text-15 lh-16">Name</div>
                    <div className="text-15 lh-16 fw-500 text-blue-1">{data.name}</div>
                  </div>
                </div>
                {/* End .col */}
                <div className="col-12">
                  <div className="d-flex justify-between border-top-light pt-10">
                    <div className="text-15 lh-16">Email</div>
                    <div className="text-15 lh-16 fw-500 text-blue-1">
                      {data.email}
                    </div>
                  </div>
                </div>
                {/* End .col */}
                <div className="col-12">
                  <div className="d-flex justify-between border-top-light pt-10">
                    <div className="text-15 lh-16">Phone</div>
                    <div className="text-15 lh-16 fw-500 text-blue-1">
                      {data.phoneNumber}
                    </div>
                  </div>
                </div>
                {/* End .col */}
                <div className="col-12">
                  <div className="d-flex justify-between border-top-light pt-10">
                    <div className="text-15 lh-16">Address line 1</div>
                    <div className="text-15 lh-16 fw-500 text-blue-1">
                      {data.address?.line1}
                    </div>
                  </div>
                </div>
                {/* End .col */}
                <div className="col-12">
                  <div className="d-flex justify-between border-top-light pt-10">
                    <div className="text-15 lh-16">Address line 2</div>
                    <div className="text-15 lh-16 fw-500 text-blue-1">
                      {data.address?.line2}
                    </div>
                  </div>
                </div>
                {/* End .col */}
                <div className="col-12">
                  <div className="d-flex justify-between border-top-light pt-10">
                    <div className="text-15 lh-16">State</div>
                    <div className="text-15 lh-16 fw-500 text-blue-1">
                      {data.address?.state}
                    </div>
                  </div>
                </div>
                {/* End .col */}
                <div className="col-12">
                  <div className="d-flex justify-between border-top-light pt-10">
                    <div className="text-15 lh-16">Country</div>
                    <div className="text-15 lh-16 fw-500 text-blue-1">
                      {data.address?.country}
                    </div>
                  </div>
                </div>
                {/* End .col */}
              </div>
              {/* End .row */}
            </div>
            {/* End order information */}
          </div>
        </div>
      }
    </>
  );
};

export default OrderSubmittedInfo;
