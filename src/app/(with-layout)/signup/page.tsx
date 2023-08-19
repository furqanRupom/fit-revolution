"use client";
import { useAuth } from "@/Context/useAuth";
import appwriteService, { AppWriteService, account } from "@/appwrite/config";
import bg from "@/assets/fitness.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios"
export function generateMetadata() {
  return {
    title: "Sign Up",
  };
}

type FormData = {
  name: string;
  email: string;
  password: string;
};

const SignUpPage = () => {
  const router = useRouter();
  const { register, setValue, handleSubmit } = useForm<FormData>();
  const { authStatus, setAuthStatus } = useAuth();
  if (authStatus) {
    router.push("/");

    return <></>;
  }
  const onSubmit = handleSubmit(async (users: any) => {
   const {email,password,name} = users

    try {
      const userData = await appwriteService.createUserAccount({email,password,name});
       axios.post("/api/users",users)
       .then(res=> console.log(res.data));

      if (userData) {
        setAuthStatus(true);
        toast.success("User Created Successfully");
        router.push("/");
      }
    } catch (error: any) {
      toast.error(error.message);
      console.log(error);
    }
  });
  return (
    <div
      className="h-screen relative"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/4761785/pexels-photo-4761785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-full bg-slate-900/50 backdrop-blur-sm flex items-center justify-center">
        <div className="w-full mx-auto flex items-center justify-center">
          <div className="max-w-5xl w-full mx-6 bg-slate-950/25  rounded-lg shadow-lg overflow-hidden lg:flex items-center justify-center">
            <div className="flex-1 px-4">
              {" "}
              <h3 className=" text-2xl lg:text-3xl font-bold text-white ">
                Join the Fitness Revolution Today!
              </h3>
              <p className="pt-3 text-gray-50  text-lg">
                Join us today to revolutionize the way you approach fitness and
                take the first stride towards a happier, healthier you. Your
                fitness revolution starts here!
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center p-6">
              <div className="max-w-md w-full space-y-8">
                <div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Sign Up
                  </h2>
                </div>
                <form onSubmit={onSubmit} className="mt-8 space-y-6">
                  <div className="rounded-md shadow-sm ">
                    <div>
                      <label htmlFor="name" className="sr-only">
                        Name
                      </label>
                      <input
                        {...register("name")}
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm"
                        placeholder="Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        {...register("email")}
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                      />
                    </div>

                    <div>
                      <label htmlFor="password" className="sr-only">
                        Password
                      </label>
                      <input
                        {...register("password")}
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="new-password"
                        required
                        className="appearance-none rounded-none relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                      />
                    </div>
                  </div>

                  <p className="text-white">
                    Already have an account?&nbsp;
                    <Link className="text-rose-500 font-bold" href="/login">
                      Login
                    </Link>
                  </p>

                  <div>
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SignUpPage;
