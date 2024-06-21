'use client'

import { useSignupMutation } from "@/store/slice/api/userApiSlice";
import { showToast } from "@/store/slice/toastSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import * as Yup from 'yup'

const SignUpForm = () => {
  const [signup] = useSignupMutation()
  const navigation = useRouter()
  const dispatch = useDispatch()

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const initalValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    line1: '',
    line2: '',
    state: '',
    country: '',
    phoneNumber: '',
    subscribe: false,
  }

  const validationSchema = Yup.object({
    displayName: Yup.string().required("Name is required"),
    email: Yup.string().email("It should be a valid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password doesnot match'),
    line1: Yup.string().required(),
    line2: Yup.string(),
    state: Yup.string().required(),
    country: Yup.string().required(),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
  })

  const handleSubmit = async(values) => {
    try {
      const res = await signup(values)
      if(res.error) throw new Error(JSON.stringify(res.error))
      navigation.push('/')
    } catch (error) {
      let errorText = 'Something went wrong'
      const e = JSON.parse(error.message)
      if(e.status !== 500) errorText = e.data.message 
        dispatch(showToast({ header: 'Error', body: errorText, type: 'danger'}))
      }
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
              <Field type="text" name="displayName" required/>
              <label className="lh-1 text-14 text-light-1">Name</label>
            </div>
            <ErrorMessage name="displayName" component="div" className="error-message"/>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-input ">
              <Field type="text" name="email" required/>
              <label className="lh-1 text-14 text-light-1">Email</label>
            </div>
            <ErrorMessage name="email" component="div" className="error-message"/>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-input ">
              <Field type="text" name="phoneNumber" required/>
              <label className="lh-1 text-14 text-light-1">Phone number</label>
            </div>
            <ErrorMessage name="phoneNumber" component="div" className="error-message"/>
          </div>

          <div className="col-md-6">
            <div className="form-input ">
              <Field type="password" name="password" required/>
              <label className="lh-1 text-14 text-light-1">Password</label>
            </div>
            <ErrorMessage name="password" component="div" className="error-message"/>
          </div>
          {/* End .col */}

          <div className="col-md-6">
            <div className="form-input ">
              <Field type="password" name="confirmPassword" required/>
              <label className="lh-1 text-14 text-light-1">Confirm Password</label>
            </div>
            <ErrorMessage name="confirmPassword" component="div" className="error-message"/>
          </div>
          {/* End .col */}

          <div className="col-md-6">
            <div className="form-input ">
              <Field type="text" name="line1" required/>
              <label className="lh-1 text-14 text-light-1">Line 1</label>
            </div>
            <ErrorMessage name="line1" component="div" className="error-message"/>
          </div>

          <div className="col-md-6">
            <div className="form-input ">
              <Field type="text" name="line2" required/>
              <label className="lh-1 text-14 text-light-1">Line 2</label>
            </div>
            <ErrorMessage name="line2" component="div" className="error-message"/>
          </div>

          <div className="col-md-6">
            <div className="form-input ">
              <Field type="text" name="state" required/>
              <label className="lh-1 text-14 text-light-1">State</label>
            </div>
            <ErrorMessage name="state" component="div" className="error-message"/>
          </div>

          <div className="col-md-6">
            <div className="form-input ">
              <Field type="text" name="country" required/>
              <label className="lh-1 text-14 text-light-1">Country</label>
            </div>
            <ErrorMessage name="country" component="div" className="error-message"/>
          </div>

          <div className="col-12">
            <div className="d-flex ">
              <div className="form-checkbox mt-5">
                <Field type="checkbox" name="subscribe"/>
                <div className="form-checkbox__mark">
                  <div className="form-checkbox__icon icon-check" />
                </div>
              </div>
              <div className="text-15 lh-15 text-light-1 ml-10">
                Email me exclusive Soulcation offers and promotions
              </div>
            </div>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button
              type="submit"
              className="button py-20 -dark-1 bg-blue-1 text-white w-100"
              disabled={isSubmitting || !dirty || !isValid}
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
