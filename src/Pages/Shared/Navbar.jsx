import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Navbar = () => {
  const {user, logOut} = use(AuthContext);

  const handleLogOut = ()=>{
  
    logOut()
    .then(()=>{
      console.log("Logout successful");
    })
    .catch(error =>{
      console.error(error.message);
    })
  }
;
  const links = (
    <div className="flex items-center gap-5">
      <li>
        <NavLink className='text-black text-lg ' to="/">Home</NavLink>
      </li>

      {
        user &&  <li>
        <NavLink className='text-black text-lg ' to="/myApplications">My Apllications</NavLink>
      </li>
      }
      {
        user &&  <li>
        <NavLink className='text-black text-lg ' to="/addJob">Add Job</NavLink>
      </li>
      }
    </div>
  );
  return (
    <section className=" bg-gray-100">
    <div className="navbar  text-black py-5  container">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
      </div>
      <ul className="navbar-center">
        {links}
      </ul>
      <div className="navbar-end flex gap-2">
        {user ? (
          <button onClick={handleLogOut} className="btn">LogOut</button>
        ) : (
          <>
            <NavLink className="btn" to="/register">
              Register
            </NavLink>
            <NavLink className="btn bg-green-200 text-black" to="/login">
              Login
            </NavLink>
          </>
        )}
      </div>
    </div>
    </section>
  );
};

export default Navbar;
