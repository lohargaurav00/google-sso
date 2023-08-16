"use client";
import * as React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

import styles from "./page.module.css";
import { LoginContext } from "@/context";
import { useRouter } from "next/navigation";

export default function Home() {
  const {setUserProfile} = React.useContext(LoginContext) as any;
  const router = useRouter();
  // @success handling
  // accessed credentials of user from google login
  const handleLoginSuccess = (credentialResponse: any) => {
    const { credential } = credentialResponse; // destructuring credentials from response
    const object: any = jwtDecode(credential); // decoding to get user details
    console.log(object)
    setUserProfile(object); // setting user details to state
    router.push(`/${object.sub}`); // redirecting to user profile page
  };

  // @error handling
  // alert user if login failed
  const handleLoginError = () => {
    alert("Login failed");
  };

  return (
    <main className={styles.container}>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          handleLoginSuccess(credentialResponse);
        }}
        onError={() => {
          handleLoginError();
        }}
        useOneTap
      />
    </main>
  );
}
