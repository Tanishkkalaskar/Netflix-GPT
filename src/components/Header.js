import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/UserSlice";
import { DEFAULT_AVATAR_URL, NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full px-4 flex justify-between align-middle bg-gradient-to-b from-black z-10">
      <img className="w-52" src={NETFLIX_LOGO} alt="Netflix-logo" />
      {user && (
        <div className="flex gap-4 items-center">
          <img
            className="w-16 my-2
          "
            src={DEFAULT_AVATAR_URL}
            alt="profile"
          />
          <div className="flex flex-col text-white">
            {user.displayName}
            <button onClick={handleSignOut}>(Sign out)</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
