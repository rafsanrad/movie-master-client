import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const Profile = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div className=" flex items-center justify-center bg-base-200 mt-10">
      <div className="card w-96 bg-base-100 shadow-xl text-center">
        <div className="card-body items-center">
          {/* Profile Image */}
          <img
            src={user?.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
            alt="User"
            className="w-24 h-24 rounded-full mb-4"
          />

          {/* Name */}
          <h2 className="card-title">{user?.displayName || "No Name"}</h2>

          {/* Email */}
          <p className="text-gray-500">{user?.email}</p>

          {/* Status */}
          <span className="badge badge-success mt-3">Logged In</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;