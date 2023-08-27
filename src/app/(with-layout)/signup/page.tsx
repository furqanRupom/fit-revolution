import Register from "@/components/auth/Register";
import { Metadata } from "next";
export const metadata: Metadata
 = {
  title: 'fitRevolution | Sign up',
  description: 'This is our Challenges page'
}
const signUpPage = () => {
  return (
    <>
        <Register />
    </>
  );
};

export default signUpPage;