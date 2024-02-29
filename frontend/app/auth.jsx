import { useGetInfoMutation } from "@/store/slice/api/userApiSlice"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Auth = ({children}) => {
    const state = useSelector(state=> state.auth.userInfo)
    const [getInfo] = useGetInfoMutation() 
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getUserInfo = async () => {
            await getInfo();
            setLoading(false)
        } 

        getUserInfo()
    }, [])
    return(
        <>
            {
                loading ? null : children
            }
        </>
    )
}

export default Auth