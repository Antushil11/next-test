import Link from "next/link";
import React from "react";

const Dashlayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <div className="col-span-3 border-r-2 ">
        <h2 className="mt-4">Navigation</h2>
        <div className="grid gap-4 mt-10">
            <Link className="py-2  px-4 w-full bg-blue-400 rounded-xl" href="/dashboard/my-profile">My Profile</Link>
            <Link className="py-2  px-4 w-full bg-blue-400 rounded-xl" href="/dashboard/settings">Settings</Link>
            <Link className="py-2  px-4 w-full bg-blue-400 rounded-xl" href="/dashboard/add-story">Add Story</Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default Dashlayout;
