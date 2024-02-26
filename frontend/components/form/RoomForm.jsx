import { ErrorMessage, Field } from "formik";

export default function RoomForm({title, number, room, setFieldValue}) {
    return (
        <div className="row x-gap-20 y-gap-20">
            <div className="col-12">
                <div className="form-input ">
                    <Field type="text" required name={`rooms[${number}].name`} disabled={title === "View"} />
                    <label className="lh-1 text-16 text-light-1">Room Name</label>
                </div>
                <ErrorMessage name={`rooms[${number}].name`} component="div" className="error-message"/>
            </div>
            <div className="col-12">
                <div className="form-input">
                    <Field type="text" required name={`rooms[${number}].description`} disabled={title === "View"} />
                    <label className="lh-1 text-16 text-light-1">Description</label>
                </div>
                <ErrorMessage name={`rooms[${number}].description`} component="div" className="error-message"/>
            </div>
            <div className="col-6">
                <div className="form-input">
                    <Field type="text" required name={`rooms[${number}].price`} disabled={title === "View"} />
                    <label className="lh-1 text-16 text-light-1">Price</label>
                </div>
                <ErrorMessage name={`rooms[${number}].price`} component="div" className="error-message"/>
            </div>
            <div className="col-6">
                <div className="form-input">
                    <Field type="text" required name={`rooms[${number}].advance`} disabled={title === "View"} />
                    <label className="lh-1 text-16 text-light-1">Advance %</label>
                </div>
                <ErrorMessage name={`rooms[${number}].advance`} component="div" className="error-message"/>
            </div>
            <div className="col-6">
                <div className="form-input">
                    <Field type="text" required name={`rooms[${number}].allowedGuest`} disabled={title === "View"} />
                    <label className="lh-1 text-16 text-light-1">Number of Guest</label>
                </div>
                <ErrorMessage name={`rooms[${number}].allowedGuest`} component="div" className="error-message"/>
            </div>
            {
                title !== "View" && ( 
                    <>
                        <div className="col-12">
                            <div className="form-input ">
                                <input type="file"
                                    name={`rooms[${number}].images`}
                                    accept='image/*'
                                    multiple
                                    onChange={(e) => {
                                        setFieldValue('roomImageUpdated', true)
                                        setFieldValue(`rooms[${number}].images`, Array.from(e.currentTarget.files))}
                                    } />
                            </div>
                            <ErrorMessage name={`rooms[${number}].images`} component="div" className="error-message"/>
                        </div>
                    </>
                ) 
            }
            <div className="col-12">
                <div className="d-flex items-center form-checkbox">
                    <Field type="checkbox" name={`rooms[${number}].active`} disabled={title === "View"}/>
                    <div className="form-checkbox__mark">
                        <div className="form-checkbox__icon icon-check" />
                    </div>
                    <div className="text-15 lh-11 ml-10">Active</div>
                </div>
                <ErrorMessage name={`rooms[${number}].active`} component="div" className="error-message"/>
            </div>
        </div>
    )
}