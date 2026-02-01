import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div>
        <h2 className="text-center font-bold text-3xl mb-2">Register Now !</h2>
        <p className="text-center text-gray-500 mb-10">Sign up to access your personalized movie list, ratings, and exclusive features.</p>
      <div className="flex justify-center items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">
            Register your account
          </h2>
          <form className="card-body">
            <fieldset className="fieldset">
              {/* Name field  */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Name"
                required
              />

              {/* Photo URL field  */}
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
                required
              />

              {/* email field  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* password field  */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />

              <button
                type="submit"
                className="btn btn-outline hover:btn-primary mt-4"
              >
                Register
              </button>
              <p className="font-semibold text-center pt-5">
                Already Have An Account ?{" "}
                <Link className="text-primary" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
