import React from "react";
import { SidebarIcon } from "./sidebar-icon";
import { useUser } from "../providers/user";
import { useNavigate } from "react-router-dom";
import { signOut, getAuth } from "firebase/auth";
import { toast } from "react-toastify";

export function Sidebar() {
  const { setCurrentUser } = useUser();
  const navigate = useNavigate();

  const auth = getAuth();

  return (
    <div className="bg-white max-w-xs border border-r p-2">
      <div className="mx-4 ml-12">
        <h2 className="text-blue text-2xl font-semibold">CHATTER</h2>
        <div className="my-4">
          <h2 className="font-semibold my-2">Overview</h2>
          <div className="space-y-4 ml-4">
            <SidebarIcon
              title="Feed"
              image={`${process.env.PUBLIC_URL}/assets/sidebar-svgs/ftxtoken.svg`}
            />
            <SidebarIcon
              title="Bookmarks"
              image={`${process.env.PUBLIC_URL}/assets/sidebar-svgs/bookmarks.svg`}
            />
            <SidebarIcon
              title="Team blogs"
              image={`${process.env.PUBLIC_URL}/assets/sidebar-svgs/team.svg`}
            />
            <SidebarIcon
              title="Drafts"
              image={`${process.env.PUBLIC_URL}/assets/sidebar-svgs/drafts.svg`}
            />
            <SidebarIcon
              title="Analytics"
              image={`${process.env.PUBLIC_URL}/assets/sidebar-svgs/analytics.svg`}
            />
          </div>
        </div>
        <div className="my-4">
          <div className="flex space-x-2 my-2">
            <h2 className="font-semibold">Trending Tags</h2>
            <img
              src={`${process.env.PUBLIC_URL}/assets/sidebar-svgs/trending.svg`}
              alt=""
            />
          </div>
          <ul className="space-y-2 ml-4">
            <li className="">Programming</li>
            <li className="">Data science</li>
            <li className="">Technology</li>
            <li className="">Machine learning</li>
            <li className="">Politics</li>
            <li className="">See all</li>
          </ul>
        </div>
        <div className="my-4">
          <h2 className="font-semibold my-2">Personal</h2>
          <div className="space-y-4 ml-4">
            <SidebarIcon
              title="Account"
              image={`${process.env.PUBLIC_URL}/assets/sidebar-svgs/account.svg`}
            />
            <SidebarIcon
              title="Notifications"
              image={`${process.env.PUBLIC_URL}/assets/sidebar-svgs/vector.svg`}
            />
          </div>
        </div>
        <h6
          className="log-out-text cursor-pointer"
          onClick={async () => {
            await signOut(auth);
            setCurrentUser(null);
            navigate("/");
            toast.success("Logout successful");
          }}
        >
          Log out
        </h6>
      </div>
    </div>
  );
}
