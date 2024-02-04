'use client'

import Link from "next/link";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import { useLoginMutation } from "@/store/slice/api/userApiSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [login] = useLoginMutation();
  const dispatch = useDispatch()
  const router = useRouter()

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
      router.push('/')
    } catch (error) {
      console.log(error)
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
