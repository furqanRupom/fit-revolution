import Login from "@/components/auth/Login";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: 'fitRevolution | Login',
  description: 'This is our Challenges page'
}
const LoginPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
