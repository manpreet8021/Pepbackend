'use client'

import MainHome from "@/components/home";
import AdminHome from "@/components/dashboard/vendor-dashboard/dashboard"
import { useSelector } from "react-redux";
import AdminWrapper from "@/components/layout/AdminWrapper";

export default function Home() {
  const user = useSelector((state) => state.auth)

  return (
    <>
      { user.userInfo && user.userInfo.isAdmin ? 
        (<AdminWrapper><AdminHome /></AdminWrapper>) : <MainHome /> }
    </>
  );
}
