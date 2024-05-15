import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "Yup";

const CustomerInfo = ({user, query, data, createRazorPayOrder}) => {

  const initialState = {
    name: data?.user?.name || '',
    email: data?.user?.email || '',
    phone: data?.user.phone || '',
    line1: data?.user?.line1 || '',
    line2: data?.user?.line2 || '',
    state: data?.user?.state || '',
    country: data?.user?.country || '',
    line1: data?.user?.line1 || '',
  }

  const handleSubmit = async(values, actions) => {

  }

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required(),
    phone: Yup.string().required(),
    line1: Yup.string().required(),
    line2: Yup.string(),
    state: Yup.string().required(),
    country: Yup.string().required()
  })

  return (
    <>
      <div className="col-xl-7 col-lg-8 mt-30">
        {
          !user ? 
          <div className="py-15 mb-40 px-20 rounded-4 text-15 bg-blue-1-05">
            <Link href={`/login?q=${query}`} className="text-blue-1 fw-500">Sign in</Link> to book with your saved details or{" "}
            <Link href={`/signup?q=${query}`} className="text-blue-1 fw-500">
              register
            </Link>{" "}
            to manage your bookings on the go!
          </div>
          : null
        }
        <h2 className="text-22 fw-500 md:mt-24">
          Let us know who you are
        </h2>
        <Formik initialValues={initialState} enableReinitialize onSubmit={(values, actions) => handleSubmit(values, actions)} validationSchema={validationSchema}>
          {({ handleSubmit, isSubmitting, isValid }) => (
            <Form onSubmit={handleSubmit}>
              <>
                <div className="row x-gap-20 y-gap-20 pt-20">
                  <div className="col-12">
                    <div className="form-input ">
                      <Field type="text" required name="name" />
                      <label className="lh-1 text-16 text-light-1">Full Name</label>
                    </div>
                    <ErrorMessage name="name" component="div" className="error-message"/>
                  </div>
                  {/* End col-12 */}

                  <div className="col-md-6">
                    <div className="form-input ">
                      <Field type="text" required name="email" />
                      <label className="lh-1 text-16 text-light-1">Email</label>
                    </div>
                    <ErrorMessage name="email" component="div" className="error-message"/>
                  </div>
                  {/* End col-12 */}

                  <div className="col-md-6">
                    <div className="form-input ">
                      <Field type="text" required name="phone" />
                      <label className="lh-1 text-16 text-light-1">Phone Number</label>
                    </div>
                    <ErrorMessage name="phone" component="div" className="error-message"/>
                  </div>
                  {/* End col-12 */}

                  <div className="col-12">
                    <div className="form-input ">
                      <Field type="text" required name="line1" />
                      <label className="lh-1 text-16 text-light-1">
                        Address line 1
                      </label>
                    </div>
                    <ErrorMessage name="line1" component="div" className="error-message"/>
                  </div>
                  {/* End col-12 */}

                  <div className="col-12">
                    <div className="form-input ">
                      <Field type="text" required name="line2" />
                      <label className="lh-1 text-16 text-light-1">
                        Address line 2
                      </label>
                    </div>
                    <ErrorMessage name="line2" component="div" className="error-message"/>
                  </div>
                  {/* End col-12 */}

                  <div className="col-md-6">
                    <div className="form-input ">
                      <Field type="text" required name="state" />
                      <label className="lh-1 text-16 text-light-1">
                        State/Province/Region
                      </label>
                    </div>
                    <ErrorMessage name="state" component="div" className="error-message"/>
                  </div>
                  {/* End col-12 */}

                  <div className="col-md-6">
                    <div className="form-input ">
                      <Field type="text" required name="country" />
                      <label className="lh-1 text-16 text-light-1">
                        Country
                      </label>
                    </div>
                    <ErrorMessage name="country" component="div" className="error-message"/>
                  </div>
                  {/* End col-12 */}

                  <div className="col-12">
                    <div className="form-input ">
                      <Field component="textarea" required rows={6} name="request" />
                      <label className="lh-1 text-16 text-light-1">
                        Special Requests
                      </label>
                    </div>
                    <ErrorMessage name="request" component="div" className="error-message"/>
                  </div>
                  {/* End col-12 */}

                  {/* <div className="col-12">
                    <div className="row y-gap-20 items-center justify-between">
                      <div className="col-auto">
                        <div className="text-14 text-light-1">
                          By proceeding with this booking, I agree to GoTrip Terms of
                          Use and Privacy Policy.
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="row x-gap-20 y-gap-20 pt-20">
                  <div className="col-auto">
                    <button
                      className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
                      disabled={!isValid || isSubmitting}
                      onClick={createRazorPayOrder}
                    >
                      Pay <div className="icon-arrow-top-right ml-15" />
                    </button>
                  </div>
                  {/* End next btn */}
                </div>
              </>
            </Form>
          )}
        </Formik>
      </div>

      
    
      {/* End .col-xl-7 */}

      <div className="col-xl-5 col-lg-4 mt-30">
        <div className="booking-sidebar">
          <BookingDetails data={data?.retreat} fromDate={data?.fromDate} toDate={data?.toDate} adult={data?.adult}/>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default CustomerInfo;
