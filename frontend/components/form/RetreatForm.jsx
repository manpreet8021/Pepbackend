'use client'

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup'
import ModalFooter from "../modal/ModalFooter";
import ModalBody from "../modal/ModalBody";
import ModalHeader from "../modal/ModalHeader";
import fileValidation from "@/utils/fileValidation"
import Image from "next/image";
import { useGetCountryQuery } from "@/store/slice/api/countryApiSlice";
import { useGetCityQuery } from "@/store/slice/api/cityApiSlice";
import { useSelector } from "react-redux";

export default function RetreatForm({closeModal, title, data}) {
    const countryQuery = useGetCountryQuery()
    const cityQuery = useGetCityQuery()

    const cities = useSelector(state => state.city)
    const countries = useSelector(state => state.country)

    const initialState = {
        id: data?._id || '',
        name: data?.name || '',
        overview: data?.overview || '',
        city: data?.city || '',
        country: data?.country || '',
        description: data?.description || '',
        active: data?.active || false,
        images: [],
        imageUpdated: data.images ? false : true,
        rooms: data.rooms || []
    }
    
    const handleSubmit = async(values, actions) => {
        console.log(values)
        const formData = new FormData()

        for (let value in values) {
            formData.append(value, values[value]);
        }

    }

    const validationSchema = Yup.object({
        name: Yup.string().required(),
        overview: Yup.string().required(),
        description: Yup.string().required(),
        city: Yup.string().required(),
        country: Yup.string().required(),
        active: Yup.boolean().required(),
        imageUpdated: Yup.boolean().required(),
        images: Yup.mixed().when(
            'imageUpdated', {
                is: true,
                then: (schema) => schema.required()
                    .test("is-valid-type", "Image is not of valid type", value => fileValidation(value, "image"))
                    .test("max-file", "You can select only 5 files at a time", value => value && value.length && value.length <= 5)
                    
            }
        )
    })

    return(
        <>
            <ModalHeader title={`${title} Retreat`}/>
            <Formik initialValues={initialState} enableReinitialize onSubmit={(values, actions) => handleSubmit(values, actions)} validationSchema={validationSchema}>
                {({ handleSubmit, isSubmitting, dirty, isValid, setFieldValue }) => (
                    <Form onSubmit={handleSubmit} encType="multipart/form-data">
                        <ModalBody>
                            <div className="row x-gap-20 y-gap-20">
                                <div className="col-12">
                                    <div className="form-input ">
                                        <Field type="text" required name="name" disabled={title === "View"} />
                                        <label className="lh-1 text-16 text-light-1">Name</label>
                                    </div>
                                    <ErrorMessage name="name" component="div" className="error-message"/>
                                </div>
                                <div className="col-12">
                                    <div className="form-input ">
                                        <Field type="text" required name="overview" disabled={title === "View"} />
                                        <label className="lh-1 text-16 text-light-1">Overview</label>
                                    </div>
                                    <ErrorMessage name="overview" component="div" className="error-message"/>
                                </div>
                                <div className="col-12">
                                    <div className="form-input ">
                                        <Field name="description" as="textarea" required disabled={title === "View"}/>
                                        <label className="lh-1 text-16 text-light-1">Description</label>
                                    </div>
                                    <ErrorMessage name="description" component="div" className="error-message"/>
                                </div>
                                <div className="col-6">
                                    <div className="form-input ">
                                        <Field type="text" required name="city" disabled={title === "View"} as="select">
                                            <option></option>
                                            {cities.data && cities.data.map(city => (
                                                <option key={city._id} value={`${city._id}`}>{city.name}</option>
                                            ))}
                                        </Field>
                                        <label className="lh-1 text-16 text-light-1">City</label>
                                    </div>
                                    <ErrorMessage name="city" component="div" className="error-message"/>
                                </div>
                                <div className="col-6">
                                    <div className="form-input ">
                                        <Field type="text" required name="country" disabled={title === "View"} as="select">
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
                                        <>
                                            <div className="col-12">
                                                <div className="form-input ">
                                                    <input type="file"
                                                        name="images"
                                                        accept='image/*'
                                                        multiple
                                                        onChange={(e) => {
                                                            setFieldValue('imageUpdated', true)
                                                            setFieldValue('images',  Array.from(e.currentTarget.files))}
                                                        } />
                                                </div>
                                                <ErrorMessage name="images" component="div" className="error-message"/>
                                            </div>
                                            <div className="col-12 ">
                                                <button type="button" className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
                                                    Add Rooms <div className="icon-plus ml-15" />
                                                </button>
                                            </div>
                                        </>
                                    ) 
                                }
                                
                                { data.images && data.images.length && 
                                    <div className="col-12 d-flex">
                                        {data.images.map(image => (
                                            <div className="col-3" key={image.id}>
                                                <Image src={image.location} width={150} height={100} style={imageStyle} alt="Retreat Images"/>
                                            </div>
                                        ))}
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