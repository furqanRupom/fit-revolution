import { MdVerified } from "react-icons/md";
import Slider from "./Slider";

const Instructor: React.FC = () => {
  return (
    <section className="mt-48 mb-16 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h3 className="text-5xl uppercase ">
            <p className="font-thin   text-transparent bg-gradient-to-tr from-red-500  to-rose-300 bg-clip-text ">
              Join the Movement,
            </p>
            <p className="pt-1 font-bold">
              Create Health, Happiness & Strength!
            </p>
          </h3>

          <button className="px-10 py-4 rounded shadow-md bg-gradient-to-tr from-red-500 to-rose-500 text-white text-lg mt-6 font-bold uppercase hover:bg-gradient-to-tr hover:from-red-600 hover:to-rose-600 duration-200">
          Explore Our Story Further
          </button>
        </div>


        <div>

            <div>
                <p className="leading-relaxed text-gray-600 text-xl">
                We are confident that our staff and facility can help you to reach your fitness goals. Whether  <span className="text-rose-500">you’re a beginner or a pro,</span>  we’re here to help. After spending time in our facility and with our team we want our members to walk out of our doors after a workout and feel like they are a better version of themselves.
                </p>
            </div>

            <ul className="text-lg mt-5 flex flex-col space-y-1">
                <li className="flex space-x-2 items-center">
                    <span className="text-rose-500"><MdVerified /></span>  <p>
                    Success is in your future
                    </p>
                </li>
                <li className="flex space-x-2 items-center">
                <span className="text-rose-500"><MdVerified /></span>
                <p>Confidence is yours to gain</p>
                </li>
                <li className="flex space-x-2 items-center">
                <span className="text-rose-500"><MdVerified /></span>
                <p>Discover something new each time</p>
                </li>
            </ul>

        </div>
      </div>

      <Slider />
    </section>
  );
};

export default Instructor;
