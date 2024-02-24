import { GoogleLogin } from 'react-google-login';

function Login() {

  const onSuccess = (res) => {
    console.log("Login OK", res.profileObj);
    console.log("Login OK", res);
  }

  const onFailure = (res) => {
    console.log("Failure", res);
  }

  return(
    <div id="signInButton" className=' bg-black'>
      <GoogleLogin className=' bg-black text-black'
        buttonText='Login'
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy='single-host-origin'
        isSignedIn={true}
      />
    </div>
  )

}

export default Login;
