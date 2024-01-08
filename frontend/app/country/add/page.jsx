'use client'
import AdminWrapper from "@/components/layout/AdminWrapper";

export default function addCountry() {
    const handleFileUpload = (event) => {

    }
    return(
        <AdminWrapper>
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-12">
                <h1 className="text-30 lh-14 fw-600">Add Country</h1>
              </div>
            </div>

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
                <div className="col-xl-10">
                    {/* <div className="text-18 fw-500 mb-10">Hotel Content</div> */}
                    <div className="row x-gap-20 y-gap-20">
                        <div className="col-12">
                            <div className="form-input ">
                                <input type="text" required name="countryName"/>
                                <label className="lh-1 text-16 text-light-1">Country Name</label>
                            </div>
                        </div>

                        <div className="col-12">
                            <label className="lh-1 text-16 text-light-1">Country Logo</label>
                            <div className="form-input ">
                                <input type="file"
                                    id="uploadGallery"
                                    multiple
                                    accept="image/png, image/jpeg"
                                    onChange={handleFileUpload}/>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="d-flex items-center form-checkbox">
                                <input type="checkbox" name="active" value="true"/>
                                <div className="form-checkbox__mark">
                                    <div className="form-checkbox__icon icon-check" />
                                </div>
                                <div className="text-15 lh-11 ml-10">Active</div>
                            </div>
                        </div>
                    </div>

                    <div className="d-inline-block pt-30">
                        <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
                            Save Changes <div className="icon-arrow-top-right ml-15" />
                        </button>
                    </div>
                </div>
            </div>
        </AdminWrapper>
    )
}