'use client'

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import ModalFooter from "../modal/ModalFooter";
import ModalBody from "../modal/ModalBody";
import ModalHeader from "../modal/ModalHeader";
import fileValidation, { MAX_FILE_SIZE } from "@/utils/fileValidation"
import Image from "next/image";
import { useAddCityMutation, useUpdateCityMutation } from "@/store/slice/api/cityApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { useGetCountryQuery } from "@/store/slice/api/countryApiSlice";
import { showToast } from "@/store/slice/toastSlice";

export default function CityForm({closeModal, title, data}) {
    const dispatch = useDispatch()
    const {isLoading} = useGetCountryQuery();
    const countries = useSelector(state => state.country)
    const [addCity] = useAddCityMutation()
    const [updateCity] = useUpdateCityMutation()

    const initialState = {
        id: data?._id || '',
        name: data?.name || '',
        country: data?.country?._id || '',
        active: data?.active || false,
        recommended: data?.recommended || false,
        images: '',
        imageUpdated: data.images ? false : true
    }
    
    const handleSubmit = async(values, actions) => {
        const formData = new FormData()
        
        for (let value in values) {
            formData.append(value, values[value]);
        }

        try {
            const result = formData.get('id') != '' ? await updateCity(formData) : await addCity(formData);
            if(result.error) {
                throw new Error(JSON.stringify(result.error))
            }
            const fileInput = document.querySelector('input[type="file"][name="images"]');
            if (fileInput) {
                fileInput.value = '';
            }
            actions.resetForm();
            closeModal()
        } catch (error) {
            let errorText = 'Something went wrong'

            const e = JSON.parse(error.message)
            
            if(e.status !== 500) errorText = e.data.message 
            dispatch(showToast({ header: 'Error', body: errorText, type: 'danger'}))
        }
    }

    const validationSchema = Yup.object({
        name: Yup.string().required(),
        active: Yup.boolean().required(),
        recommended: Yup.boolean().required(),
        imageUpdated: Yup.boolean().required(),
        country: Yup.string().required(),
        images: Yup.mixed().when(
            'imageUpdated', {
                is: true,
                then: (schema) => schema.required()
                    .test("is-valid-type", "Image is not of valid type", value => fileValidation(value, "image"))
                    
            }
        )
    })

    return(
        <>
            <ModalHeader title={`${title} City`}/>
            <Formik initialValues={initialState} enableReinitialize onSubmit={(values, actions) => handleSubmit(values, actions)} validationSchema={validationSchema}>
                {({ handleSubmit, isSubmitting, dirty, isValid, setFieldValue, errors }) => (
                    <Form onSubmit={handleSubmit} encType="multipart/form-data">
                        <ModalBody>
                            <div className="row x-gap-20 y-gap-20">
                                <div className="col-12">
                                    <div className="form-input ">
                                        <Field type="text" required name="name" disabled={title === "View"} />
                                        <label className="lh-1 text-16 text-light-1">City</label>
                                    </div>
                                    <ErrorMessage name="name" component="div" className="error-message"/>
                                </div>
                                <div className="col-12">
                                    <div className="form-input ">
                                        <Field as="select" required name="country" disabled={title === "View"}>
                                            <option></option>
                                            {countries.data && countries.data.map(country => (
                                                <option key={country._id} value={`${country._id}`}>{country.name}</option>
                                            ))}
                                        </Field>
                                        <label className="lh-1 text-16 text-light-1">Country</label>
                                    </div>
                                    <ErrorMessage name="country" component="div" className="error-message"/>
                                </div>
                                {
                                    title !== "View" && ( 
                                        <div className="col-12">
                                            <div className="form-input ">
                                                <input type="file"
                                                    name="images"
                                                    accept='image/*'
                                                    onChange={(e) => {
                                                        setFieldValue('imageUpdated', true)
                                                        setFieldValue('images',  e.currentTarget.files[0])}
                                                    } />
                                            </div>
                                            <ErrorMessage name="images" component="div" className="error-message"/>
                                        </div>
                                    ) 
                                }

                                { data.images &&  
                                    <div className="col-12 d-flex">
                                        <div className="col-3">
                                            <Image src={data.images.location} width={150} height={100} className="5px" alt="City Images"/>
                                        </div>
                                    </div>
                                }

                                <div className="col-12">
                                    <div className="d-flex items-center form-checkbox">
                                        <Field type="checkbox" name="active" disabled={title === "View"}/>
                                        <div className="form-checkbox__mark">
                                            <div className="form-checkbox__icon icon-check" />
                                        </div>
                                        <div className="text-15 lh-11 ml-10">Active</div>
                                    </div>
                                    <ErrorMessage name="active" component="div" className="error-message"/>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex items-center form-checkbox">
                                        <Field type="checkbox" name="recommended" disabled={title === "View"}/>
                                        <div className="form-checkbox__mark">
                                            <div className="form-checkbox__icon icon-check" />
                                        </div>
                                        <div className="text-15 lh-11 ml-10">Recommended</div>
                                    </div>
                                    <ErrorMessage name="recommended" component="div" className="error-message"/>
                                </div>
                            </div>
                        </ModalBody>
                        {
                            title !== "View" && (
                                <ModalFooter isSubmitting={isSubmitting} isValid={isValid} dirty={dirty} closeModal={closeModal}/>
                            )
                        }
                    </Form>
                )}
            </Formik>
        </>
    )
}