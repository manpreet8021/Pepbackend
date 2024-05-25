'use client'

import Header from "@/components/header";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import dynamic from "next/dynamic";
import BookingInfo from "@/components/common/user/LocationInfo"

const page = () => {
	return(
		<>
			{/* End Page Title */}

			<div className="header-margin"></div>
			{/* header top margin */}

			<Header />
			{/* End Header 1 */}

			<section className="layout-pt-lg layout-pb-lg bg-blue-2">
				<div className="container">
					<div className="row justify-center">
						<div className="col-xl-12 col-lg-12 col-md-10">
							<div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
							<button className="tabs__button text-20 lg:text-16 text-light-1 fw-500 pb-5 lg:pb-0 js-tabs-button">
								Booking Information
							</button>
								<BookingInfo />
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* End login section */}

			<CallToActions />
			{/* End Call To Actions Section */}

			<DefaultFooter />
			{/* End Call To Actions Section */}
		</>
	)
}

export default dynamic(() => Promise.resolve(page), { ssr: false });