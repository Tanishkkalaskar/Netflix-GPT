import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSigninForm] = useState(true);

  const toggleForm = () => {
    setIsSigninForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute -z-10 h-screen min-h-screen opacity-97">
        <img
          className="min-h-full min-w-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="background"
        />
      </div>
      <form className="absolute w-3/12 p-12 my-64 mx-auto left-0 right-0 bg-black text-white rounded-lg bg-opacity-80">
        <h1 className="text-4xl my-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="w-full bg-gray-700 border-black my-4 p-4"
            type="text"
            placeholder="Full name"
          />
        )}
        <input
          className="w-full bg-gray-700 border-black my-4 p-4"
          type="email"
          placeholder="Email"
        />

        <input
          className="w-full bg-gray-700 border-black my-4 p-4"
          type="password"
          placeholder="Password"
        />
        <button className="w-full bg-red-700 my-4 p-4 text-center rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-2 cursor-pointer" onClick={toggleForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up now"
            : "Already registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
