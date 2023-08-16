"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LoginProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });
const googleAuthId: string = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

export const metadata: Metadata = {
  title: "google-sso ",
  description: "Google sso testing app to check google login",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <GoogleOAuthProvider clientId={googleAuthId}>
          <LoginProvider>{children}</LoginProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
