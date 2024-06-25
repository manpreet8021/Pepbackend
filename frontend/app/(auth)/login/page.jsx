'use client'
import dynamic from "next/dynamic";
import CallToActions from "@/components/common/CallToActions";
import DefaultFooter from "@/components/footer/default";
import LoginWithSocial from "@/components/common/LoginWithSocial";
import LoginForm from "@/components/common/LoginForm";
import Header from "@/components/header";
import { useSearchParams } from "next/navigation";
import Link from "next/link";


const LogIn = () => {
  const searchParam = useSearchParams()
  const q = searchParam.get('q')  

  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

      <section className="layout-pt-lg layout-pb-lg bg-blue-2">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-8 col-lg-8 col-md-9">
              <div className="px-50 py-50 sm:px-20 sm:py-20 bg-white shadow-4 rounded-4">
                <LoginForm query={q}/>
                {/* End .Login */}

                <div className="row y-gap-20 pt-30">
                  <div className="col-12">
                    <div className="text-center">or sign in with</div>
                  </div>
                  <LoginWithSocial query={q}/>
                  <div className="col-12">
                    <div className="text-center px-30">
                      By creating an account, you agree to our <Link href='/terms' className="text-blue-1">Terms of Service </Link>
                      and <Link href='/privacy' className="text-blue-1">Privacy Statement</Link>.
                    </div>
                  </div>
                </div>
                {/* End .row */}
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
  );
};

export default dynamic(() => Promise.resolve(LogIn), { ssr: false });
