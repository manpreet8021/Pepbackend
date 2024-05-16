'use client'

import Link from "next/link";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'Yup'
import { useLoginMutation } from "@/store/slice/api/userApiSlice";
import { useRouter } from "next/navigation";
import { showToast } from "@/store/slice/toastSlice";
import { useDispatch } from "react-redux";

const LoginForm = ({query}) => {
  const [login] = useLoginMutation();
  const router = useRouter()
  const dispatch = useDispatch()

  const initalValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("It should be a valid email").required("Email is required"),
    password: Yup.string().required("Password is required")
  })

  const handleSubmit = async(values) => {
    try{
      const res = await login(values);
      if(res.error) throw new Error(JSON.stringify(res.error))

      query ? router.push(`/booking-page/${query}`) : router.push('/')
      
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
              Don&apos;t have an account yet?{" "}
              <Link href="/signup" className="text-blue-1">
                Sign up for free
              </Link>
            </p>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-input ">
              <Field type="text" required name="email" />
              <label className="lh-1 text-14 text-light-1">Email</label>
            </div>
            <ErrorMessage name="email" component="div" className="error-message"/>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-input ">
              <Field type="password" required name="password" />
              <label className="lh-1 text-14 text-light-1">Password</label>
            </div>
            <ErrorMessage name="password" component="div" className="error-message"/>
          </div>
          {/* End .col */}

          <div className="col-12">
            <a href="#" className="text-14 fw-500 text-blue-1 underline">
              Forgot your password?
            </a>
          </div>
          {/* End .col */}

          <div className="col-12">
            <button
              type="submit"
              className="button py-20 -dark-1 bg-blue-1 text-white w-100"
              disabled={isSubmitting || !dirty || !isValid}
            >
              Sign In <div className="icon-arrow-top-right ml-15" />
            </button>
          </div>
          {/* End .col */}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
