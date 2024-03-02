
'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { useLogoutMutation } from "@/store/slice/api/userApiSlice";
import { useRouter } from "next/navigation";

const HeaderDashBoard = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const [logout] = useLogoutMutation()

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleLogout = () => {
    logout()
  }

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    const body = document.querySelector("body");
    if (isOpen) {
      body.classList.add("-is-sidebar-open");
    } else {
      body.classList.remove("-is-sidebar-open");
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`header -dashboard ${navbar ? "is-sticky bg-white" : ""}`}
      >
        <div className="header__container px-30 sm:px-20">
          <div className="-left-side">
            <Link href="/" className="header-logo">
              <img src="/img/general/logo-dark.svg" alt="logo icon" />
            </Link>
            {/* End logo */}
          </div>
          {/* End _left-side */}

          <div className="row justify-between items-center pl-60 lg:pl-20">
            <div className="col-auto">
              <div className="d-flex items-center">
                <button className="d-flex" onClick={handleToggle}>
                  <i className="icon-menu-2 text-20"></i>
                </button>

                <div className="single-field relative d-flex items-center md:d-none ml-30">
                  <input
                    className="pl-50 border-light text-dark-1 h-50 rounded-8"
                    type="email"
                    placeholder="Search"
                  />
                  <button className="absolute d-flex items-center h-full">
                    <i className="icon-search text-20 px-15 text-dark-1"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* End .col-auto */}

            <div className="col-auto">
              <div className="d-flex items-center">
                {/* <div className="header-menu">
                  <div className="header-menu__content">
                    <MainMenu style="text-dark-1" />
                  </div>
                </div> */}
                {/* End header-menu */}

                <div className="row items-center x-gap-5 y-gap-20 pl-20 lg:d-none">
                  <div className="col-auto">
                    <button className="button -blue-1-05 size-50 rounded-22 flex-center">
                      <i className="icon-email-2 text-20"></i>
                    </button>
                  </div>
                  {/* End col-auto */}

                  <div className="col-auto">
                    <button className="button -blue-1-05 size-50 rounded-22 flex-center">
                      <i className="icon-notification text-20"></i>
                    </button>
                  </div>
                  {/* End col-auto */}
                </div>
                {/* End .row */}

                <div className="pl-15">
                  <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                      <Image
                        width={50}
                        height={50}
                        src="/img/avatars/3.png"
                        alt="image"
                        className="size-50 rounded-22 object-cover"
                      />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <div className="mt-20">
                          <button
                            type="submit"
                            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
                            onClick={handleLogout}
                          >
                            Logout
                          </button>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>

                {/* <div className="d-none xl:d-flex x-gap-20 items-center pl-20">
                  <div>
                    <button
                      className="d-flex items-center icon-menu text-20"
                      data-bs-toggle="offcanvas"
                      aria-controls="mobile-sidebar_menu"
                      data-bs-target="#mobile-sidebar_menu"
                    ></button>
                  </div>

                  <div
                    className="offcanvas offcanvas-start  mobile_menu-contnet "
                    tabIndex="-1"
                    id="mobile-sidebar_menu"
                    aria-labelledby="offcanvasMenuLabel"
                    data-bs-scroll="true"
                  >
                    <MobileMenu />
                  </div>
                </div> */}
              </div>
              {/* End -flex items-center */}
            </div>
            {/* End col-auto */}
          </div>
          {/* End .row */}
        </div>
        {/* End header_container */}
      </header>
      {/* End header */}
    </>
  );
};

export default HeaderDashBoard;
