import React from "react";
import { Link, NavLink } from "react-router";
import MyLink from "./MyLink";

const Navbar = () => {
  const links = (
    <>
      <li>
        <MyLink
          to="/"
        >
          Home
        </MyLink>
      </li>
      <li>
        <MyLink
          to="/all-movies"
        >
          All Movies
        </MyLink>
      </li>
      <li>
        <MyLink
          to="/profile"
        >
          Profile
        </MyLink>
      </li>
      <li>
        <MyLink
          to="/add-movie"
        >
          Add Movie
        </MyLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0 z-50 bg-transparent text-white px-6">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-base-content rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link to="/" className="text-xl font-bold">
          Movie <span className="text-primary">Master</span>
        </Link>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end">
        <Link to="/auth/register" className="btn btn-outline text-white hover:btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
