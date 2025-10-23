import React from "react";

const Register = () => {
  return (
    <div>
      <div className="hero bg-base-200  min-h-[85vh]">
        <div className="hero-content  ">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-center text-5xl font-bold">Register Now!</h1>
              <fieldset className="fieldset">

                <label className="label">Your Name</label>
                <input type="text" className="input" placeholder="Your Name" />

                <label className="label">Photo URL</label>
                <input type="Text" className="input" placeholder="Photo URL" />

                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />


                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
