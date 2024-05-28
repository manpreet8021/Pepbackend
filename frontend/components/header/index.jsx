'use client'

import Link from "next/link";
import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import CurrenctyMegaMenu from "./CurrenctyMegaMenu";
import LanguageMegaMenu from "./LanguageMegaMenu";
import MobileMenu from "./MobileMenu";
import { usePathname } from 'next/navigation'
import CustomToast from "../toast/toast";
import { useLogoutMutation } from "@/store/slice/api/userApiSlice";
import { googleLogout } from '@react-oauth/google';

// export const metadata = {
//   title: "Home-1 || GoTrip - Travel & Tour React NextJS Template",
//   description: "GoTrip - Travel & Tour React NextJS Template",
// };

const Header1 = () => {
  const [logout] = useLogoutMutation()
  const [navbar, setNavbar] = useState(false);
  const path = usePathname()
  const [dark, setDark] = useState('bg-dark-1')

  const darkColorValue = () => {
    if(path !== '/') {
      setDark('bg-dark-3')
      setNavbar(true)
    } else {
      if (window.scrollY >= 10) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
  };

  useEffect(() => {
    darkColorValue();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", darkColorValue);
    return () => {
      window.removeEventListener("scroll", darkColorValue);
    };
  }, []);

  return (
    <>
      <header className={`header ${navbar ? `${dark} is-sticky` : ""}`}>
        <div className="header__container px-30 sm:px-20">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <Link href="/" className="header-logo mr-20">
                  <img src="/img/general/logo-light.svg" alt="logo icon" />
                  <img src="/img/general/logo-dark.svg" alt="logo icon" />
                </Link>
                {/* End logo */}

                {/* <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-white" />
                  </div>
                </div> */}
                
                {/* End header-menu */}
              </div>
              {/* End d-flex */}
            </div>
            {/* End col */}

            <div className="col-auto">
              <div className="d-flex items-center">
                {/* <div className="row x-gap-20 items-center xxl:d-none">
                  <CurrenctyMegaMenu textClass="text-white" />
                  <div className="col-auto">
                    <div className="w-1 h-20 bg-white-20" />
                  </div>
                  <LanguageMegaMenu textClass="text-white" />
                </div> */}

                {/* Start btn-group */}
                {/* <div className="d-flex items-center ml-20 is-menu-opened-hide xl:d-none">
                  {
                    userState.userInfo ?
                    <>
                      <Link
                        href="/"
                        className="button px-30 fw-400 text-14 -white bg-white h-50 text-dark-1"
                      >
                        Become An Expert
                      </Link>
                      <button
                        onClick={() => {
                          logout()
                          googleLogout()
                          router.push('/')
                        }}
                        className="button px-30 fw-400 text-14 border-white -outline-white h-50 text-white ml-20"
                      >
                        Logout
                      </button>
                    </>
                    :
                    <Link
                      href="/login"
                      className="button px-30 fw-400 text-14 border-white -outline-white h-50 text-white ml-20"
                    >
                      Sign In / Register
                    </Link>
                  }
                  
                </div> */}
                {/* End btn-group */}

                {/* Start mobile menu icon */}
                <div className="xl:d-flex x-gap-20 items-center pl-30 text-white">
                  <div>
                    <div>
                      <button
                        className="d-flex items-center icon-menu text-inherit text-20"
                        data-bs-toggle="offcanvas"
                        aria-controls="mobile-sidebar_menu"
                        data-bs-target="#mobile-sidebar_menu"
                      />

                      <div
                        className="offcanvas offcanvas-end  mobile_menu-contnet "
                        tabIndex="-1"
                        id="mobile-sidebar_menu"
                        aria-labelledby="offcanvasMenuLabel"
                        data-bs-scroll="true"
                      >
                        <MobileMenu logout={logout} googleLogout={googleLogout}/>
                      </div>
                    </div>
                  </div>
                  
                </div>
                {/* End mobile menu icon */}
              </div>
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      <CustomToast />
    </>
  );
};

export default Header1;
