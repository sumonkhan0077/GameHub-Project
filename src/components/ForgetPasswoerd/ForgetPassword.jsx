import React, { use, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useLocation, useNavigate } from 'react-router';
import { TiArrowBack } from 'react-icons/ti';

const ForgetPassword = () => {
    const navigate = useNavigate()
    const {forgetPassword} = use(AuthContext)
    const location = useLocation()
    // console.log(location)

    const passedEmail = location.state?.email || "";
     const [email, setEmail] = useState(passedEmail);
    // console.log(passedEmail)

    const handleReset = (e) => {
    e.preventDefault();
    forgetPassword(email)
      .then(() => {
        alert("Password reset link sent! Check your Gmail.");
        window.open("https://mail.google.com", "_blank");  
      })
      .catch((error) => {
        console.log(error.code, error.message);
      });
  };
    return (
      <div data-aos="fade-up" className="hero bg-base-200 min-h-[82vh]">
        <title>GameHub-forgot-password</title>
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Reset Password</h1>
          <form onSubmit={handleReset}>
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn text-[#1673ff] mt-4">
              Reset Password
            </button>
          </form>
        </div>
         <button onClick={() => navigate(-1)} className="btn text-lg flex items-center justify-center px-8 btn-primary absolute mt-60 ml-2"> 
            <span><TiArrowBack className="text-xl" />
            </span>
            <span> Back</span>
        </button>
      </div>
    </div>
    );
};

export default ForgetPassword;