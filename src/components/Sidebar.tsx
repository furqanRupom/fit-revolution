import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="flex flex-col space-y-4 px-4">
            <Link href="/profile">Profile</Link>
            <Link href="/challenges">My Challenges</Link>
            <Link href="/users">All users</Link>
            <Link href="/settings">Settings</Link>
        </div>
    );
};

export default Sidebar;