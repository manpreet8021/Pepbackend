import { useLogoutMutation } from "@/store/slice/api/userApiSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const [logout] = useLogoutMutation()
  const router = useRouter()

  const sidebarData = [
    {
      icon: "/img/dashboard/sidebar/booking.svg",
      title: "Country",
      links: [
        { title: "All Country", href: "/admin/country" }
      ],
    },
    {
      icon: "/img/dashboard/sidebar/map.svg",
      title: "City",
      links: [
        { title: "All City", href: "/admin/city" }
      ],
    },
    {
      icon: "/img/dashboard/sidebar/sneakers.svg",
      title: "Manage Activity",
      links: [
        { title: "All Activity", href: "#" },
        { title: "Add Activity", href: "#" },
        { title: "Recovery", href: "#" },
      ],
    },
    {
      icon: "/img/dashboard/sidebar/house.svg",
      title: "Manage Holiday Rental",
      links: [
        {
          title: "All Holiday Rental",
          href: "#",
        },
        {
          title: "Add Holiday Rental",
          href: "#",
        },
        {
          title: "Recovery",
          href: "#",
        },
      ],
    },
    {
      icon: "/img/dashboard/sidebar/taxi.svg",
      title: "Manage Car",
      links: [
        {
          title: "All Car",
          href: "#",
        },
        {
          title: "Add Car",
          href: "#",
        },
        {
          title: "Recovery",
          href: "#",
        },
      ],
    },
    {
      icon: "/img/dashboard/sidebar/canoe.svg",
      title: "Manage Cruise",
      links: [
        {
          title: "All Cruise",
          href: "#",
        },
        {
          title: "Add Cruise",
          href: "#",
        },
        {
          title: "Recovery",
          href: "#",
        },
      ],
    },
    {
      icon: "/img/dashboard/sidebar/airplane.svg",
      title: "Manage Flights",
      links: [
        {
          title: "All Flights",
          href: "#",
        },
        {
          title: "Add Flights",
          href: "#",
        },
        {
          title: "Recovery",
          href: "#",
        },
      ],
    },
  ];

  return (
    <>
      <div className="sidebar -dashboard" id="vendorSidebarMenu">
        <div className="sidebar__item ">
          <Link
            href="/"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/compass.svg"
              alt="image"
              className="mr-15"
            />
            Dashboard
          </Link>
        </div>
        {/* End accordion__item */}

        <div className="sidebar__item ">
          <Link
            href="/admin/retreats"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/booking.svg"
              alt="image"
              className="mr-15"
            />
            Manage Retreats
          </Link>
        </div>
        {/* End accordion__item */}

        <div className="sidebar__item ">
          <Link
            href="/admin/country"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/map.svg"
              alt="image"
              className="mr-15"
            />
            Country
          </Link>
        </div>

        <div className="sidebar__item ">
          <Link
            href="/admin/city"
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/map.svg"
              alt="image"
              className="mr-15"
            />
            City
          </Link>
        </div>

        {/* {sidebarData.map((item, index) => (
          <div className="sidebar__item" key={index}>
            <div className="accordion -db-sidebar js-accordion">
              <div className="accordion__item">
                <div
                  className="accordion__button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#sidebarItem${index}`}
                >
                  <div className="sidebar__button col-12 d-flex items-center justify-between">
                    <div className="d-flex items-center text-15 lh-1 fw-500">
                      <Image
                        width={20}
                        height={20}
                        src={item.icon}
                        alt="image"
                        className="mr-10"
                      />
                      {item.title}
                    </div>
                    <div className="icon-chevron-sm-down text-7" />
                  </div>
                </div>
                <div
                  id={`sidebarItem${index}`}
                  className="collapse"
                  data-bs-parent="#vendorSidebarMenu"
                >
                  <ul className="list-disc pt-15 pb-5 pl-40">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href} className="text-15">
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))} */}

        <div className="sidebar__item ">
          <button
            onClick={() => {logout(); router.push("/")}}
            className="sidebar__button d-flex items-center text-15 lh-1 fw-500"
          >
            <Image
              width={20}
              height={20}
              src="/img/dashboard/sidebar/log-out.svg"
              alt="image"
              className="mr-15"
            />
            Logout
          </button>
        </div>
        {/* End accordion__item */}
      </div>
    </>
  );
};

export default Sidebar;
