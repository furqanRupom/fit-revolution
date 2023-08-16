import Link from "next/link";
import {MdViewSidebar} from "react-icons/Md"
import {GiGymBag} from "react-icons/gi"
import {FaUsers} from "react-icons/fa"
import {FiSettings} from "react-icons/fi"
import {IoMdLogOut} from "react-icons/io"
const Sidebar = () => {
    return (
        <div className="flex flex-col space-y-4 px-4">
            <Link href="/profile"><MdViewSidebar /></Link>
            <Link href="/challenges"><GiGymBag /></Link>
            <Link href="/users"><FaUsers /></Link>
            <Link href="/settings"><FiSettings /></Link>
            <Link href="/logout"><IoMdLogOut /></Link>
        </div>
    );
};

export default Sidebar;