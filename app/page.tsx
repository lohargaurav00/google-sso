"use client";
import * as React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useRouter } from "next/navigation";
import { GoogleOAuthProvider } from "@react-oauth/google";

import styles from "./page.module.css";
import { LoginContext } from "@/context";
import Image from "next/image";

export default function Home() {
  const googleAuthId: string = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";
  const { setUserProfile } = React.useContext(LoginContext) as any;
  const router = useRouter();
  // @success handling
  // accessed credentials of user from google login
  const handleLoginSuccess = (credentialResponse: any) => {
    const { credential } = credentialResponse; // destructuring credentials from response
    const object: any = jwtDecode(credential); // decoding to get user details
    setUserProfile(object); // setting user details to state
    router.push(`/${object.sub}`); // redirecting to user profile page
  };

  // @error handling
  // alert user if login failed
  const handleLoginError = () => {
    alert("Login failed");
  };

  return (
    <GoogleOAuthProvider clientId={googleAuthId}>
      <main className={styles.container}>
        <h1 className={styles.title}>Welcome to Google OAuth</h1>
        <div className={styles.card_container}>
          <Image
            src="/login_vector.png"
            alt="vector"
            width={250}
            height={250}
          />
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              handleLoginSuccess(credentialResponse);
            }}
            onError={() => {
              handleLoginError();
            }}
            useOneTap
          />
        </div>
      </main>
    </GoogleOAuthProvider>
  );
}
