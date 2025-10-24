import React, { use } from "react";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";
import { TbLogin2, TbLogout } from "react-icons/tb";


const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then(() => {
           toast(" 🔒 user logout")
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  const items = (
    <>
      <li>
        {" "}
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/all_games">All Game</NavLink>
      </li>
      

      <li>
        {" "}
        <NavLink to="/popular-game" className={`${
            user ? "hover:text-blue-500" : "text-gray-400 "
          }`}> Most Popular Game</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/profile"  className={`${
            user ? "hover:text-blue-500" : "text-gray-400 "
          }`}> My Profile</NavLink>
      </li>
    </>
  );
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {items}
            </ul>
          </div>
          <Link to="/">
            <div className="btn btn-ghost text-xl">
              <span className="text-3xl text-[#3f00a4]">
                <IoGameControllerOutline />
              </span>
              <span className="text-[#6505ff]"> gameHub</span>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end gap-2 mr-4">
          <Link to="/Profile">
            {user && user.photoURL ? (
              <img
                src={user.photoURL}
                alt="User"
                className="w-10 h-10 rounded-full object-cover border-2 border-blue-500"
              />
            ) : (
              <MdAccountCircle className="text-4xl text-gray-600" />
            )}
          </Link>
          {user ? (
            <button onClick={handelLogOut} className="btn text-[#5031ff]">
              Logout
              <TbLogout className="text-2xl"/>
            </button>
          ) : (
            <Link to="/login">
              <p className="btn text-[#5031ff]"><TbLogin2 className="text-2xl"/> Login</p>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
