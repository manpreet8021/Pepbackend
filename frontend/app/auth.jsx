import { useGetInfoMutation } from "@/store/slice/api/userApiSlice"
import { useEffect, useState } from "react"

const Auth = ({children}) => {
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