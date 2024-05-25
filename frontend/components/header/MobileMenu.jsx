import Link from "next/link";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  categorieMegaMenuItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,

} from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "@/components/common/ContactInfo";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const MobileMenu = ({logout, googleLogout}) => {
  const pathname = usePathname();
  const user = useSelector(state => state.auth)

  const [isActiveParent, setIsActiveParent] = useState(false)
  const [isActiveNestedParentTwo, setisActiveNestedParentTwo] = useState(false)
  const [isActiveNestedParent, setisActiveNestedParent] = useState(false)

  const router = useRouter()

  useEffect(() => {
    categorieMegaMenuItems.map((megaMenu=>{
    megaMenu?.menuCol?.map((megaCol=>{
      megaCol?.menuItems?.map((item=>{   
        item?.menuList?.map((list)=>{
          if (list.routePath?.split('/')[1] == pathname.split('/')[1]) {
            setIsActiveParent(true)
            setisActiveNestedParentTwo(item?.title)
            setisActiveNestedParent(megaMenu?.id)           
          }
        })
      }))
    }))
  }))


   
 }, [])

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/general/logo-dark.svg" alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

    
        <Sidebar width="400" backgroundColor="#fff">

          <Menu>
            {/* <SubMenu label="Home" className={ homeItems.some((item=>item.routePath?.split('/')[1] == pathname.split('/')[1])) ? "menu-active-link":''}>
              {homeItems.map((item, i) => (
                <MenuItem
                  key={i}
                  onClick={()=>router.push(item.routePath)}
                  className={
                    isActiveLink(item.routePath, pathname)
                      ? "menu-active-link"
                      : "inactive-menu"
                  }
                 
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu> */}
            {/* End  All Home Menu */}

            {/* <SubMenu label="Categories" className={isActiveParent ? 'menu-active-link':'' }>
              {categorieMobileItems.map((item) => (
                <SubMenu label={item.title} key={item.id} className={isActiveNestedParent == item.id ? 'menu-active-link':'inactive-menu'}>
                  {item.menuItems.map((single) => (
                    <SubMenu label={single.title} key={single.id}  className={isActiveNestedParentTwo == single.title ? 'menu-active-link':'inactive-menu'} >
                      {single.menuList.map((menu, i) => (
                        <MenuItem
                          key={i}
                          onClick={()=>router.push(menu.routePath)}
                          className={
                            isActiveLink(menu.routePath, pathname)
                              ? "menu-active-link"
                              : "inactive-menu"
                          }
                        >
                          {menu.name}
                        </MenuItem>
                      ))}
                    </SubMenu>
                  ))}
                </SubMenu>
              ))}
            </SubMenu> */}
            {/* End  All Categories Menu */}

            {
              user.userInfo ? 
              <>
                <MenuItem
                  onClick={()=>router.push("/")}
                  className={
                    pathname === "/"
                      ? "menu-active-link"
                      : ""
                  }>
                  Home
                </MenuItem>

                <MenuItem
                  onClick={()=>router.push("/user")}
                  className={
                    pathname === "/user"
                      ? "menu-active-link"
                      : ""
                  }>
                  User Details
                </MenuItem>
                
                <MenuItem
                  onClick={()=>router.push("/booking")}
                  className={
                    pathname === "/booking" ? "menu-active-link" : ""
                  }>
                  Booking
                </MenuItem>
                
                <MenuItem
                  onClick={()=>router.push("/favourite")}
                  className={
                    pathname === "/favourite" ? "menu-active-link" : ""
                  }>
                  Favourite
                </MenuItem>

                <MenuItem onClick={()=>{
                  logout()
                  googleLogout()
                  router.push('/')
                }}>
                  Logout
                </MenuItem>
              </>
              :
              <Link
                href="/login"
                className="button px-30 fw-400 text-14 border-white bg-blue-1 h-50 text-white mx-3"
              >
                Sign In / Register
              </Link>
            }

            
          </Menu>
        </Sidebar>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
        {/* <div className="mt-20">
          <Link
            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            href="/"
          >
            Become An Expert
          </Link>
        </div> */}
      </div>
      {/* End pro-footer */}
    </>
  );
};


export default MobileMenu;
