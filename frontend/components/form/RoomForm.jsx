import { ErrorMessage, Field } from "formik";

export default function RoomForm({title, number, room, setFieldValue}) {
    return (
        <div className="row x-gap-20 y-gap-20">
            <div className="col-12">
                <div className="form-input ">
                    <Field type="text" required name={`rooms[${number}].roomName`} disabled={title === "View"} />
                    <label className="lh-1 text-16 text-light-1">Room Name</label>
                </div>
                <ErrorMessage name={`rooms[${number}].roomName`} component="div" className="error-message"/>
            </div>
            <div className="col-12">
                <div className="form-input">
                    <Field type="text" required name={`rooms[${number}].roomDescription`} disabled={title === "View"} />
                    <label className="lh-1 text-16 text-light-1">Description</label>
                </div>
                <ErrorMessage name={`rooms[${number}].roomDescription`} component="div" className="error-message"/>
            </div>
            <div className="col-6">
                <div className="form-input">
                    <Field type="text" required name={`rooms[${number}].roomPrice`} disabled={title === "View"} />
                    <label className="lh-1 text-16 text-light-1">Price</label>
                </div>
                <ErrorMessage name={`rooms[${number}].roomPrice`} component="div" className="error-message"/>
            </div>
            <div className="col-6">
                <div className="form-input">
                    <Field type="text" required name={`rooms[${number}].roomGuestCount`} disabled={title === "View"} />
                    <label className="lh-1 text-16 text-light-1">Number of Guest</label>
                </div>
                <ErrorMessage name={`rooms[${number}].roomGuestCount`} component="div" className="error-message"/>
            </div>
            {
                title !== "View" && ( 
                    <>
                        <div className="col-12">
                            <div className="form-input ">
                                <input type="file"
                                    name={`rooms[${number}].roomImages`}
                                    accept='image/*'
                                    multiple
                                    onChange={(e) => {
                                        setFieldValue('roomImageUpdated', true)
                                        setFieldValue(`rooms[${number}].roomImages`, Array.from(e.currentTarget.files))}
                                    } />
                            </div>
                            <ErrorMessage name={`rooms[${number}].roomImages`} component="div" className="error-message"/>
                        </div>
                    </>
                ) 
            }
        </div>
    )
}