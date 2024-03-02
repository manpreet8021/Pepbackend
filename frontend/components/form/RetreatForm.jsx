'use client'

import { ErrorMessage, Field, FieldArray, Form, Formik } from "formik";
import * as Yup from 'yup'
import ModalFooter from "../modal/ModalFooter";
import ModalBody from "../modal/ModalBody";
import ModalHeader from "../modal/ModalHeader";
import fileValidation from "@/utils/fileValidation"
import Image from "next/image";
import { useGetCountryQuery } from "@/store/slice/api/countryApiSlice";
import { useGetCityQuery } from "@/store/slice/api/cityApiSlice";
import { useSelector } from "react-redux";
import { useGetRetreatTypeQuery } from "@/store/slice/api/lookupApiSlice";
import DatePicker from "react-multi-date-picker";
import { Accordion, Card, CloseButton } from "react-bootstrap";
import RoomForm from "./RoomForm";
import { useAddRetreatMutation } from "@/store/slice/api/retreatApiSlice";

export default function RetreatForm({closeModal, title, data}) {
    const minDate = new Date()

    const countryQuery = useGetCountryQuery()
    const cityQuery = useGetCityQuery()
    const retreatQuery = useGetRetreatTypeQuery()
    const [addRetreat] = useAddRetreatMutation()

    const cities = useSelector(state => state.city)
    const countries = useSelector(state => state.country)
    const lookup = useSelector(state => state.lookup)

    const initialState = {
        id: data?._id || '',
        title: data?.title || '',
        overview: data?.overview || '',
        description: data?.description || '',
        minGuest: data?.Guest?.min || '',
        maxGuest: data?.Guest?.max || '',
        youtubeUrl: data?.youtubeUrl || '',
        type: data?.type?._id || '',
        duration: data?.schedules || [],
        retreatDuration: data?.retreatDuration || '',
        line1: data?.address?.line1 || '',
        line2: data?.address?.line2 || '',
        zipcode: data?.address?.zipcode || '',
        city: data?.address?.city || '',
        country: data?.address?.country || '',
        images: [],
        active: data?.active || false,
        directBook: data?.directbook || false,
        rooms: data?.rooms || [],
        roomImageUpdated: data.roomImages ? false : true,
        imageUpdated: data.images ? false : true
    }
    
    const handleSubmit = async(values, actions) => {
        const formData = new FormData()

        for (let value in values) {
            if (Array.isArray(values[value])) {
                if(values[value][0] instanceof File){
                    for (let i = 0; i < values[value].length; i++) {
                        formData.append(`images`, values[value][i]);
                    }
                } else {
                    values[value].forEach((item, index) => {
                        if (typeof item === 'object' && item !== null) {
                            for (let prop in item) {
                                if(Array.isArray(item[prop]) && item[prop][0] instanceof File){
                                    for (let i = 0; i < item[prop].length; i++) {
                                        formData.append(`${value}[${index}][${prop}]`, item[prop][i]);
                                    }
                                } else {
                                    formData.append(`${value}[${index}][${prop}]`, item[prop]);
                                }
                            }
                        } else {
                            formData.append(`${key}[${index}]`, item);
                        }
                    });
                }
            } else {
                formData.append(value, values[value]);
            }
        }

        try{
            await addRetreat(formData)
            const fileInput = document.querySelectorAll('input[type="file"]');
            
            fileInput.forEach(input => {
                fileInput.value = '';
            });
            
            actions.resetForm();
            closeModal()
        } catch (e) {
            
        }
    }

    const roomSchema = Yup.object().shape({
        name: Yup.string().required(),
        description: Yup.string().required(),
        price: Yup.number().positive().required(),
        allowedGuest: Yup.number().positive().required(),
        advance: Yup.number().positive().max(100).required(),
        active: Yup.boolean().required(),
        images: Yup.mixed().when(
            'roomImageUpdated', {
                is: true,
                then: (schema) => schema.required()
                    .test("is-valid-type", "Image is not of valid type", value => fileValidation(value, "image"))
                    .test("max-file", "You can select only 5 files at a time", value => value && value.length && value.length <= 5)
                    
            }
        )
    });

    const validationSchema = Yup.object({
        title: Yup.string().required(),
        overview: Yup.string().required(),
        description: Yup.string().required(),
        minGuest: Yup.number("The value should be of type number").positive().min(1).required(),
        maxGuest: Yup.number("The value should be of type number").positive().min(Yup.ref('minGuest')).required(),
        youtubeUrl: Yup.string(),
        type: Yup.string().required(),
        duration: Yup.array().required(),
        retreatDuration: Yup.number().required(),
        line1: Yup.string().required(),
        line2: Yup.string(),
        zipcode: Yup.string().required(),
        city: Yup.string().required(),
        country: Yup.string().required(),
        images: Yup.mixed().when(
            'imageUpdated', {
                is: true,
                then: (schema) => schema.required()
                    .test("is-valid-type", "Each image should be less than 5mb", value => fileValidation(value, "image"))
                    .test("max-file", "You can select only 5 files at a time", value => value && value.length && value.length <= 5)
                    
            }
        ),
        active: Yup.boolean().required(),
        directBook: Yup.boolean().required(),
        rooms: Yup.array().of(roomSchema),
        imageUpdated: Yup.boolean().required()
    })

    

    return(
        <>
            <ModalHeader title={`${title} Retreat`}/>
            <Formik initialValues={initialState} enableReinitialize onSubmit={(values, actions) => handleSubmit(values, actions)} validationSchema={validationSchema}>
                {({ handleSubmit, isSubmitting, dirty, isValid, setFieldValue, values, setFieldTouched }) => (
                    <Form onSubmit={handleSubmit} encType="multipart/form-data">
                        <ModalBody>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Basic deatils</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="row x-gap-20 y-gap-20">
                                            <div className="col-12">
                                                <div className="form-input ">
                                                    <Field type="text" required name="title" disabled={title === "View"} />
                                                    <label className="lh-1 text-16 text-light-1">Title</label>
                                                </div>
                                                <ErrorMessage name="title" component="div" className="error-message"/>
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
                                                    <Field name="minGuest" required disabled={title === "View"}/>
                                                    <label className="lh-1 text-16 text-light-1">Min Guest</label>
                                                </div>
                                                <ErrorMessage name="minGuest" component="div" className="error-message"/>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-input ">
                                                    <Field type="text" required name="maxGuest" disabled={title === "View"} />
                                                    <label className="lh-1 text-16 text-light-1">Max Guest</label>
                                                </div>
                                                <ErrorMessage name="maxGuest" component="div" className="error-message"/>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-input ">
                                                    <Field type="text" name="youtubeUrl" disabled={title === "View"} />
                                                    <label className="lh-1 text-16 text-light-1">Youtube URL</label>
                                                </div>
                                                <ErrorMessage name="youtubeUrl" component="div" className="error-message"/>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-input ">
                                                    <Field type="text" required name="type" disabled={title === "View"} as="select">
                                                        <option></option>
                                                        {lookup.retreatType && lookup.retreatType.map(type => (
                                                            <option key={type._id} value={type._id}>{type.name}</option>
                                                        ))}
                                                    </Field>
                                                    <label className="lh-1 text-16 text-light-1">Type</label>
                                                </div>
                                                <ErrorMessage name="type" component="div" className="error-message"/>
                                            </div>

                                            <div className="col-12">
                                                <div className="form-input">
                                                    <Field type="text" required name="line1" disabled={title === "View"} />
                                                    <label className="lh-1 text-16 text-light-1">Address Line 1</label>
                                                </div>
                                                <ErrorMessage name="line1" component="div" className="error-message"/>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-input">
                                                    <Field type="text" name="line2" disabled={title === "View"} />
                                                    <label className="lh-1 text-16 text-light-1">Address Line 2</label>
                                                </div>
                                                <ErrorMessage name="line2" component="div" className="error-message"/>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-input">
                                                    <Field type="text" required name="zipcode" disabled={title === "View"} />
                                                    <label className="lh-1 text-16 text-light-1">Zip-Code</label>
                                                </div>
                                                <ErrorMessage name="zipcode" component="div" className="error-message"/>
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
                                                                        setFieldTouched('images', true)
                                                                        setFieldValue('imageUpdated', true)
                                                                        setFieldValue('images',  Array.from(e.currentTarget.files))
                                                                    }
                                                                } />
                                                            </div>
                                                            <ErrorMessage name="images" component="div" className="error-message"/>
                                                        </div>
                                                    </>
                                                ) 
                                            }

                                            { data.images && data.images.length && 
                                                <div className="col-12 d-flex">
                                                    {data.images.map(image => (
                                                        <div className="col-3" key={image.id}>
                                                            <Image src={image.location} width={150} height={100} className="5px" alt="Retreat Images"/>
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
                                            <div className="col-12">
                                                <div className="d-flex items-center form-checkbox">
                                                    <Field type="checkbox" name="directBook" disabled={title === "View"}/>
                                                    <div className="form-checkbox__mark">
                                                        <div className="form-checkbox__icon icon-check" />
                                                    </div>
                                                    <div className="text-15 lh-11 ml-10">Direct Book</div>
                                                </div>
                                                <ErrorMessage name="directBook" component="div" className="error-message"/>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Schedule</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="row x-gap-20 y-gap-20">
                                            <div className="col-6">
                                                <div className="form-input">
                                                    <div style={{width: '100%'}}>
                                                        <DatePicker 
                                                            inputClass="custom_input-picker"
                                                            containerClassName="custom_container-picker"
                                                            numberOfMonths={2}
                                                            offsetY={10}
                                                            onChange={(e) => {setFieldValue('duration', e)}}
                                                            range
                                                            rangeHover
                                                            minDate={minDate}
                                                            value={data.schedules}
                                                            format="YYYY/MM/DD"
                                                            multiple
                                                            disabled={title === "View"}
                                                        />
                                                        <label className="lh-1 text-16 text-light-1">Schedule</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-input">
                                                    <Field type="text" required name="retreatDuration" disabled={title === "View"} />
                                                    <label className="lh-1 text-16 text-light-1">Duration(in days)</label>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Rooms</Accordion.Header>
                                    <Accordion.Body>
                                        <FieldArray
                                            name="rooms"
                                            render={(arrayHelper) => (
                                                <>
                                                    {
                                                        title !== "View" ? 
                                                            <button type="button" 
                                                                className="button h-50 px-24 -dark-1 bg-blue-1 text-white" 
                                                                disabled={values.rooms.length>=3}
                                                                onClick={() => {values.rooms.length <3 && arrayHelper.push({name: '', description: '', price: '', images: [], allowedGuest: '', advance: '', active: true})}}>
                                                                    Add Room <div className="icon-plus ml-15" />
                                                            </button>
                                                        : null
                                                    }
                                                    
                                                    {values.rooms.map((room, index) => (
                                                        <Card border="light" className="my-1" key={index}>
                                                            <Card.Header className="d-flex justify-between">Room {index+1}<CloseButton disabled={title === "View"} onClick={() => arrayHelper.remove(index)}/></Card.Header>
                                                            <Card.Body>
                                                                <RoomForm key={index} number={index} title={title} room={room} setFieldValue={setFieldValue}/>
                                                            </Card.Body>
                                                        </Card>
                                                    ))}
                                                </>
                                            )}
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
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