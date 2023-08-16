"use client";
import * as React from "react";
import LoginContext from "./loginContext";

const LoginProvider = ({ children }: { children: React.ReactNode }) => {
  const [userProfile, setUserProfile] = React.useState<object | null >(null);

  return (
    <LoginContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
