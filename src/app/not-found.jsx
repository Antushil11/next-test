import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 justify-center items-center ">
      <h2>404 | Page Not Found</h2>
      <Link href={"/"} className="underline">Go to Home</Link>
    </div>
  );
};

export default NotFound;
