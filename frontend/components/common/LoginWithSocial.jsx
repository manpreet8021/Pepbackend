import { useGoogleLoginMutation } from '@/store/slice/api/userApiSlice';
import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from "next/navigation";

const LoginWithSocial = () => {
  const router = useRouter()
  const [googleLogin] = useGoogleLoginMutation()

  const handleGoogleSuccess = async (response) => {
    try{
      const result = await googleLogin(response)
      if(result.error) throw new Error(JSON.stringify(result.error))
      router.push('/')
    } catch (error) {

    }
  }

  const handleGoogleFailure = () => {
    console.log("fail")
  }

  return (
    <>
      <div className="col-md-6 col-12">
        <button className="button col-12 -outline-blue-1 text-blue-1 py-15 rounded-8 ">
          <i className="icon-apple text-15 mr-10" />
          Facebook
        </button>
      </div>

      <div className="col-md-6 col-12">
        <GoogleLogin 
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
          useOneTap
          shape='circle'
        />
        {/* <button className="button col-12 -outline-red-1 text-red-1 py-15 rounded-8" onClick={login}>
          <i className="icon-apple text-15 mr-10" />
          Google
        </button> */}
      </div>
    </>
  );
};

export default LoginWithSocial;
