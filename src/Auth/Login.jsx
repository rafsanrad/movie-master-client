import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
        <h2 className="text-center font-bold text-3xl mb-3">Login Now !</h2>
        <p className="text-center text-gray-500 mb-10">Sign in to access your personalized movie list, ratings, and exclusive features.</p>
      <div className="flex justify-center items-center ">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
          <h2 className="font-semibold text-2xl text-center">
            Login your account
          </h2>
          <form className="card-body">
            <fieldset className="fieldset">
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
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>

              <button type="submit" className="btn btn-outline hover:btn-primary mt-4">
                Login
              </button>
              <p className="font-semibold text-center pt-5">
                Dont’t Have An Account ?{" "}
                <Link className="text-primary" to="/auth/register">
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
