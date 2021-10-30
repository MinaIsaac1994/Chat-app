import React from "react";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "../firebase";
import { Button } from "@mui/material";

function SignIn() {
  const signIn = async () => {
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <Button
        style={{
          padding: "30px",
          fontSize: "20px",
          borderRadius: "0",
          fontWeight: "600",
        }}
        onClick={signIn}
      >
        Sign In With Google
      </Button>
    </div>
  );
}

export default SignIn;
