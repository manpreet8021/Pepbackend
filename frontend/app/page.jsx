'use client'

import MainHome from "@/components/home";
import AdminHome from "@/components/dashboard/vendor-dashboard/dashboard"
import { useSelector, useDispatch } from "react-redux";
import AdminWrapper from "@/components/layout/AdminWrapper";
import { useEffect, useState } from "react";
import { setToken } from "@/store/slice/authSlice";

export default function Home() {
  const [loading, setLoading] = useState(true)
  const user = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const info = localStorage.getItem("userInfo")
    if(info) {
      dispatch(setToken(JSON.parse(info)))
    }
    setLoading(false)
  }, [])

  return (
    <>
      { loading ? null :
        user.userInfo && user.userInfo.isAdmin ? 
        (<AdminWrapper><AdminHome /></AdminWrapper>) : <MainHome /> }
    </>
  );
}
