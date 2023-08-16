
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LoginProvider } from "@/context";

const inter = Inter({ subsets: ["latin"] });


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
          <LoginProvider>{children}</LoginProvider>
      </body>
    </html>
  );
}
