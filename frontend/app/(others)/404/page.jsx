import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import NotFound from "@/components/common/NotFound";
import Header1 from "@/components/header";

const index = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header1 background="white"/>
      {/* End Header 1 */}

      <NotFound />
      {/* End 404 section */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
      {/* End Call To Actions Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
