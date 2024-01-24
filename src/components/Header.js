import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);
  console.log(user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="absolute w-full px-2 flex justify-between align-middle bg-gradient-to-b from-black z-10">
      <img
        className="w-52"
        src="
https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix-logo"
      />
      {user && (
        <div className="flex gap-4">
          <img
            className="w-16 my-2
          "
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="profile"
          />
          <div className="flex flex-col">
            {user.displayName}
            <button onClick={handleSignOut} className="text-white">
              (Sign out)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
