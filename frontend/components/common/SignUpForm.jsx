'use client'
import { setCredentials } from "@/store/slice/authSlice";
import { useSignupMutation } from "@/store/slice/userApiSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import * as Yup from 'yup'

const SignUpForm = () => {
  const [signup] = useSignupMutation()
  const dispatch = useDispatch()
  const navigation = useRouter()

  const initalValues = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
    privacyBox: false
  }

  const validationSchema = Yup.object({
    displayName: Yup.string().required("Name is required"),
    email: Yup.string().email("It should be a valid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password doesnot match')
  })

  const handleSubmit = async(values) => {
    const res = await signup({displayName: values.displayName, email: values.email, password: values.password, privacyBox: values.privacyBox}).unwrap();
    dispatch(setCredentials(res))
    navigation.push('/')
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
              <Field type="password" name="password" required/>
              <label className="lh-1 text-14 text-light-1">Password</label>
            </div>
            <ErrorMessage name="password" component="div" className="error-message"/>
          </div>
          {/* End .col */}

          <div className="col-12">
            <div className="form-input ">
              <Field type="password" name="confirmPassword" required/>
              <label className="lh-1 text-14 text-light-1">Confirm Password</label>
            </div>
            <ErrorMessage name="confirmPassword" component="div" className="error-message"/>
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
