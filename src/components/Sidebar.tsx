import Link from "next/link";
import { MdViewSidebar } from "react-icons/md";
import { GiGymBag } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
const Sidebar = () => {
  return (
    <section className="shadow-lg">
      <h3 className="p-2 w-fit mx-auto mt-5 text-3xl font-semibold rounded-xl bg-rose-500 text-white shadow ">
        Fit
      </h3>
      <div className="flex flex-col space-y-6 px-12 text-rose-500 text-3xl pt-12 pb-8 min-h-screen bg-white  font-bold">
        <Link className="hover:text-rose-600 duration-100" href="/dashboard">
          <MdViewSidebar />
        </Link>
        <Link
          className="hover:text-rose-600 duration-100"
          href="/dashboard/challenges"
        >
          <GiGymBag />
        </Link>
        <Link
          className="hover:text-rose-600 duration-100"
          href="/dashboard/users"
        >
          <FaUsers />
        </Link>
        <Link
          className="hover:text-rose-600 duration-100"
          href="/dashboard/settings"
        >
          <FiSettings />
        </Link>
        <Link className="hover:text-rose-600 duration-100" href="/logout">
          <IoMdLogOut />
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
