import { ErrorMessage, Field, Form, Formik } from "formik";
import AvatarUploader from "./AvatarUploader";
import * as Yup from "yup";
import { useUpdateUserDetailMutation } from "@/store/slice/api/userApiSlice";

const PersonalInfo = ({data}) => {
  const [updateUserDetail] = useUpdateUserDetailMutation()

  const initialState = {
    name: data?.name || '',
    email: data?.email || '',
    phoneNumber: data?.phoneNumber || '',
    line1: data?.line1 || '',
    line2: data?.line2 || '',
    state: data?.state || '',
    country: data?.country || ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().required(),
    phoneNumber: Yup.string().required(),
    line1: Yup.string().required(),
    line2: Yup.string(),
    state: Yup.string().required(),
    country: Yup.string().required()
  })

  const handleSubmit = async(values) => {
    try{
      const response = await updateUserDetail(values)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="col-xl-9">
        <div className="border-top-light mt-30 mb-30" />

        <Formik initialValues={initialState} enableReinitialize onSubmit={(values) => handleSubmit(values)} validationSchema={validationSchema}>
          {({ handleSubmit, isSubmitting, isValid, dirty }) => (
            <Form onSubmit={handleSubmit}>
              <>
                <div className="row x-gap-20 y-gap-20">
                  <div className="col-md-12">
                    <div className="form-input ">
                      <Field type="text" required name="name" />
                      <label className="lh-1 text-16 text-light-1">Full Name</label>
                    </div>
                    <ErrorMessage name="name" component="div" className="error-message"/>
                  </div>

                  <div className="col-md-12">
                    <div className="form-input ">
                      <Field type="text" required name="email" disabled/>
                      <label className="lh-1 text-16 text-light-1">Email</label>
                    </div>
                    <ErrorMessage name="email" component="div" className="error-message"/>
                  </div>

                  <div className="col-md-12">
                    <div className="form-input ">
                      <Field type="text" required name="phoneNumber" />
                      <label className="lh-1 text-16 text-light-1">Phone Number</label>
                    </div>
                    <ErrorMessage name="phoneNumber" component="div" className="error-message"/>
                  </div>

                  <div className="col-md-6">
                    <div className="form-input ">
                      <Field type="text" required name="line1" />
                      <label className="lh-1 text-16 text-light-1">Address line 1</label>
                    </div>
                    <ErrorMessage name="line1" component="div" className="error-message"/>
                  </div>

                  <div className="col-md-6">
                    <div className="form-input ">
                      <Field type="text" required name="line2" />
                      <label className="lh-1 text-16 text-light-1">Address line 2</label>
                    </div>
                    <ErrorMessage name="line2" component="div" className="error-message"/>
                  </div>

                  <div className="col-md-6">
                    <div className="form-input ">
                      <Field type="text" required name="state" />
                      <label className="lh-1 text-16 text-light-1">State</label>
                    </div>
                    <ErrorMessage name="state" component="div" className="error-message"/>
                  </div>

                  <div className="col-md-6">
                    <div className="form-input ">
                      <Field type="text" required name="country" />
                      <label className="lh-1 text-16 text-light-1">Country</label>
                    </div>
                    <ErrorMessage name="country" component="div" className="error-message"/>
                  </div>
                </div>
                <div className="d-inline-block pt-30">
                  <button
                    type="submit"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Save Changes <div className="icon-arrow-top-right ml-15" />
                  </button>
                </div>
              </>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default PersonalInfo;
