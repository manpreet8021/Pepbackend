'use client'
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from 'yup'

const SignUpForm = () => {
  const initalValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    privacyBox: false
  }

  const validationSchema = Yup.object({
    displayName: Yup.string().required(),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password doesnot match').required()
  })

  const handleSubmit = (values) => {
    console.log(values)
  }

  return (
    <Formik enableReinitialize initialValues={initalValues} onSubmit={values => handleSubmit(values)} validationSchema={validationSchema}>
      {({ handleSubmit, isSubmitting, dirty, isValid }) => (
        <Form className="row y-gap-20" onSubmit={handleSubmit}>
          <div className="col-12">
            <h1 className="text-22 fw-500">Welcome back</h1>
            <p className="mt-10">
              Already have an account yet?{" "}
              <Link href="/login" className="text-blue-1">
                Log in
              </Link>
            </p>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-input ">
              <Field type="text" name="displayName"/>
              <label className="lh-1 text-14 text-light-1">Display Name</label>
              <ErrorMessage name="displayName" component="div" />

            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-input ">
              <Field type="text" name="email"/>
              <label className="lh-1 text-14 text-light-1">Email</label>
            </div>
            <ErrorMessage name="email" component="div" />
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-input ">
              <Field type="password" name="password"/>
              <label className="lh-1 text-14 text-light-1">Password</label>
            </div>
            <ErrorMessage name="password" component="div" />
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-input ">
              <Field type="password" name="confirmPassword"/>
              <label className="lh-1 text-14 text-light-1">Confirm Password</label>
            </div>
            <ErrorMessage name="confirmPassword" component="div" />
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="d-flex ">
              <div className="form-checkbox mt-5">
                <Field type="checkbox" name="privacyBox"/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
              </div>
              <div className="text-15 lh-15 text-light-1 ml-10">
                Email me exclusive Agoda promotions. I can opt out later as stated
                in the Privacy Policy.
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button
              type="submit"
              className="button py-20 -dark-1 bg-blue-1 text-white w-100"
              disabled={isSubmitting || !dirty}
            >
              Sign Up <div className="icon-arrow-top-right ml-15" />
            </button>
          </div>
          {/* End .col */}
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
