import { useGoogleLoginMutation } from '@/store/slice/api/userApiSlice';
import { GoogleLogin } from '@react-oauth/google';
import { useRouter } from "next/navigation";

const LoginWithSocial = ({query}) => {
  const router = useRouter()
  const [googleLogin] = useGoogleLoginMutation()

  const handleGoogleSuccess = async (response) => {
    try{
      const result = await googleLogin(response)
      if(result.error) throw new Error(JSON.stringify(result.error))
      
      query ? router.push(`/booking-page/${query}`) : router.push('/')
    } catch (error) {

    }
  }

  const handleGoogleFailure = () => {
  }

  return (
    <>
      {/* <div className="col-md-6 col-12">
        <button className="button col-12 -outline-blue-1 text-blue-1 py-15 rounded-8 ">
          <i className="icon-apple text-15 mr-10" />
          Facebook
        </button>
      </div> */}
      <div className='row'>
        <div className="col-12" style={{'textAlign': '-webkit-center'}}>
          <GoogleLogin 
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            useOneTap
            shape='rectangle'
          />
        </div>
        {/* <button className="button col-12 -outline-red-1 text-red-1 py-15 rounded-8" onClick={login}>
          <i className="icon-apple text-15 mr-10" />
          Google
        </button> */}
      </div>
    </>
  );
};

export default LoginWithSocial;
