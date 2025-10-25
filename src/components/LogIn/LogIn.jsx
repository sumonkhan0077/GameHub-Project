import React, { use, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";

const LogIn = () => {
  const [error, setError] = useState("");
  const { logInUser, signInWithGoogle, setUser, forgetPassword } =
    use(AuthContext);
  const location = useLocation();
  // console.log(location)
  const navigate = useNavigate();
  const emailRef = useRef(null);

  const handelLogInUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setError("");
    logInUser(email, password)
      .then((result) => {
        // console.log(result.user);
        e.target.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorcode = error.code;
        // const errormessage = error.message
        // alert(errorcode, errormessage)
        setError(errorcode);
      });
  };

  const handelGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleForgetPassword = () => {
  const email = emailRef.current?.value || "";
  navigate("/forget-password", { state: { email } });
};

  // const handelForgetPassword = () => {
  //   const email = emailRef.current.value
  //   forgetPassword(email)
  //   .then((result) => {
  //        alert('password reset please check your email')
  //     })
  //    .catch((error) => {
  //      const errorCode = error.code;
  //       const errorMessage = error.message;
  //      console.log(errorCode, errorMessage)
  //      });
  //      console.log(emailRef.current.value)
  // }
  return (
    <div>
      <title>GameHub-login</title>
      <div data-aos="fade-up" className="hero bg-base-200 mt-10  min-h-[82vh]">
        <div className="hero-content  ">
          <div className="card bg-base-100 w-100 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-center text-5xl font-bold">Login now!</h1>

              <form onSubmit={handelLogInUser}>
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input
                    name="email"
                    type="email"
                    ref={emailRef}
                    className="input"
                    placeholder="Email"
                    required
                  />

                  <label className="label">Password</label>
                  <input
                    name="password"
                    type="password"
                    className="input"
                    placeholder="Password"
                    required
                  />

                  <p
                    onClick={handleForgetPassword}
                    className="link link-hover cursor-pointer text-[#0745ff]"
                  >
                    Forgot password?
                  </p>


                  {error && <p className="text-red-500">{error}</p>}
                  <button type="submit" className="btn text-[#1673ff]  mt-4">
                    Login
                  </button>
                  <div className="flex justify-center items-center">
                    <div className="w-25 h-0.5 bg-[#1673ff] rounded-2xl"></div>
                    <p className="text-center text-[15px]">or</p>
                    <div className="w-25 h-0.5 bg-[#1673ff] rounded-2xl"></div>
                  </div>
                  <button
                  type="submit"
                    onClick={handelGoogleSignIn}
                    className="btn text-[#1673ff]  mt-2 "
                  >
                    <FcGoogle className="text-xl" /> Google
                  </button>

                  <p>
                    Don’t have an account?{" "}
                    <Link className="text-[#0245ff]" to="/register">
                      Sign up
                    </Link>
                  </p>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
