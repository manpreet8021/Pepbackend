import CallToActions from "@/components/common/CallToActions";
import Header from "@/components/header";
import DefaultFooter from "@/components/footer/default";
import StepperBooking from "@/components/booking-page/stepper-booking";

export const metadata = {
  title: "Hotel Booking Page || GoTrip - Travel & Tour React NextJS Template",
  description: "GoTrip - Travel & Tour React NextJS Template",
};

const index = () => {
  return (
    <>
      <div className="header-margin"></div>
      
      <Header />

      <section className="pt-40 layout-pb-md">
        <div className="container">
          <StepperBooking />
        </div>
      </section>

      <CallToActions />

      <DefaultFooter />
    </>
  );
};

export default index;
