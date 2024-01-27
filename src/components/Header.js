import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/UserSlice";
import { changeLanguage } from "../utils/ConfigSlice";
import {
  DEFAULT_AVATAR_URL,
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
} from "../utils/constants";
import { toggleGPTSearchView } from "../utils/GPTSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearchPage = useSelector((store) => store.gpt.showGPTSearchPage);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
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
          <div>
            {showGPTSearchPage && (
              <select
                className="p-2 bg-gray-600 text-white"
                name="language"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
          </div>

          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-md"
            onClick={handleGPTSearch}
          >
            GPT search
          </button>
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
