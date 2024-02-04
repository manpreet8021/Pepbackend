'use client'

import { useAddCountryMutation, useUpdateCountryMutation } from "@/store/slice/api/countryApiSlice";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import ModalFooter from "../modal/ModalFooter";
import ModalBody from "../modal/ModalBody";
import ModalHeader from "../modal/ModalHeader";
import fileValidation, {MAX_FILE_SIZE} from "@/utils/fileValidation"
import Image from "next/image";
import { useDispatch } from "react-redux";
import { countryData } from "@/store/slice/countrySlice";

export default function CountryForm({closeModal, title, data}) {
    const [addCountry] = useAddCountryMutation();
    const [updateCountry, {isLoading}] = useUpdateCountryMutation();
    const dispatch = useDispatch();
    
    const initialState = {
        id: data?._id || '',
        name: data?.name || '',
        active: data?.active || false,
        logo: '',
        imageUpdated: data.logo ? false : true
    }
    
    const handleSubmit = async(values, actions) => {
        const formData = new FormData()

        for (let value in values) {
            formData.append(value, values[value]);
        }
        
        try {
            const result = formData.get('id') != '' ? await updateCountry(formData) : await addCountry(formData);
            dispatch(countryData(result))
            const fileInput = document.querySelector('input[type="file"][name="logo"]');
            if (fileInput) {
                fileInput.value = '';
            }
            actions.resetForm();
            closeModal()
        } catch (error) {
            console.log(error.message)
        }
    }

    const validationSchema = Yup.object({
        name: Yup.string().required(),
        active: Yup.boolean().required(),
        imageUpdated: Yup.boolean().required(),
        logo: Yup.mixed().when(
            'imageUpdated', {
                is: true,
                then: (schema) => schema
                    .test("is-valid-type", "Image is not of valid type", value => fileValidation(value && value.name.toLowerCase(), "image"))
                    .test("is-valid-size", "Max allowed size is 100KB", value => value && value.size <= MAX_FILE_SIZE)
            }
        )
    })

    return(
        <>
            <ModalHeader title={`${title} Country`}/>
            <Formik initialValues={initialState} enableReinitialize onSubmit={(values, actions) => handleSubmit(values, actions)} validationSchema={validationSchema}>
                {({ handleSubmit, isSubmitting, dirty, isValid, setFieldValue }) => (
                    <Form onSubmit={handleSubmit} encType="multipart/form-data">
                        <ModalBody>
                            <div className="row x-gap-20 y-gap-20">
                                <div className="col-12">
                                    <div className="form-input ">
                                        <Field type="text" required name="name" disabled={title === "View"} />
                                        <label className="lh-1 text-16 text-light-1">Country Name</label>
                                    </div>
                                    <ErrorMessage name="name" component="div" className="error-message"/>
                                </div>
                                {
                                    title !== "View" && ( 
                                        <div className="col-12">
                                                <div className="form-input ">
                                                    <input type="file"
                                                        name="logo"
                                                        accept='image/*'
                                                        onChange={(e) => {
                                                            setFieldValue('imageUpdated', true)
                                                            setFieldValue('logo', e.currentTarget.files[0])}
                                                        } />
                                                </div>
                                                <ErrorMessage name="logo" component="div" className="error-message"/>
                                            </div>
                                    ) 
                                }
                                { data.logo && <div className="col-12"><Image src={data.logo} width="50" height="50" alt="Country Logo"/></div>}
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
                            </div>
                        </ModalBody>
                        {
                            title !== "View" && (
                                <ModalFooter isLoading={isLoading} isSubmitting={isSubmitting} isValid={isValid} dirty={dirty} closeModal={closeModal}/>
                            )
                        }
                    </Form>
                )}
            </Formik>
        </>
    )
}