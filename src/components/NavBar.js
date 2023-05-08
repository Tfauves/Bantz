import React, { useState } from "react";
import googleImg from "../assets/googleSignInImg.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const googleSignOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
      <h1>Sluper Chap Reactness</h1>
      {user ? (
        <button onClick={googleSignOut} className="sign-out" type="button">
          SignOut
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={googleImg}
            alt="sign in with Google"
            type="button"
          />
        </button>
      )}
    </nav>
  );
};

export default NavBar;
