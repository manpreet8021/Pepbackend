'use client'

import AdminWrapper from "@/components/layout/AdminWrapper";
import { useAddCountryMutation } from "@/store/slice/countryApiSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'

export default function addCountry() {
    const MAX_FILE_SIZE = 102400;

    const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

    function isValidFileType(fileName, fileType) {
        return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
    }

    const [addCountry, {isLoading}] = useAddCountryMutation();

    const initialState = {
        name: '',
        active: false,
        logo: ''
    }

    const handleSubmit = async(values, actions) => {
        const formData = new FormData()

        for (let value in values) {
            formData.append(value, values[value]);
        }
        
        try{
            const result = await addCountry(formData);
            const fileInput = document.querySelector('input[type="file"][name="logo"]');
            if (fileInput) {
                fileInput.value = '';
            }
            actions.resetForm();
        } catch (error) {
            console.log(error.message)
        }
    }

    const validationSchema = Yup.object({
        name: Yup.string().required(),
        active: Yup.boolean().required(),
        logo: Yup.mixed().required()
            .test("is-valid-type","Image is not of valid type", value => isValidFileType(value && value.name.toLowerCase(), "image"))
            .test("is-valid-size", "Max allowed size is 100KB", value => value && value.size <= MAX_FILE_SIZE)
    })

    return(
        <AdminWrapper>
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Add Country</h1>
              </div>
            </div>

            <Formik initialValues={initialState} enableReinitialize onSubmit={(values,actions) => handleSubmit(values, actions)} validationSchema={validationSchema}>
                {({ handleSubmit, isSubmitting, dirty, isValid, setFieldValue }) => (
                    <Form onSubmit={handleSubmit} encType="multipart/form-data">
                        <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                            <div className="col-xl-10">
                                {/* <div className="text-18 fw-500 mb-10">Hotel Content</div> */}
                                <div className="row x-gap-20 y-gap-20">
                                    <div className="col-12">
                                        <div className="form-input ">
                                            <Field type="text" required name="name"/>
                                            <label className="lh-1 text-16 text-light-1">Country Name</label>
                                        </div>
                                        <ErrorMessage name="name" component="div" className="error-message"/>
                                    </div>

                                    <div className="col-12">
                                        <label className="lh-1 text-16 text-light-1">Country Logo</label>
                                        <div className="form-input ">
                                            <input type="file"
                                                name="logo"
                                                accept='image/*'
                                                onChange={(e) => setFieldValue('logo', e.currentTarget.files[0])}/>
                                        </div>
                                        <ErrorMessage name="logo" component="div" className="error-message"/>
                                    </div>

                                    <div className="col-12">
                                        <div className="d-flex items-center form-checkbox">
                                            <Field type="checkbox" name="active"/>
                                            <div className="form-checkbox__mark">
                                                <div className="form-checkbox__icon icon-check" />
                                            </div>
                                            <div className="text-15 lh-11 ml-10">Active</div>
                                        </div>
                                        <ErrorMessage name="active" component="div" className="error-message"/>
                                    </div>
                                </div>

                                <div className="d-inline-block pt-30">
                                    <button type="submit" className="button h-50 px-24 -dark-1 bg-blue-1 text-white" disabled={isSubmitting || !dirty || !isValid || isLoading}>
                                        Save Changes <div className="icon-arrow-top-right ml-15" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </AdminWrapper>
    )
}