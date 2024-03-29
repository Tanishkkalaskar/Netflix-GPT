import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { AUTH_BG } from "../utils/constants";

const Authentication = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setIsSigninForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = validateData(name, email, password);
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredentials) => {
          const user = userCredentials.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName }));
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ":-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + ":-" + errorMessage);
      });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={AUTH_BG}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-full md:w-3/12 p-12 my-32 md:my-64 md:mx-auto md:left-0 md:right-0 bg-black text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-xl md:text-4xl my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="w-full bg-gray-700 border-black my-3 p-2 md:my-4 md:p-4"
            type="text"
            placeholder="Full name"
          />
        )}
        <input
          ref={email}
          className="w-full bg-gray-700 border-black my-3 p-2 md:my-4 md:p-4"
          type="email"
          placeholder="Email"
        />

        <input
          ref={password}
          className="w-full bg-gray-700 border-black my-3 p-2 md:my-4 md:p-4"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-700">{errorMessage}</p>
        <button
          className="w-full bg-red-700 my-3 p-2 md:my-4 md:p-4 text-center rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="my-2 cursor-pointer text-xs md:text-xl"
          onClick={toggleForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Authentication;
