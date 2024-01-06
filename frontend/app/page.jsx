'use client'

import MainHome from "@/components/home";
import AdminHome from "@/components/dashboard/vendor-dashboard/dashboard"
import { useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.auth)

  return (
    <>
      { user.userInfo && user.userInfo.isAdmin ? <AdminHome /> : <MainHome /> }
    </>
  );
}
