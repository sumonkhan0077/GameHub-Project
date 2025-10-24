import React, { use, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";

const Register = () => {
   const {createUser, setUser , updateUser } = use(AuthContext)
   const [nameError , setNameError] = useState('')
     const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

   const navigate = useNavigate();

   const handelRegister =(e) => {
     e.preventDefault()

    const name = e.target.name.value
    if(name.length < 3 ) {
      setNameError("Name should be more then 3 charecter")
      return
    }
    else{
      setNameError('')
    }
    const photo= e.target.photo.value
    const email = e.target.email.value
    const password = e.target.password.value
    // console.log(name, photo, email, password)

  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }


    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    } else if (!uppercase.test(password)) {
      setPasswordError("Password must contain at least one uppercase letter");
      return;
    } else if (!lowercase.test(password)) {
      setPasswordError("Password must contain at least one lowercase letter");
      return;
    } else if (!specialChar.test(password)) {
      setPasswordError("Password must contain at least one special character");
      return;
    } else {
      setPasswordError("");
    }

    createUser(email, password)
       .then ((result) => {
      //  console.log(result.user)
      updateUser({displayName: name , photoURL: photo})
         .then(() => {
            setUser({ ...result.user , displayName: name , photoURL: photo})
            navigate("/")

          })
         .catch((error) => {
            console.log(error)
            setUser(result.user)
          })

     })
     .catch(error => {
       console.log(error)
   })
  }
  return (
    <div>
      <title>GameHub-Register</title>
      <div className="hero bg-base-200  min-h-[80vh]">
        <div className="hero-content mt-15  ">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-center text-5xl font-bold">Register Now!</h1>
              <form onSubmit={handelRegister}>
              <fieldset className="fieldset">

                <label className="label">Your Name</label>
                <input name='name' type="text" className="input" placeholder="Your Name" />

                {nameError && <p className="text-red-500">{nameError}</p>}

                <label className="label">Photo URL</label>
                <input name='photo' type="Text" className="input" placeholder="Photo URL" />

                <label className="label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
                {emailError && <p className="text-red-500 ">{emailError}</p>}

                <label className="label">Password</label>
                <input
                  name="password"
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                {passwordError && <p className="text-red-500">{passwordError}</p>}
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn text-[#1673ff]  mt-4">Login</button>

               
                
                <p>Already have an account? <Link className="text-[#4073ff]" to='/login'>Login</Link> </p>
              </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
